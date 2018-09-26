import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginSection = styled.div`
  width: 40rem;
  height: 48rem;
  padding: 0 4.8rem;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.font.subtitle};
  color: ${({ theme }) => theme.color.darkGray};
  font-weight: bold;
  margin-bottom: 9.2rem;
`;
