import AWS from 'aws-sdk';
import React, { Component } from 'react';
import * as s from './ImageEdit.styled';

import InputImage from 'components/common/InputImage';
import InputText from 'components/common/InputText';
import { RowWrapper } from 'components/common/InputWrapper';
import {
  InputInterface as SubmitInterface,
  updateImage,
} from 'lib/networks/image';

interface State {
  href: string;
  alt: string;
  desktopSrc: string | null;
  desktopFile: File | null;
  mobileSrc: string | null;
  mobileFile: File | null;
  title: string;
  content: string;
}

class ImageEdit extends Component<SubmitInterface, State> {
  public constructor(props: SubmitInterface) {
    super(props);
    this.state = {
      href: props.href || '',
      alt: props.alt || '',
      desktopSrc: props.desktopSrc || null,
      desktopFile: null,
      mobileSrc: props.mobileSrc || null,
      mobileFile: null,
      title: props.title || '',
      content: props.content || '',
    };
  }

  public render() {
    const { href, alt, desktopSrc, mobileSrc, title, content } = this.state;
    const { type } = this.props;

    return (
      <s.Form onSubmit={this.handleSubmit}>
        <RowWrapper>
          <InputText
            label={type === 'news' ? '링크 번호' : '하이퍼링크'}
            name="href"
            value={href}
            handleChange={this.handleChange}
          />
          <InputText
            label="SEO 텍스트"
            name="alt"
            value={alt}
            handleChange={this.handleChange}
          />
        </RowWrapper>
        {type === 'news' && (
          <RowWrapper>
            <InputText
              label="제목"
              name="title"
              value={title}
              handleChange={this.handleChange}
            />
            <InputText
              label="내용"
              name="content"
              value={content}
              handleChange={this.handleChange}
            />
          </RowWrapper>
        )}
        <RowWrapper>
          <InputImage
            disabled
            label="데스크탑 이미지"
            name="desktopFile"
            defaultSrc={desktopSrc}
            handleImageChange={this.handleImageChange}
          />
          <InputImage
            disabled
            label="모바일 이미지"
            name="mobileFile"
            defaultSrc={mobileSrc}
            handleImageChange={this.handleImageChange}
          />
        </RowWrapper>
        <s.ButtonWrapper>
          <s.SubmitButton>등록</s.SubmitButton>
        </s.ButtonWrapper>
      </s.Form>
    );
  }

  private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    this.setState(prevState => ({ ...prevState, [name]: value }));
  };

  private handleImageChange = (name: string, file: File | null) => {
    this.setState(state => ({ ...state, [name]: file }));
  };

  private handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { desktopFile, mobileFile } = this.state;

    try {
      if (desktopFile) await this.uploadImage(desktopFile, 'desktopSrc');
      if (mobileFile) await this.uploadImage(mobileFile, 'mobileSrc');

      const { href, alt, desktopSrc, mobileSrc } = this.state;
      const { id, type } = this.props;
      const data: SubmitInterface = { href, alt };
      // ** APPEND REQUEST DATA
      if (id) data.id = id;
      else data.type = type;

      if (desktopSrc) data.desktopSrc = desktopSrc;
      if (mobileSrc) data.mobileSrc = mobileSrc;

      if (type === 'news') {
        data.title = this.state.title;
        data.content = this.state.content;
      }
      // ** APPEND DATA END

      await updateImage(data);
    } catch (e) {
      throw e;
    }
  };

  private uploadImage = (file: File, srcType: string) =>
    new Promise((resolve, reject) => {
      const bucket = new AWS.S3();
      const params = {
        Bucket: process.env.REACT_APP_AWS_S3_BUCKET_NAME || '',
        Key: `images/${this.props.type}/${file.name}`,
        ContentType: file.type,
        Body: file,
        ACL: 'public-read',
      };

      bucket
        .upload(params)
        .on('httpUploadProgress', evt => {
          console.log((evt.loaded * 100) / evt.total);
        })
        .send(async (e: any, data: { Location: string }) => {
          if (e) throw e;
          await this.setState(state => ({
            ...state,
            [srcType]: data.Location,
          }));
          resolve(data.Location);
        });
    });
}

export default ImageEdit;
