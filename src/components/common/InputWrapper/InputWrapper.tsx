import React, { ReactNode } from 'react';
import * as s from './InputWrapper.styled';

interface Props {
  children: ReactNode;
  label: string;
  handleAdd?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const InputWrapper: React.SFC<Props> = ({
  children,
  label,
  handleAdd,
  disabled,
}) => (
  <s.Container>
    {disabled || !handleAdd ? (
      <s.Label>{label}</s.Label>
    ) : (
      <s.LabelContainer>
        <s.Label>{label}</s.Label>
        <s.AddButton onClick={handleAdd}>추가</s.AddButton>
      </s.LabelContainer>
    )}
    {children}
  </s.Container>
);

export default InputWrapper;
