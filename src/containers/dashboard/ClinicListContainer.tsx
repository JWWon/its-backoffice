import React, { Component } from 'react';

import Template from 'components/dashboard/Template';
import { IParams } from 'pages/DashboardPage';

class ClinicListContainer extends Component<IParams> {
  public render() {
    const { type, detail } = this.props.params;
    return (
      <Template
        label={
          detail.toString() === 'proposals' ? '입점 신청 목록' : '병원 목록'
        }>
        /{type}/{detail}
      </Template>
    );
  }
}

export default ClinicListContainer;
