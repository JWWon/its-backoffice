import React, { Component } from 'react';

import Template from 'components/dashboard/Template';
import { IParams } from 'pages/DashboardPage';

class AnnouncementListContainer extends Component<IParams> {
  public render() {
    const { type, detail } = this.props.params;
    return (
      <Template label="잇츠교정의 선물">
        /{type}/{detail}
      </Template>
    );
  }
}

export default AnnouncementListContainer;
