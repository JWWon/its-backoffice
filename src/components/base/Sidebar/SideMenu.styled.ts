import styled from 'styled-components';

export const Container = styled.div`
  margin-top: ${({ theme }) => theme.space.normal}rem;
  &:first-of-type {
    margin-top: 0;
  }
`;

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.8rem;
`;

export const Label = styled.p`
  font-size: ${({ theme }) => theme.font.normal};
  font-weight: bold;
  color: ${({ theme }) => theme.color.darkGray};
`;

export const ItemWrapper = styled.div`
  margin: 0.4rem 0;
  padding: 0.6rem 0 0.6rem ${({ theme }) => theme.space.small}rem;
  background-color: ${({ theme }) => theme.color.white};
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.gray};
    p {
      color: ${({ theme }) => theme.color.white};
    }
  }
`;

export const Item = styled.p`
  font-size: ${({ theme }) => theme.font.small};
  color: ${({ theme }) => theme.color.darkGray};
`;
