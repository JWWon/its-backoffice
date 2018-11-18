import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.space.narrow}rem;
  box-sizing: border-box;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
