import React from 'react';
import * as s from './InputText.styled';

interface Props {
  label: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  [x: string]: any;
}

const InputText: React.SFC<Props> = ({
  label,
  name,
  handleChange,
  value,
  ...option
}) => (
  <s.Container>
    <s.Label>{label}</s.Label>
    <s.Input
      name={name}
      placeholder="입력하세요"
      value={value}
      onChange={handleChange}
      {...option}
    />
  </s.Container>
);

export default InputText;
