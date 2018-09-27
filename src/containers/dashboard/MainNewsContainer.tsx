import React, { Component } from 'react';

import Template from 'components/dashboard/Template';
import { IParams } from 'pages/DashboardPage';

class MainNews extends Component<IParams> {
  public render() {
    const { type, detail } = this.props.params;
    return (
      <Template label="잇츠교정 뉴스">
        /{type}/{detail}
      </Template>
    );
  }
}

export default MainNews;
