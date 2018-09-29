import React from 'react';
import * as s from './InputText.styled';

interface Props {
  label: string;
  name: string;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  value: string;
}

const InputText: React.SFC<Props> = ({ label, name, handleChange, value }) => {
  return (
    <s.Container>
      <s.Label>{label}</s.Label>
      <s.Input type="text" name={name} value={value} onChange={handleChange} />
    </s.Container>
  );
};

export default InputText;
