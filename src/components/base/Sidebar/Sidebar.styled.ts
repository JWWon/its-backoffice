import styled from 'styled-components';

export const Container = styled.div`
  flex-basis: 20rem;
  padding: ${({ theme }) => theme.space.normal}rem;
  background-color: ${({ theme }) => theme.color.white};
  border-right: 1px solid ${({ theme }) => theme.color.darkGray};
`;
