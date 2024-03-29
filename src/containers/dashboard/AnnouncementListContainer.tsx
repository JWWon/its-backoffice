import withModal, { ModalInterface } from 'containers/base/withModal';
import React, { Component } from 'react';

import AnnouncementEdit from 'components/dashboard/AnnouncementEdit';
import AnnouncementTable from 'components/dashboard/AnnouncementTable';
import Template from 'components/dashboard/Template';
import {
  AnnouncementInterface,
  getAnnouncement,
} from 'lib/networks/announcement';

interface State {
  count: number;
  list: AnnouncementInterface[];
  search: string;
}

class AnnouncementListContainer extends Component<ModalInterface, State> {
  public state: State = {
    count: 0,
    list: [],
    search: '',
  };

  public async componentDidMount() {
    const list = await getAnnouncement();
    const count = list.length;
    this.setState({ count, list });
  }

  public render() {
    const { count, list, search } = this.state;
    return (
      <Template
        label={`잇츠교정의 선물`}
        count={count}
        buttonText="생성하기"
        handleClick={this.handleClick}
        search={search}
        handleSearch={this.handleSearch}
        handleSubmit={this.handleSubmit}>
        <AnnouncementTable count={count} list={list} />
      </Template>
    );
  }

  private handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.showModal('잇츠교정의 선물 생성', <AnnouncementEdit />);
  };

  private handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // this.setState({ search: e.currentTarget.value });
  };

  private handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const list = await searchList(this.state.search);
    // this.setState({ list, count: list.length, search: '' });
  };
}

export default withModal(AnnouncementListContainer);
