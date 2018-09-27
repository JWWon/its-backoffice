import React, { Component } from 'react';

import Template from 'components/dashboard/Template';
import { IParams } from 'pages/DashboardPage';

class AboutContainer extends Component<IParams> {
  public render() {
    const { type, detail } = this.props.params;
    return (
      <Template label="왜 잇츠 교정인가">
        /{type}/{detail}
      </Template>
    );
  }
}

export default AboutContainer;
