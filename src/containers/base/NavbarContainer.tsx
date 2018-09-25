import Navbar from 'components/base/Navbar';
import React, { Component } from 'react';

class NavbarContainer extends Component {
  public render() {
    return <Navbar hasSession={true} />;
  }
}

export default NavbarContainer;
