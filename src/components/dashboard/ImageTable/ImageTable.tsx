/* tslint:disable:jsx-no-lambda */
import React, { ReactNode } from 'react';
import { connect } from 'react-redux';
import * as s from './ImageTable.styled';

import Table from 'components/base/Table';
import ImageEdit from 'components/dashboard/ImageEdit';
import { deleteImage, ImageInterface } from 'lib/networks/image';
import { show } from 'store/modules/modal';

interface Props {
  list: ImageInterface[];
  type: 'slide' | 'news';
  showModal: (label: string, component: ReactNode) => void;
}

class ImageTable extends React.Component<Props> {
  public render() {
    const { list, type } = this.props;
    const header = ['번호', '데스크탑', '모바일', '하이퍼링크', 'SEO 텍스트'];
    if (type === 'news') header.push('제목', '내용');

    return (
      <Table
        header={header}
        list={list}
        body={this.Body}
        handleEdit={this.handleEdit}
        handleDelete={this.handleDelete}
      />
    );
  }

  private Body = (value: ImageInterface) => (
    <>
      <td>{value.id}</td>
      <td>
        <s.ImageDesktop
          style={{ backgroundImage: `url(${value.desktopSrc})` }}
        />
      </td>
      <td>
        <s.ImageMobile style={{ backgroundImage: `url(${value.mobileSrc})` }} />
      </td>
      <td>{value.href}</td>
      <td>{value.alt}</td>
      {this.props.type === 'news' && (
        <>
          <td>{value.title}</td>
          <td>{value.content}</td>
        </>
      )}
    </>
  );

  private handleEdit = (
    e: React.FormEvent<HTMLButtonElement>,
    value: ImageInterface
  ) => {
    e.preventDefault();
    this.props.showModal(
      '슬라이드 편집',
      <ImageEdit type={this.props.type} {...value} />
    );
  };

  private handleDelete = (
    e: React.FormEvent<HTMLButtonElement>,
    id: string
  ) => {
    e.preventDefault();
    deleteImage(id);
  };
}

export default connect(
  () => ({}),
  dispatch => ({
    showModal: (label: string, component: ReactNode) =>
      show(label, component)(dispatch),
  })
)(ImageTable);
