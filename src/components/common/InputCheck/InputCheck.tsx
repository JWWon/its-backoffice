import React from 'react';
import InputWrapper from '../InputWrapper';
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
  <InputWrapper label={label}>
    <s.Input name={name} checked={checked} onChange={handleChange} />
  </InputWrapper>
);

export default InputCheck;
