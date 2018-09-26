import Navbar from 'components/base/Navbar';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { IStoreState } from 'store/modules';
import { IAuthState as IAuth } from 'store/modules/auth';

interface IProps {
  auth: IAuth;
}

class NavbarContainer extends Component<IProps> {
  public render() {
    console.log(this.props);
    const { info } = this.props.auth;
    return <Navbar info={info} />;
  }
}

export default connect(({ auth }: IStoreState) => ({ auth }))(NavbarContainer);
