import styled from 'styled-components';

export const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${({ theme }) => theme.space.normal}rem -${({ theme }) =>
      theme.space.smaller}rem 0;
  &:first-of-type {
    margin-top: 0;
  }
`;

export const Container = styled.div`
  flex-basis: 40rem;
  margin: 0 ${({ theme }) => theme.space.smaller}rem;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.h5`
  font-size: ${({ theme }) => theme.font.normal};
  color: ${({ theme }) => theme.color.darkGray};
  margin-bottom: ${({ theme }) => theme.space.small}rem;
`;

export const AddButton = styled.button`
  margin-left: auto;
  margin-bottom: ${({ theme }) => theme.space.small}rem;
  background: ${({ theme }) => theme.color.gray};
`;
