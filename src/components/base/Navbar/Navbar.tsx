import React from 'react';
import * as s from './Navbar.styled';

import { AuthState } from 'store/modules/auth';

interface IProps {
  auth: AuthState;
  handleLogout: (e: React.FormEvent<HTMLDivElement>) => void;
}

class Navbar extends React.Component<IProps> {
  public render() {
    const { auth, handleLogout } = this.props;
    return (
      <s.Container>
        <s.Wrapper>
          <s.LogoText>It's 교정</s.LogoText>
          <s.Admin>ADMIN</s.Admin>
        </s.Wrapper>
        {auth.nickname && (
          <s.Wrapper>
            <s.AuthName>{auth.nickname}</s.AuthName>
            <s.LogoutButton onClick={handleLogout}>
              <s.Logout>Logout</s.Logout>
            </s.LogoutButton>
          </s.Wrapper>
        )}
      </s.Container>
    );
  }
}

export default Navbar;
