import React, { Fragment } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import LoginContainer from 'containers/auth/LoginContainer';
import HideSidebar from 'containers/base/HideSidebar';

interface IProps extends RouteComponentProps<any> {}

const AuthPage: React.SFC<IProps> = ({ location }) => (
  <Fragment>
    <HideSidebar />
    {location.pathname === '/login' ? <LoginContainer /> : <div>register</div>}
  </Fragment>
);

export default AuthPage;
