import React, { Component } from 'react';

import ClinicTable from 'components/dashboard/ClinicTable';
import Template from 'components/dashboard/Template';
import { ClinicInterface, getCount, getList } from 'lib/networks/clinic';
import { IParams } from 'pages/DashboardPage';

interface State {
  count: number;
  list: ClinicInterface[];
}

class ClinicListContainer extends Component<IParams, State> {
  public state: State = { count: 0, list: [] };

  public async componentDidMount() {
    const count = await getCount();
    const list = await getList();
    this.setState({ count, list });
  }

  public render() {
    const { detail } = this.props.params;
    return (
      <Template
        label={
          detail.toString() === 'proposals' ? '입점 신청 목록' : '병원 목록'
        }>
        <ClinicTable list={this.state.list} />
      </Template>
    );
  }
}

export default ClinicListContainer;
