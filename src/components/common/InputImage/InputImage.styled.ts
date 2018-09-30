import styled from 'styled-components';

export const Container = styled.div`
  flex-basis: 40rem;
`;

export const Label = styled.h5`
  font-size: ${({ theme }) => theme.font.normal};
  color: ${({ theme }) => theme.color.darkGray};
  margin-bottom: ${({ theme }) => theme.space.normal}rem;
`;

export const Input = styled.input.attrs({
  type: 'file',
})``;

export const Preview = styled.img`
  width: 100%;
  height: 32rem;
  object-fit: contain;
`;
