import styled from 'styled-components';

export const Container = styled.div`
  flex-basis: 40rem;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.normal}rem;
`;

export const Label = styled.h5`
  font-size: ${({ theme }) => theme.font.normal};
  color: ${({ theme }) => theme.color.darkGray};
`;

export const AddButton = styled.button`
  margin-left: auto;
  background: ${({ theme }) => theme.color.gray};
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
`;

const Input = styled.input.attrs({ type: 'text' })`
  padding: ${({ theme }) => theme.space.small}rem 0;
  font-size: ${({ theme }) => theme.font.small};
  border-bottom: 1px solid ${({ theme }) => theme.color.darkGray};
  color: ${({ theme }) => theme.color.black};
  &:first-of-type {
    margin-right: 1.2rem;
  }
`;

export const Key = styled(Input)`
  width: 24%;
`;

export const Value = styled(Input)`
  width: 76%;
`;
