import React, { Component } from 'react';

import Template from 'components/dashboard/Template';
import TextEditor from 'components/dashboard/TextEditor';
import { IParams } from 'pages/DashboardPage';

class AboutContainer extends Component<IParams> {
  public render() {
    return (
      <Template label="왜 잇츠 교정인가">
        <TextEditor />
      </Template>
    );
  }
}

export default AboutContainer;
