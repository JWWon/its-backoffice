import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';

import RegisterTable from 'components/dashboard/RegisterTable';
import Template from 'components/dashboard/Template';
import { getRegistrations, RegisterInterface } from 'lib/networks/registration';
import { IParams } from 'pages/DashboardPage';
import { show } from 'store/modules/modal';

interface Props extends IParams {
  showModal: (label: string, component: ReactNode) => void;
}

interface State {
  count: number;
  list: RegisterInterface[];
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
    const list = await getRegistrations();
    const count = list.length;
    this.setState({ count, list });
  }

  public render() {
    const { count, list } = this.state;

    return (
      <Template
        label={`입점 신청 목록 (${count}개)`}
        buttonText="생성하기"
        handleClick={this.handleClick}>
        <RegisterTable count={count} list={list} />
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
