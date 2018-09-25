import styled from 'styled-components';

export const TempContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${props => props.theme.color.background};
  flex-direction: column;
`;

export const TempWrapper = styled.div`
  flex: 1;
  display: flex;
`;

export const TempChildWrapper = styled.div`
  flex: 1;
`;
