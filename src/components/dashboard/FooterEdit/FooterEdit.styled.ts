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

export const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.space.normal}rem;
  &:first-of-type {
    margin-top: 0;
  }
`;
