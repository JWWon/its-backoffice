import Sidebar from 'components/base/Sidebar';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { IStoreState } from 'store/modules';

interface IProps {
  visible: boolean;
}

class SidebarContainer extends Component<IProps> {
  private menuList = [
    {
      label: '메인',
      items: [
        {
          pageName: '슬라이드 리스트',
          link: '/main/slides',
        },
        {
          pageName: '왜 잇츠 교정인가',
          link: '/main/about',
        },
        {
          pageName: '잇츠교정 뉴스',
          link: '/main/news',
        },
      ],
    },
    {
      label: '병원',
      items: [
        {
          pageName: '병원 리스트',
          link: '/clients/active',
        },
        {
          pageName: '입점 신청 리스트',
          link: '/clients/proposal',
        },
        {
          pageName: '신규 병원 등록',
          link: '/client/new',
        },
      ],
    },
    {
      label: '공지사항',
      items: [
        {
          pageName: '공지사항 리스트',
          link: '/notices/active',
        },
        {
          pageName: '신규 공지사항',
          link: '/notice/new',
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
    return this.props.visible ? <Sidebar menuList={this.menuList} /> : null;
  }
}

export default connect(({ sidebar }: IStoreState) => ({
  visible: sidebar.show,
}))(SidebarContainer);
