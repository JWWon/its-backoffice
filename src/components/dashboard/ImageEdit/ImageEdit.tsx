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
  desktop: {
    file: File | null;
    src: string | null;
  };
  mobile: {
    file: File | null;
    src: string | null;
  };
}

class ImageEdit extends Component<Props, State> {
  public state: State = {
    desktop: { file: null, src: null },
    mobile: { file: null, src: null },
    href: '',
    alt: '',
  };

  public componentDidMount() {
    console.log(this.props.type);
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
            name="desktop"
            defaultSrc={value ? value.desktopSrc : null}
            handleImageChange={this.handleImageChange}
          />
          <InputImage
            label="모바일 이미지"
            name="mobile"
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
    this.setState(state =>
      produce(state, (draft: State) => {
        draft[name].file = files[0];
      })
    );
  };

  private handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { desktop, mobile, href, alt } = this.state;

    if (desktop.file) await this.uploadImage('desktop', desktop.file);
    if (mobile.file) await this.uploadImage('mobile', mobile.file);

    const { id, type } = this.props;
    const data: SubmitInterface = { type, href, alt };
    if (desktop.src) data.desktopSrc = desktop.src;
    if (mobile.src) data.mobileSrc = mobile.src;
    if (id) data.id = id;
    await updateImage(data);
  };

  private uploadImage = (name: string, file: File) => {
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
      .send((e: any, data: any) => {
        if (e) throw e;
        this.setState(state =>
          produce(state, (draft: State) => {
            draft[name].file = data.Location;
          })
        );
      });
  };
}

export default ImageEdit;
