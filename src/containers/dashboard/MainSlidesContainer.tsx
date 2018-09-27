import React, { Component } from 'react';

import Table from 'components/dashboard/Table';
import Template from 'components/dashboard/Template';
import { IParams } from 'pages/DashboardPage';

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

class MainSlidesContainer extends Component<IParams> {
  public render() {
    return (
      <Template
        label="슬라이드 목록"
        buttonText="생성하기"
        handleClick={this.handleClick}>
        <Table list={tempList} />
      </Template>
    );
  }

  private handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('click!');
  };
}

export default MainSlidesContainer;
