import Navbar from 'components/base/Navbar';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StoreState } from 'store/modules';
import { AuthState as IAuth, logout } from 'store/modules/auth';

interface IProps {
  auth: IAuth;
  logout: () => void;
}

class NavbarContainer extends Component<IProps> {
  public render() {
    const { auth } = this.props;
    return <Navbar auth={auth} handleLogout={this.handleLogout} />;
  }

  private handleLogout = (e: React.FormEvent<HTMLDivElement>) => {
    this.props.logout();
  };
}

export default connect(
  ({ auth }: StoreState) => ({ auth }),
  dispatch => ({ logout: () => logout(dispatch) })
)(NavbarContainer);
