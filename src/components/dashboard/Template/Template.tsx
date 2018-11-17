import React, { ReactNode } from 'react';
import * as s from './Template.styled';

interface Props {
  readonly label: string;
  children: ReactNode;
  count?: number;
  message?: string;
  // *** PROPS_FOR_BUTTON
  buttonText?: string;
  handleClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
  // *** PROPS_FOR_SEARCH
  search?: string;
  handleSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Template: React.SFC<Props> = ({
  label,
  children,
  count,
  message,
  buttonText,
  handleClick,
  search,
  handleSearch,
  handleSubmit,
}) => (
  <s.Container>
    <s.HeaderWrapper>
      <s.TextWrapper>
        <s.Label>
          {label}
          {count ? ` (${count}개)` : ''}
        </s.Label>
        {message && <s.Message>{message}</s.Message>}
      </s.TextWrapper>
      <s.ActionWrapper>
        {handleSearch && handleSubmit && (
          <form onSubmit={handleSubmit}>
            <s.Input name="search" value={search} onChange={handleSearch} />
          </form>
        )}
        {buttonText && handleClick && (
          <s.Button onClick={handleClick}>{buttonText}</s.Button>
        )}
      </s.ActionWrapper>
    </s.HeaderWrapper>
    <s.ContentWrapper>{children}</s.ContentWrapper>
  </s.Container>
);

export default Template;
