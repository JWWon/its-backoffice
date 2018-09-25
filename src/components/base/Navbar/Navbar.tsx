import React, { Fragment } from 'react';
import * as s from './Navbar.styled';

interface IProps {
  hasSession: boolean;
}

class Navbar extends React.Component<IProps> {
  public render() {
    return (
      <s.NContainer>
        <s.NWrapper>
          <s.NLogo>It's 교정</s.NLogo>
          <s.NAdmin>ADMIN</s.NAdmin>
        </s.NWrapper>
        {this.props.hasSession && (
          <Fragment>
            <s.NAdmin>박찬혁</s.NAdmin>
          </Fragment>
        )}
      </s.NContainer>
    );
  }
}

export default Navbar;
