import React from 'react';
import * as s from './InputCheck.styled';

interface Props {
  label: string;
  name: string;
  checked: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputCheck: React.SFC<Props> = ({
  label,
  name,
  checked,
  handleChange,
}) => (
  <s.Container>
    <s.Label>{label}</s.Label>
    <s.Input name={name} checked={checked} onChange={handleChange} />
  </s.Container>
);

export default InputCheck;
