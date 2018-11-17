/* tslint:disable:jsx-no-lambda */
import { ModalInterface } from 'containers/base/withModal';
import moment from 'moment';
import React, { ReactNode } from 'react';
import { connect } from 'react-redux';

import Table from 'components/base/Table';
import {
  AnnouncementInterface,
  deleteAnnouncement,
} from 'lib/networks/announcement';
import { show } from 'store/modules/modal';

interface Props extends ModalInterface {
  count: number;
  list: AnnouncementInterface[];
}

const Body = (announcement: AnnouncementInterface) => (
  <>
    <td>{announcement.id}</td>
    <td>{announcement.title}</td>
    <td>{moment(announcement.createdAt).format('YYYY.MM.DD')}</td>
  </>
);

const AnnouncementTable: React.SFC<Props> = ({ count, list, showModal }) => {
  const handleEdit = (
    e: React.FormEvent<HTMLButtonElement>,
    announcement: AnnouncementInterface
  ) => {
    e.preventDefault();
    showModal('잇츠교정의 선물 편집', <div />);
  };

  const handleDelete = (e: React.FormEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    deleteAnnouncement(id);
  };

  return (
    <Table
      header={['고유번호', '제목', '생성일']}
      body={Body}
      list={list}
      count={count}
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
)(AnnouncementTable);
