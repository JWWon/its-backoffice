import React from 'react';
import * as s from './Navbar.styled';

import { IInfo } from 'store/modules/auth';

interface IProps extends IInfo {
  handleLogout: () => void;
}

class Navbar extends React.Component<IProps> {
  public render() {
    const { info, handleLogout } = this.props;
    return (
      <s.Container>
        <s.Wrapper>
          <s.LogoText>It's 교정</s.LogoText>
          <s.Admin>ADMIN</s.Admin>
        </s.Wrapper>
        {info && (
          <s.Wrapper>
            <s.AuthName>{info.name}</s.AuthName>
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
