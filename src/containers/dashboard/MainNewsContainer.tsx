import withModal, { ModalInterface } from 'containers/base/withModal';
import React, { Component } from 'react';

import ImageEdit from 'components/dashboard/ImageEdit';
import ImageTable from 'components/dashboard/ImageTable';
import Template from 'components/dashboard/Template';
import { getNews, ImageInterface } from 'lib/networks/image';

interface State {
  list: ImageInterface[];
}

class MainNews extends Component<ModalInterface, State> {
  public state: State = { list: [] };

  public async componentDidMount() {
    const list = await getNews();
    this.setState({ list });
  }

  public render() {
    const { list } = this.state;
    return (
      <Template
        label="잇츠교정의 선물"
        buttonText="생성하기"
        count={list.length}
        handleClick={this.handleCreate}>
        <ImageTable list={list} type="news" />
      </Template>
    );
  }

  private handleCreate = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.showModal('잇츠교정의 선물 등록', <ImageEdit type="news" />);
  };
}

export default withModal(MainNews);
