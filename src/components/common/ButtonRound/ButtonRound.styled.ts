import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 4.8rem;
  box-sizing: border-box;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 2.4rem;
  margin-top: 3.6rem;
`;
