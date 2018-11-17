import withModal, { ModalInterface } from 'containers/base/withModal';
import React, { Component } from 'react';

import ImageEdit from 'components/dashboard/ImageEdit';
import ImageTable from 'components/dashboard/ImageTable';
import Template from 'components/dashboard/Template';
import { getSlides, ImageInterface } from 'lib/networks/image';

interface State {
  list: ImageInterface[];
}

class MainSlidesContainer extends Component<ModalInterface, State> {
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
        <ImageTable list={list} type="slide" />
      </Template>
    );
  }

  private handleCreate = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.showModal('슬라이드 등록', <ImageEdit type="slide" />);
  };
}

export default withModal(MainSlidesContainer);
