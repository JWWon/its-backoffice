import ic_delete from 'lib/icons/ic_delete.svg';
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
  max-height: 100%;
  background: ${({ theme }) => theme.color.white};
  box-sizing: border-box;
  padding: ${({ theme }) => theme.space.narrow}rem;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.space.normal}rem;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.h2`
  font-size: ${({ theme }) => theme.font.subtitle};
  color: ${({ theme }) => theme.color.black};
`;

export const DismissButton = styled.button`
  background: url(${ic_delete});
  width: 2.4rem;
  height: 2.4rem;
  border: none;
`;

export const ComponentWrapper = styled.div`
  flex: 1;
  overflow-y: scroll;
`;
