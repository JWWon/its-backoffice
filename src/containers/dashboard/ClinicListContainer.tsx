import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';

import ClinicTable from 'components/dashboard/ClinicTable';
import Template from 'components/dashboard/Template';
import { ClinicInterface, getCount, getList } from 'lib/networks/clinic';
import { IParams } from 'pages/DashboardPage';
import { show } from 'store/modules/modal';

interface Props extends IParams {
  showModal: (label: string, component: ReactNode) => void;
}

interface State {
  count: number;
  list: ClinicInterface[];
}

class ClinicListContainer extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
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
    const { count, list } = this.state;
    const label =
      this.props.params.detail.toString() === 'proposals'
        ? '입점 신청 목록'
        : '병원 목록';

    return (
      <Template
        label={`${label} (${count}개)`}
        buttonText="생성하기"
        handleClick={this.handleClick}>
        <ClinicTable count={count} list={list} />
      </Template>
    );
  }

  private handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.showModal('병원 생성', <div />);
  };
}

export default connect(
  () => ({}),
  dispatch => ({
    showModal: (label: string, component: ReactNode) =>
      show(label, component)(dispatch),
  })
)(ClinicListContainer);
