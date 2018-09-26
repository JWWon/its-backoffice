import React, { Fragment } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import LoginContainer from 'containers/auth/LoginContainer';
import HideSidebar from 'containers/base/HideSidebar';

interface IProps extends RouteComponentProps<any> {}

const AuthPage: React.SFC<IProps> = ({ location }) => {
  const isLogin = location.pathname === '/login';

  return (
    <Fragment>
      <HideSidebar />
      {isLogin ? <LoginContainer /> : <div>register</div>}
    </Fragment>
  );
};

export default AuthPage;
