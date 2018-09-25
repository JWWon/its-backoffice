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
          onClick: () => console.log('슬라이드 리스트'),
        },
        {
          pageName: '왜 잇츠 교정인가',
          onClick: () => console.log('왜 잇츠 교정인가'),
        },
        {
          pageName: '잇츠교정 뉴스',
          onClick: () => console.log('잇츠교정 뉴스'),
        },
      ],
    },
    {
      label: '병원',
      items: [
        {
          pageName: '병원 리스트',
          onClick: () => console.log('병원 리스트'),
        },
        {
          pageName: '입점 신청 리스트',
          onClick: () => console.log('입점 신청 리스트'),
        },
        {
          pageName: '신규 병원 등록',
          onClick: () => console.log('신규 병원 등록'),
        },
      ],
    },
    {
      label: '공지사항',
      items: [
        {
          pageName: '공지사항 리스트',
          onClick: () => console.log('공지사항 리스트'),
        },
        {
          pageName: '신규 공지사항',
          onClick: () => console.log('신규 공지사항'),
        },
      ],
    },
    {
      label: '기타',
      items: [
        {
          pageName: '잇츠교정이란',
          onClick: () => console.log('잇츠교정이란'),
        },
        {
          pageName: 'Footer',
          onClick: () => console.log('Footer'),
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
