import React from 'react';
import * as s from './Navbar.styled';

import { IInfo } from 'store/modules/auth';

class Navbar extends React.Component<IInfo> {
  public render() {
    const { info } = this.props;
    return (
      <s.Container>
        <s.Wrapper>
          <s.LogoText>It's 교정</s.LogoText>
          <s.Admin>ADMIN</s.Admin>
        </s.Wrapper>
        {info && (
          <s.Wrapper>
            <s.AuthName>{info.name}</s.AuthName>
            <s.LogoutButton onClick={this.handleClick}>
              <s.Logout>Logout</s.Logout>
            </s.LogoutButton>
          </s.Wrapper>
        )}
      </s.Container>
    );
  }

  private handleClick = () => {
    console.log('click');
  };
}

export default Navbar;
