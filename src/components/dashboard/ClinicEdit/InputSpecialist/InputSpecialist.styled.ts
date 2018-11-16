import styled from 'styled-components';

export const Container = styled.div`
  flex-basis: 40rem;
`;

export const Label = styled.h5`
  font-size: ${({ theme }) => theme.font.normal};
  color: ${({ theme }) => theme.color.darkGray};
  margin-bottom: ${({ theme }) => theme.space.small}rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.font.small};
  color: ${({ theme }) => theme.color.darkGray};
  margin-right: 1rem;
`;

export const Input = styled.input.attrs({
  type: 'text',
})`
  flex: 1;
  padding: ${({ theme }) => theme.space.small}rem 0;
  font-size: ${({ theme }) => theme.font.small};
  border-bottom: 1px solid ${({ theme }) => theme.color.darkGray};
  color: ${({ theme }) => theme.color.black};
`;
