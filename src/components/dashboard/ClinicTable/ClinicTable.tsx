/* tslint:disable:jsx-no-lambda */
import { ClinicInterface, deleteClinic } from 'lib/networks/clinic';
import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';

import Table from 'components/base/Table';
import { show } from 'store/modules/modal';
import * as s from './ClinicTable.styled';

interface Props {
  count: number;
  list: ClinicInterface[];
  // store
  showModal: (label: string, component: ReactNode) => void;
}

class ClinicTable extends Component<Props> {
  public render() {
    const { list, count } = this.props;
    const pageLength = Math.ceil(count / 10);
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
        body={this.Body}
        list={list}
        handleEdit={this.handleEdit}
        handleDelete={this.handleDelete}
        count={pageLength}
      />
    );
  }

  private Body = (clinic: ClinicInterface) => (
    <>
      <td>{clinic.name}</td>
      <td>{this.parseGrade(clinic.grade)}</td>
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
              active: clinic.certificates.association.image,
            }}
          />
          <s.CertifIcon
            theme={{
              type: 'invisalign',
              active: clinic.certificates.invisalign.image,
            }}
          />
        </s.CertifWrapper>
      </td>
      <td>{clinic.phone}</td>
      <td>{clinic.createdAt}</td>
      <td>{clinic.hits}</td>
      <td>{clinic.hidden ? 'false' : 'true'}</td>
    </>
  );

  private parseGrade = (grade: number) => {
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

  private handleEdit = (
    e: React.FormEvent<HTMLButtonElement>,
    clinic: ClinicInterface
  ) => {
    e.preventDefault();
    console.log(clinic);
  };

  private handleDelete = (
    e: React.FormEvent<HTMLButtonElement>,
    id: string
  ) => {
    e.preventDefault();
    deleteClinic(id);
  };
}

export default connect(
  () => ({}),
  dispatch => ({
    showModal: (label: string, component: ReactNode) =>
      show(label, component)(dispatch),
  })
)(ClinicTable);
