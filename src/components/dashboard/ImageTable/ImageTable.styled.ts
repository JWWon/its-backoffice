import styled from 'styled-components';

const Image = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: none;
`;

export const ImageDesktop = styled(Image)`
  width: 23rem;
  height: 10rem;
`;

export const ImageMobile = styled(Image)`
  width: 12rem;
  height: 10rem;
`;
