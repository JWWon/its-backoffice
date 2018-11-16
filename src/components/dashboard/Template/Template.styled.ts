import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 3.6rem 4.8rem;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.narrow}rem;
`;

export const TextWrapper = styled.div`
  display: flex;
`;

export const ActionWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

export const Label = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.title};
  font-weight: bold;
`;

export const Message = styled.p`
  margin-left: ${({ theme }) => theme.space.smaller}rem;
  color: ${({ theme }) => theme.color.gray};
  font-size: ${({ theme }) => theme.font.small};
`;

export const Input = styled.input.attrs({
  type: 'text',
  placeholder: '검색',
})`
  width: 20rem;
  height: 3.6rem;
  margin-right: 1.6rem;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 1.8rem;
  font-size: ${({ theme }) => theme.font.small};
  padding: 0 1.8rem;
`;

export const Button = styled.button`
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

export const ContentWrapper = styled.div`
  flex: 1;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.gray};
`;
