import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.space.narrow}rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .page-container {
    align-self: center;
    padding: 0;
    li {
      display: inline-block;
      margin: 0 1.2rem;
      font-size: ${({ theme }) => theme.font.small};
    }
  }
  .page-item {
    color: ${({ theme }) => theme.color.gray};
  }
  .disabled {
    display: none !important;
  }
  .selected {
    color: ${({ theme }) => theme.color.black};
  }
`;

export const Table = styled.table`
  flex: 1;
  text-align: left;
  border-collapse: collapse;
  th,
  td {
    padding: ${({ theme }) => theme.space.smaller}rem 0
      ${({ theme }) => theme.space.smaller}rem
      ${({ theme }) => theme.space.smaller}rem;
    &:first-of-type {
      padding: ${({ theme }) => theme.space.smaller}rem 0;
    }
  }
  th {
    border-bottom: 2px solid ${({ theme }) => theme.color.gray};
  }
  td {
    border-bottom: 1px solid ${({ theme }) => theme.color.gray};
  }
`;

export const Head = styled.thead`
  font-size: ${({ theme }) => theme.font.normal};
  color: ${({ theme }) => theme.color.darkGray};
  white-space: nowrap;
`;

export const Body = styled.tbody`
  font-size: ${({ theme }) => theme.font.small};
  font-weight: lighter;
  color: ${({ theme }) => theme.color.black};
  tr {
    &:nth-last-of-type(2) {
      td {
        border-bottom: none;
      }
      height: 100%;
    }
  }
`;

export const ButtonWrapper = styled.div`
  max-width: 24rem;
  margin-left: auto;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  width: 7.5rem;
  height: 3.6rem;
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 1.8rem;
  background-color: ${({ theme }) => theme.color.white};
  &:hover {
    color: ${({ theme }) => theme.color.white};
    border: none;
  }
`;

export const EditButton = styled(Button)`
  &:hover {
    background-color: #84caea;
  }
`;

export const DeleteButton = styled(Button)`
  &:hover {
    background-color: #ef7474;
  }
`;
