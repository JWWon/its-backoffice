import styled from 'styled-components';

const baseFont = styled.p`
  font-size: ${props => props.theme.font.normal};
  color: ${props => props.theme.color.white};
`;

// div
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 6rem;
  padding: 0 ${props => props.theme.space.normal}rem;
  background-color: ${props => props.theme.color.darkBlue};
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const LogoutButton = styled.div`
  padding: 2rem 0;
  &:hover {
    cursor: pointer;
    p {
      color: ${props => props.theme.color.gray};
    }
  }
`;

// text
export const LogoText = styled(baseFont)`
  font-weight: bold;
  margin-right: ${props => props.theme.space.normal}rem;
`;

export const Admin = styled(baseFont)``;

export const AuthName = styled(baseFont)`
  font-size: ${props => props.theme.font.small};
  font-weight: normal;
  margin-right: ${props => props.theme.space.narrow}rem;
`;

export const Logout = styled(baseFont)`
  font-size: ${props => props.theme.font.small};
`;
