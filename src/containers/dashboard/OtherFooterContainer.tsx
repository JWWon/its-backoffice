import React, { Component } from 'react';

import Template from 'components/dashboard/Template';
import { IParams } from 'pages/DashboardPage';

class OtherFooterContainer extends Component<IParams> {
  public render() {
    const { type, detail } = this.props.params;
    return (
      <Template label="Footer">
        /{type}/{detail}
      </Template>
    );
  }
}

export default OtherFooterContainer;
