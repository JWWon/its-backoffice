import React, { Component } from 'react';

import ClinicTable from 'components/dashboard/ClinicTable';
import Template from 'components/dashboard/Template';
import { ClinicInterface, getCount, getList } from 'lib/networks/clinic';
import { IParams } from 'pages/DashboardPage';

interface State {
  label: string;
  count: number;
  list: ClinicInterface[];
}

class ClinicListContainer extends Component<IParams, State> {
  public constructor(props: IParams) {
    super(props);
    this.state = {
      label:
        this.props.params.detail.toString() === 'proposals'
          ? '입점 신청 목록'
          : '병원 목록',
      count: 0,
      list: [],
    };
  }

  public async componentDidMount() {
    const count = await getCount();
    const list = await getList();
    this.setState({ count, list });
  }

  public render() {
    const { label, count, list } = this.state;
    return (
      <Template label={`${label} (${count}개)`}>
        <ClinicTable count={count} list={list} />
      </Template>
    );
  }
}

export default ClinicListContainer;
