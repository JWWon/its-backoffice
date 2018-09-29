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
    const { info } = this.props.auth;
    return <Navbar info={info} handleLogout={this.handleLogout} />;
  }

  private handleLogout = () => {
    this.props.logout();
  };
}

export default connect(
  ({ auth }: StoreState) => ({ auth }),
  dispatch => ({ logout: () => logout(dispatch) })
)(NavbarContainer);
