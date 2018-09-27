import React, { Component } from 'react';

import Template from 'components/dashboard/Template';
import { IParams } from 'pages/DashboardPage';

class ClientListContainer extends Component<IParams> {
  public render() {
    const { type, detail } = this.props.params;
    return (
      <Template label="병원 목록">
        /{type}/{detail}
      </Template>
    );
  }
}

export default ClientListContainer;
