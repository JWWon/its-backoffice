import React, { ReactNode } from 'react';
import * as s from './ButtonRound.styled';

interface IProps {
  children: ReactNode;
}

const ButtonRound: React.SFC<IProps> = ({ children }) => (
  <s.Button>{children}</s.Button>
);

export default ButtonRound;
