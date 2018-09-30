import Spin from 'react-spinkit';
import styled from 'styled-components';
import './spinner-style.css';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Spinner = styled(Spin).attrs({
  name: 'ball-grid-pulse',
  className: 'custom-spinner',
})``;
