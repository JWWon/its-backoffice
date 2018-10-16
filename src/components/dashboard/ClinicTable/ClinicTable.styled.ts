import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.space.narrow}rem;
  box-sizing: border-box;
`;

export const Table = styled.table`
  width: 100%;
  height: 100%;
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
    &:last-of-type {
      td {
        border-bottom: none;
      }
      height: 100%;
    }
  }
`;

export const CertifWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

interface Theme {
  theme: {
    type: 'specialist' | 'association' | 'invisalign';
    active: boolean;
  };
}

export const CertifIcon = styled.img.attrs({
  src: ({ theme }: Theme) =>
    require(`lib/icons/ic_${theme.type}${theme.active ? '_active' : ''}.svg`),
})`
  width: 3.4rem;
  height: 3rem;
  object-fit: contain;
`;

export const ButtonWrapper = styled.div`
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
