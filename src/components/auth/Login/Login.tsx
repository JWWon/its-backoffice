import React, { ReactNode } from 'react';
import * as s from './Login.styled';

interface IProps {
  children: ReactNode;
}

class Login extends React.Component<IProps> {
  public render() {
    const { children } = this.props;
    return (
      <s.Container>
        <s.LoginSection>
          <s.Title>Login</s.Title>
          {children}
        </s.LoginSection>
      </s.Container>
    );
  }
}

export default Login;
