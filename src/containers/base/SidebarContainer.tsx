import Sidebar from 'components/base/Sidebar';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { IStoreState } from 'store/modules';

interface IProps {
  visible: boolean;
}

class SidebarContainer extends Component<IProps> {
  public render() {
    return this.props.visible ? <Sidebar /> : null;
  }
}

export default connect(({ sidebar }: IStoreState) => ({
  visible: sidebar.show,
}))(SidebarContainer);
