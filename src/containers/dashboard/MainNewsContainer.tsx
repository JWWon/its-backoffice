import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';

import ImageEdit from 'components/dashboard/ImageEdit';
import ImageTable from 'components/dashboard/ImageTable';
import Template from 'components/dashboard/Template';
import { getNews, ImageInterface } from 'lib/networks/image';
import { IParams } from 'pages/DashboardPage';
import { show } from 'store/modules/modal';

interface Props extends IParams {
  showModal: (label: string, component: ReactNode) => void;
}

interface State {
  list: ImageInterface[];
}

class MainNews extends Component<Props, State> {
  public state: State = { list: [] };

  public async componentDidMount() {
    const list = await getNews();
    this.setState({ list });
  }

  public render() {
    const { list } = this.state;
    return (
      <Template
        label="잇츠교정 뉴스"
        buttonText="생성하기"
        count={list.length}
        handleClick={this.handleCreate}>
        <ImageTable list={list} type="news" />
      </Template>
    );
  }

  private handleCreate = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.showModal('뉴스 등록', <ImageEdit type="news" />);
  };
}

export default connect(
  () => ({}),
  dispatch => ({
    showModal: (label: string, component: ReactNode) =>
      show(label, component)(dispatch),
  })
)(MainNews);
