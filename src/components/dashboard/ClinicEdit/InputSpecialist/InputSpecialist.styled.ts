import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.p`
  flex-basis: 8rem;
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
