import React, { Component } from 'react';

import Template from 'components/dashboard/Template';
import { IParams } from 'pages/DashboardPage';

class ClientEditContainer extends Component<IParams> {
  public render() {
    const { type, detail } = this.props.params;
    return (
      <Template label="병원 편집">
        /{type}/{detail}
      </Template>
    );
  }
}

export default ClientEditContainer;
