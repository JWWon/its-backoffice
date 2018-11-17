/* tslint:disable:jsx-no-lambda */
import { ModalInterface } from 'containers/base/withModal';
import React, { ReactNode } from 'react';
import { connect } from 'react-redux';
import * as s from './ImageTable.styled';

import Table from 'components/base/Table';
import ImageEdit from 'components/dashboard/ImageEdit';
import { deleteImage, ImageInterface } from 'lib/networks/image';
import { show } from 'store/modules/modal';

interface Props extends ModalInterface {
  list: ImageInterface[];
  type: 'slide' | 'news';
}

const ImageTable: React.SFC<Props> = ({ list, type, showModal }) => {
  const header = ['데스크탑', '모바일', '하이퍼링크', 'SEO 텍스트'];
  if (type === 'news') header.push('제목', '내용');

  const Body = (image: ImageInterface) => (
    <>
      <td>
        <s.ImageDesktop
          style={{ backgroundImage: `url(${image.desktopSrc})` }}
        />
      </td>
      <td>
        <s.ImageMobile style={{ backgroundImage: `url(${image.mobileSrc})` }} />
      </td>
      <td>{image.href}</td>
      <td>{image.alt}</td>
      {type === 'news' && (
        <>
          <td>{image.title}</td>
          <td>{image.content}</td>
        </>
      )}
    </>
  );

  const handleEdit = (
    e: React.FormEvent<HTMLButtonElement>,
    value: ImageInterface
  ) => {
    e.preventDefault();
    showModal('슬라이드 편집', <ImageEdit type={type} {...value} />);
  };

  const handleDelete = (e: React.FormEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    deleteImage(id);
  };

  return (
    <Table
      header={header}
      list={list}
      body={Body}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default connect(
  null,
  dispatch => ({
    showModal: (label: string, component: ReactNode) =>
      show(label, component)(dispatch),
  })
)(ImageTable);
