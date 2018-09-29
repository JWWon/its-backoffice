import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';

import Table from 'components/dashboard/Table';
import Template from 'components/dashboard/Template';
import { IParams } from 'pages/DashboardPage';
import { show } from 'store/modules/modal';

const tempList = [
  {
    index: 1,
    desktopURL:
      'https://www.allkpop.com/upload/2017/09/af_org/03114342/bts.jpg',
    mobileURL:
      'https://0.soompi.io/wp-content/uploads/2017/12/26225639/BTS20.jpg?s=900x600&e=t',
    link: 'https://www.naver.com',
    seo: '카투사좀 제발 보내주세요...',
  },
  {
    index: 2,
    desktopURL:
      'https://www.allkpop.com/upload/2017/09/af_org/03114342/bts.jpg',
    mobileURL:
      'https://0.soompi.io/wp-content/uploads/2017/12/26225639/BTS20.jpg?s=900x600&e=t',
    link: 'https://www.naver.com',
    seo: '카투사좀 제발 보내주세요...',
  },
];

interface Props extends IParams {
  show: (label: string, component: ReactNode) => void;
}

class MainSlidesContainer extends Component<Props> {
  public render() {
    return (
      <Template
        label="슬라이드 목록"
        buttonText="생성하기"
        handleClick={this.handleCreate}>
        <Table list={tempList} />
      </Template>
    );
  }

  private handleCreate = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const component = <div>hello</div>;
    this.props.show('메인 슬라이드 등록하기', component);
  };
}

export default connect(
  () => ({}),
  dispatch => ({
    show: (label: string, component: ReactNode) =>
      show(label, component)(dispatch),
  })
)(MainSlidesContainer);
