import AWS from 'aws-sdk';
import produce from 'immer';
import React, { Component } from 'react';
import * as s from './ImageEdit.styled';

import InputImage from 'components/common/InputImage';
import InputText from 'components/common/InputText';
import {
  InputInterface as SubmitInterface,
  updateImage,
} from 'lib/networks/image';

interface Props {
  type: 'slide' | 'news';
  id?: string;
  value?: {
    desktopSrc: string;
    mobileSrc: string;
    href: string;
    alt: string;
  };
}

interface State {
  href: string;
  alt: string;
  desktopSrc: string;
  desktopFile: File | null;
  mobileSrc: string;
  mobileFile: File | null;
}

class ImageEdit extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    const { value } = props;
    this.state = {
      href: '',
      alt: '',
      desktopSrc: (value && value.desktopSrc) || '',
      desktopFile: null,
      mobileSrc: (value && value.mobileSrc) || '',
      mobileFile: null,
    };
  }

  public componentDidMount() {
    if (this.props.value) {
      const { href, alt } = this.props.value;
      this.setState(state =>
        produce(state, draft => {
          if (typeof href === 'string') draft.href = href;
          if (typeof alt === 'string') draft.alt = alt;
        })
      );
    }
  }

  public render() {
    const { href, alt } = this.state;
    const { value } = this.props;

    return (
      <s.Form onSubmit={this.handleSubmit}>
        <s.RowWrapper>
          <InputText
            label="하이퍼링크"
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
        </s.RowWrapper>
        <s.RowWrapper>
          <InputImage
            label="데스크탑 이미지"
            name="desktopFile"
            defaultSrc={value ? value.desktopSrc : null}
            handleImageChange={this.handleImageChange}
          />
          <InputImage
            label="모바일 이미지"
            name="mobileFile"
            defaultSrc={value ? value.mobileSrc : null}
            handleImageChange={this.handleImageChange}
          />
        </s.RowWrapper>
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

  private handleImageChange = (e: React.ChangeEvent<any>) => {
    const { name, files } = e.target;
    this.setState(state => ({ ...state, [name]: files[0] }));
  };

  private handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { desktopFile, mobileFile } = this.state;

    try {
      if (desktopFile) await this.uploadImage(desktopFile, 'desktopSrc');
      if (mobileFile) await this.uploadImage(mobileFile, 'mobileSrc');

      const { href, alt, desktopSrc, mobileSrc } = this.state;
      const { id, type } = this.props;
      const data: SubmitInterface = { type, href, alt, desktopSrc, mobileSrc };
      if (id) data.id = id;

      await updateImage(data);
      alert('저장 완료!');
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
