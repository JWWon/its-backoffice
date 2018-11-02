import produce from 'immer';
import React, { Component } from 'react';
import * as s from './ImageEdit.styled';

import InputImage from 'components/common/InputImage';
import InputText from 'components/common/InputText';

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
  desktopFiles: FileList | null;
  mobileFiles: FileList | null;
}

class ImageEdit extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    let state: State = {
      desktopFiles: null,
      mobileFiles: null,
      href: '',
      alt: '',
    };

    if (props.value) {
      const { href, alt } = props.value;
      state = produce(state, draft => {
        draft.href = href;
        draft.alt = alt;
      });
    }

    this.state = state;
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
        draft[`${name}Files`] = files[0];
      })
    );
  };

  private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /**
     *  State에 있는 src는 S3에 업로드 후에 서버로 전송
     */
  };
}

export default ImageEdit;
