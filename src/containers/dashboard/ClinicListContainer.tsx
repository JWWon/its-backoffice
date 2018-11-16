import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';

import ClinicEdit from 'components/dashboard/ClinicEdit';
import ClinicTable from 'components/dashboard/ClinicTable';
import Template from 'components/dashboard/Template';
import {
  ClinicInterface,
  getCount,
  getList,
  searchList,
} from 'lib/networks/clinic';
import { IParams } from 'pages/DashboardPage';
import { show } from 'store/modules/modal';

interface Props extends IParams {
  showModal: (label: string, component: ReactNode) => void;
}

interface State {
  count: number;
  search: string;
  list: ClinicInterface[];
}

class ClinicListContainer extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
      search: '',
      list: [],
    };
  }

  public async componentDidMount() {
    const count = await getCount();
    const list = await getList();
    this.setState({ count, list });
  }

  public render() {
    const { count, list, search } = this.state;
    return (
      <Template
        label={`병원 목록 (${count}개)`}
        buttonText="생성하기"
        search={search}
        handleClick={this.handleClick}
        handleSearch={this.handleSearch}
        handleSubmit={this.handleSubmit}>
        <ClinicTable count={count} list={list} />
      </Template>
    );
  }

  private handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.showModal('병원 생성', <ClinicEdit />);
  };

  private handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({ search: e.currentTarget.value });
  };

  private handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const list = await searchList(this.state.search);
    this.setState({ list, count: list.length, search: '' });
  };
}

export default connect(
  () => ({}),
  dispatch => ({
    showModal: (label: string, component: ReactNode) =>
      show(label, component)(dispatch),
  })
)(ClinicListContainer);
