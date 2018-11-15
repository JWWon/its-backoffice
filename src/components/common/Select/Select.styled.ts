import styled from 'styled-components';

export const Container = styled.div`
  flex-basis: 40rem;
`;

export const Label = styled.h5`
  font-size: ${({ theme }) => theme.font.normal};
  color: ${({ theme }) => theme.color.darkGray};
  margin-bottom: ${({ theme }) => theme.space.small}rem;
`;
