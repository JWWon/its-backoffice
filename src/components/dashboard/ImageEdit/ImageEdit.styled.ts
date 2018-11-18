import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 2rem;
`;

export const SubmitButton = styled.button`
  width: 14rem;
  height: 3.6rem;
  background-color: ${({ theme }) => theme.color.green};
  border-radius: 1.8rem;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.font.normal};
  &:hover {
    background-color: ${({ theme }) => theme.color.darkGreen};
  }
`;
