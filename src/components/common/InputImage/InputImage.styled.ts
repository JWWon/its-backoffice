import styled from 'styled-components';

export const Input = styled.input.attrs({
  type: 'file',
})``;

export const Preview = styled.img`
  width: 100%;
  height: 32rem;
  object-fit: contain;
`;
