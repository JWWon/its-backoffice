import React, { Component } from 'react';
import InputWrapper from '../InputWrapper';
import * as s from './InputImage.styled';

interface Props {
  label: string;
  name: string;
  handleImageChange: (name: string, file: File | null) => void;
  defaultSrc: string | null;
  disabled?: boolean;
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
    const { label, name, disabled } = this.props;
    const { previewSrc } = this.state;
    return (
      <InputWrapper
        disabled={disabled}
        label={label}
        buttonText="이미지 삭제"
        handleClick={this.handleDelete}>
        <s.Input name={name} onChange={this.handleChange} />
        {previewSrc && <s.Preview src={previewSrc} />}
      </InputWrapper>
    );
  }

  private handleChange = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    const { name, handleImageChange } = this.props;
    const file = e.target.files[0];
    this.setState({ previewSrc: URL.createObjectURL(file) });
    handleImageChange(name, file);
  };

  private handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { name, handleImageChange } = this.props;
    this.setState({ ...this.state, previewSrc: null });
    handleImageChange(name, null);
  };
}

export default InputImage;
