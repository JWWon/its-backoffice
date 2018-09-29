import React, { Component } from 'react';
import * as s from './ImageEdit.styled';

import InputText from 'components/common/InputText';

interface Props {
  id: string;
  type: 'slide' | 'news';
  value?: {
    desktopSrc: string;
    mobileSrc: string;
    href: string;
    alt: string;
  };
}

interface State {
  desktopSrc: string;
  mobileSrc: string;
  href: string;
  alt: string;
}

class ImageEdit extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    if (props.value) {
      const { desktopSrc, mobileSrc, href, alt } = props.value;
      this.state = { desktopSrc, mobileSrc, href, alt };
    } else {
      this.state = { desktopSrc: '', mobileSrc: '', href: '', alt: '' };
    }
  }

  public render() {
    const { desktopSrc, mobileSrc, href, alt } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
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
          <InputText
            label="데스크탑 이미지"
            name="desktopSrc"
            value={desktopSrc}
            handleChange={this.handleChange}
          />
          <InputText
            label="모바일 이미지"
            name="mobileSrc"
            value={mobileSrc}
            handleChange={this.handleChange}
          />
        </s.RowWrapper>
      </form>
    );
  }

  private handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    this.setState(prevState => ({ ...prevState, [name]: value }));
  };

  private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
}

export default ImageEdit;
