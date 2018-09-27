import React, { Component } from 'react';

import Template from 'components/dashboard/Template';
import { IParams } from 'pages/DashboardPage';

class NoticeEditContainer extends Component<IParams> {
  public render() {
    const { type, detail } = this.props.params;
    return (
      <Template
        label={
          detail.toString() === 'new' ? '신규 공지사항 등록' : '공지사항 편집'
        }>
        /{type}/{detail}
      </Template>
    );
  }
}

export default NoticeEditContainer;
