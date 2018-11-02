import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';

import ImageEdit from 'components/dashboard/ImageEdit';
import ImageTable from 'components/dashboard/ImageTable';
import Template from 'components/dashboard/Template';
import { getSlides, ImageInterface } from 'lib/networks/image';
import { IParams } from 'pages/DashboardPage';
import { show } from 'store/modules/modal';

interface Props extends IParams {
  showModal: (label: string, component: ReactNode) => void;
}

interface State {
  list: ImageInterface[];
}

class MainSlidesContainer extends Component<Props, State> {
  public state: State = { list: [] };

  public async componentDidMount() {
    const list = await getSlides();
    this.setState({ list });
  }

  public render() {
    const { list } = this.state;
    return (
      <Template
        label="슬라이드 목록"
        buttonText="생성하기"
        count={list.length}
        handleClick={this.handleCreate}>
        <ImageTable list={list} />
      </Template>
    );
  }

  private handleCreate = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.showModal('슬라이드 등록', <ImageEdit id="1" type="slide" />);
  };
}

export default connect(
  () => ({}),
  dispatch => ({
    showModal: (label: string, component: ReactNode) =>
      show(label, component)(dispatch),
  })
)(MainSlidesContainer);
