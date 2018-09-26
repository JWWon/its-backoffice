import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 4.8rem;
  margin-top: 2.4rem;
  padding: 1.6rem 2.4rem;
  box-sizing: border-box;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 2.4rem;
  &:first-of-type {
    margin-top: 0;
  }
`;
