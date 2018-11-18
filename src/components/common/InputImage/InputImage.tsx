import React, { Component } from 'react';
import InputWrapper from '../InputWrapper';
import * as s from './InputImage.styled';

interface Props {
  label: string;
  name: string;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultSrc: string | null;
}

interface State {
  previewSrc: string | null;
}

class InputImage extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = { previewSrc: props.defaultSrc };
  }

  public render() {
    const { label, name } = this.props;
    const { previewSrc } = this.state;
    return (
      <InputWrapper label={label}>
        <s.Input name={name} onChange={this.handleChange} />
        {previewSrc && <s.Preview src={previewSrc} />}
      </InputWrapper>
    );
  }

  private handleChange = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    this.setState({ previewSrc: URL.createObjectURL(e.target.files[0]) });
    this.props.handleImageChange(e);
  };
}

export default InputImage;
