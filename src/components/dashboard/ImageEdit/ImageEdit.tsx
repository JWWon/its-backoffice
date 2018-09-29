import React, { Component } from 'react';
import * as s from './ImageEdit.styled';

interface Props {
  id: string;
  type: 'slide' | 'news';
  desktopSrc?: string;
  mobileSrc?: string;
  href?: string;
  alt?: string;
}

class ImageEdit extends Component<Props> {
  public render() {
    return <s.Wrapper />;
  }
}

export default ImageEdit;
