import React, { ReactNode } from 'react';
import * as s from './Template.styled';

interface IProps {
  navbar: ReactNode;
  sidebar: ReactNode;
  children: ReactNode;
}

const Template: React.SFC<IProps> = ({ navbar, sidebar, children }) => (
  <s.TempContainer>
    {navbar}
    <s.TempWrapper>
      {sidebar}
      <s.TempChildWrapper>{children}</s.TempChildWrapper>
    </s.TempWrapper>
  </s.TempContainer>
);

export default Template;
