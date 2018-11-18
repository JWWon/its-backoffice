import React from 'react';
import InputWrapper from '../InputWrapper';
import * as s from './InputText.styled';

interface Props {
  label: string;
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [x: string]: any;
}

const InputText: React.SFC<Props> = ({
  label,
  name,
  handleChange,
  value,
  ...option
}) => (
  <InputWrapper label={label}>
    <s.Input
      name={name}
      placeholder="입력하세요"
      value={value}
      onChange={handleChange}
      {...option}
    />
  </InputWrapper>
);

export default InputText;
