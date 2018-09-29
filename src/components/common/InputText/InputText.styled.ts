import styled from 'styled-components';

export const Container = styled.div`
  flex-basis: 40rem;
`;

export const Label = styled.h5`
  font-size: ${({ theme }) => theme.font.normal};
  color: ${({ theme }) => theme.color.darkGray};
  margin-bottom: ${({ theme }) => theme.space.normal}rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.space.small}rem 0;
  font-size: ${({ theme }) => theme.font.small};
  border-bottom: 1px solid ${({ theme }) => theme.color.darkGray};
  color: ${({ theme }) => theme.color.black};
`;
