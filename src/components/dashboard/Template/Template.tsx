import React, { ReactNode } from 'react';
import * as s from './Template.styled';

interface Props {
  readonly label: string;
  children: ReactNode;
  message?: string;
  handleClick?: () => void;
  buttonText?: string;
}

const Template: React.SFC<Props> = ({
  label,
  children,
  message,
  handleClick,
  buttonText,
}) => (
  <s.Container>
    <s.HeaderWrapper>
      <s.TextWrapper>
        <s.Label>{label}</s.Label>
        {message && <s.Message>{message}</s.Message>}
      </s.TextWrapper>
      <s.ActionWrapper>
        {buttonText &&
          handleClick && (
            <s.Button onClick={handleClick}>{buttonText}</s.Button>
          )}
      </s.ActionWrapper>
    </s.HeaderWrapper>
    <s.ContentWrapper>{children}</s.ContentWrapper>
  </s.Container>
);

export default Template;
