import React, { ReactNode } from 'react';
import * as s from './Template.styled';

interface IProps {
  navbar: ReactNode;
  sidebar: ReactNode;
  children: ReactNode;
}

const Template: React.SFC<IProps> = ({ navbar, sidebar, children }) => (
  <s.Container>
    {navbar}
    <s.Wrapper>
      {sidebar}
      <s.Wrapper>{children}</s.Wrapper>
    </s.Wrapper>
  </s.Container>
);

export default Template;
