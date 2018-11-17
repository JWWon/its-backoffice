import { ModalInterface } from 'containers/base/withModal';
import {
  deleteRegistration,
  RegisterInterface,
} from 'lib/networks/registration';
import React from 'react';
import { connect } from 'react-redux';
import { show } from 'store/modules/modal';

import Table from 'components/base/Table';
import ClinicEdit from 'components/dashboard/ClinicEdit';
import * as s from './RegisterTable.styled';

interface Props extends ModalInterface {
  count: number;
  list: RegisterInterface[];
}

const Body: React.SFC<RegisterInterface> = clinic => (
  <>
    <td>{clinic.name}</td>
    <td>
      <s.CertifWrapper>
        <s.CertifIcon
          theme={{
            type: 'specialist',
            active: clinic.certificates.specialist,
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
    <td>{clinic.address}</td>
    <td>{clinic.manager.name}</td>
    <td>{clinic.manager.phone}</td>
    <td>{clinic.manager.email}</td>
  </>
);

// Stateless Component
const RegisterTable: React.SFC<Props> = ({ count, list, showModal }) => {
  const pageLength = Math.ceil(count / 10);

  const handleEdit = (
    e: React.FormEvent<HTMLButtonElement>,
    clinic: RegisterInterface
  ) => {
    e.preventDefault();
    const { manager, id, ...other } = clinic;
    const convertToClinic = {
      ...other,
      certificates: {
        association: {
          image: other.certificates.association,
        },
        invisalign: {
          image: other.certificates.invisalign,
        },
        specialist: {
          image: other.certificates.specialist,
        },
      },
    };
    showModal(
      '병원 승인 및 정보 편집',
      <ClinicEdit registerId={id} {...convertToClinic} />
    );
  };

  const handleDelete = (e: React.FormEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    deleteRegistration(id);
  };

  return (
    <Table
      header={[
        '병원명',
        '자격증',
        '주소',
        '담당자',
        '담당자 연락처',
        '담당자 이메일',
      ]}
      list={list}
      body={Body}
      count={pageLength}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default connect(
  null,
  dispatch => ({
    showModal: (label: string, component: React.ReactNode) =>
      show(label, component)(dispatch),
  })
)(RegisterTable);
