import { RegisterInterface } from 'lib/networks/registration';
import React, { ReactNode } from 'react';
import { connect } from 'react-redux';

import Table from 'components/base/Table';
import { show } from 'store/modules/modal';
import * as s from './RegisterTable.styled';

interface Props {
  count: number;
  list: RegisterInterface[];
  // store
  showModal: (label: string, component: ReactNode) => void;
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
    <td>{clinic.phone}</td>
    <td>{clinic.address}</td>
    <td>{clinic.manager.name}</td>
    <td>{clinic.manager.phone}</td>
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
  };

  const handleDelete = (e: React.FormEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
  };

  return (
    <Table
      header={['병원명', '자격증', '연락처', '주소', '담당자', '담당자 연락처']}
      list={list}
      body={Body}
      count={pageLength}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default connect(
  () => ({}),
  dispatch => ({
    showModal: (label: string, component: ReactNode) =>
      show(label, component)(dispatch),
  })
)(RegisterTable);
