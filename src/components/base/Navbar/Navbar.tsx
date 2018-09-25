import React from 'react';
import * as s from './Navbar.styled';

interface IProps {
  hasSession: boolean;
}

class Navbar extends React.Component<IProps> {
  public render() {
    return (
      <s.Container>
        <s.Wrapper>
          <s.LogoText>It's 교정</s.LogoText>
          <s.Admin>ADMIN</s.Admin>
        </s.Wrapper>
        {this.props.hasSession && (
          <s.Wrapper>
            <s.AuthName>박찬혁 님</s.AuthName>
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
