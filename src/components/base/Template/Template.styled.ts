import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${props => props.theme.color.background};
  flex-direction: column;
`;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
`;
