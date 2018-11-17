import withModal, { ModalInterface } from 'containers/base/withModal';
import React, { Component } from 'react';

import RegisterTable from 'components/dashboard/RegisterTable';
import Template from 'components/dashboard/Template';
import { getRegistrations, RegisterInterface } from 'lib/networks/registration';

interface State {
  count: number;
  list: RegisterInterface[];
}

class ClinicListContainer extends Component<ModalInterface, State> {
  public constructor(props: ModalInterface) {
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
      <Template label={`입점 신청 목록 (${count}개)`}>
        <RegisterTable count={count} list={list} />
      </Template>
    );
  }
}

export default withModal(ClinicListContainer);
