import styled from 'styled-components';

export const Container = styled.div`
  flex-basis: 40rem;
  margin: 0 1rem;
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
