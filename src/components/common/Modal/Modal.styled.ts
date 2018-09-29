import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.color.blackOpacity};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 90rem;
  height: 75%;
  background: ${({ theme }) => theme.color.white};
  box-sizing: border-box;
  padding: ${({ theme }) => theme.space.normal};
`;

export const Header = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.space.normal};
  justify-content: space-between;
  align-items: center;
`;
