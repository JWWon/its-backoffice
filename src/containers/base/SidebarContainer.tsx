import Sidebar from 'components/base/Sidebar';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StoreState } from 'store/modules';

interface Props {
  show: boolean;
}

class SidebarContainer extends Component<Props> {
  private menuList = [
    {
      label: '메인',
      items: [
        {
          pageName: '슬라이드 목록',
          link: '/main/slides',
        },
        {
          pageName: '잇츠교정의 선물 목록',
          link: '/main/news',
        },
      ],
    },
    {
      label: '병원',
      items: [
        {
          pageName: '병원 목록',
          link: '/clinic/lists',
        },
        {
          pageName: '입점 신청 목록',
          link: '/clinic/registrations',
        },
      ],
    },
    {
      label: '잇츠교정의 선물',
      items: [
        {
          pageName: '잇츠교정의 선물 목록',
          link: '/announcement/lists',
        },
      ],
    },
    {
      label: '기타',
      items: [
        {
          pageName: '잇츠교정이란',
          link: '/other/about',
        },
        {
          pageName: 'Footer',
          link: '/other/footer',
        },
      ],
    },
  ];

  public render() {
    return this.props.show ? <Sidebar menuList={this.menuList} /> : null;
  }
}

export default connect(({ sidebar }: StoreState) => ({
  show: sidebar.show,
}))(SidebarContainer);
