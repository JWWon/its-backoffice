import React from 'react';
import * as s from './InputRound.styled';

interface IProps {
  info: {
    name: string;
    type?: 'text' | 'password' | 'number' | 'email' | 'button';
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputRound: React.SFC<IProps> = ({ info, handleChange }) => (
  <s.Input
    name={info.name}
    type={info.type || 'text'}
    placeholder={info.name}
    onChange={handleChange}
  />
);

export default InputRound;
