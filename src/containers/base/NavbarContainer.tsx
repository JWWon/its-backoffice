import Navbar from 'components/base/Navbar';
import React, { Component } from 'react';

interface IState {
  email: string;
  password: string;
}

class NavbarContainer extends Component<{}, IState> {
  public render() {
    return <Navbar hasSession={true} />;
  }
}

export default NavbarContainer;
