/* tslint:disable:jsx-no-lambda */
import { ModalInterface } from 'containers/base/withModal';
import { ClinicInterface, deleteClinic } from 'lib/networks/clinic';
import moment from 'moment';
import React, { ReactNode } from 'react';
import { connect } from 'react-redux';

import Table from 'components/base/Table';
import ClinicEdit from 'components/dashboard/ClinicEdit';
import { show } from 'store/modules/modal';
import * as s from './ClinicTable.styled';

interface Props extends ModalInterface {
  count: number;
  list: ClinicInterface[];
}

const Body = (clinic: ClinicInterface) => {
  const parseGrade = (grade: number) => {
    switch (grade) {
      case 2:
        return 'A';
      case 1:
        return 'B';
      case 0:
        return 'C';
      default:
        return 'D';
    }
  };

  return (
    <>
      <td>{clinic.name}</td>
      <td>{parseGrade(clinic.grade)}</td>
      <td>
        <s.CertifWrapper>
          <s.CertifIcon
            theme={{
              type: 'specialist',
              active: clinic.certificates.specialist.image,
            }}
          />
          <s.CertifIcon
            theme={{
              type: 'association',
              active: clinic.certificates.association,
            }}
          />
          <s.CertifIcon
            theme={{
              type: 'invisalign',
              active: clinic.certificates.invisalign,
            }}
          />
        </s.CertifWrapper>
      </td>
      <td>{clinic.phone}</td>
      <td>{moment(clinic.createdAt).format('YYYY.MM.DD')}</td>
      <td>{clinic.hits}</td>
      <td>{clinic.hidden ? 'false' : 'true'}</td>
    </>
  );
};

// Stateless Component
const ClinicTable: React.SFC<Props> = ({ count, list, showModal }) => {
  const pageLength = Math.ceil(count / 10);

  const handleEdit = (
    e: React.FormEvent<HTMLButtonElement>,
    clinic: ClinicInterface
  ) => {
    e.preventDefault();
    showModal('병원 편집', <ClinicEdit {...clinic} />);
  };

  const handleDelete = (e: React.FormEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    deleteClinic(id);
  };

  return (
    <Table
      header={[
        '병원명',
        '등급',
        '자격증',
        '연락처',
        '등록일',
        '누적 조회수',
        '노출 여부',
      ]}
      body={Body}
      list={list}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      count={pageLength}
    />
  );
};

export default connect(
  null,
  dispatch => ({
    showModal: (label: string, component: ReactNode) =>
      show(label, component)(dispatch),
  })
)(ClinicTable);
