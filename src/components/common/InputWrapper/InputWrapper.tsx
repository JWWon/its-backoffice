import React, { ReactNode } from 'react';
import * as s from './InputWrapper.styled';

interface Props {
  children: ReactNode;
  label: string;
  buttonText?: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export const RowWrapper: React.SFC<{ children: ReactNode }> = ({
  children,
}) => <s.RowWrapper>{children}</s.RowWrapper>;

const InputWrapper: React.SFC<Props> = ({
  children,
  label,
  buttonText,
  handleClick,
  disabled,
}) => (
  <s.Container>
    {disabled || !handleClick ? (
      <s.Label>{label}</s.Label>
    ) : (
      <s.LabelContainer>
        <s.Label>{label}</s.Label>
        <s.AddButton onClick={handleClick}>{buttonText}</s.AddButton>
      </s.LabelContainer>
    )}
    {children}
  </s.Container>
);

export default InputWrapper;
