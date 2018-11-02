/* tslint:disable:jsx-no-lambda */
import { ClinicInterface } from 'lib/networks/clinic';
import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';

import { show } from 'store/modules/modal';
import * as s from './ClinicTable.styled';

interface Props {
  list: ClinicInterface[];
  showModal: (label: string, component: ReactNode) => void;
}

class ClinicTable extends Component<Props> {
  public render() {
    const { list } = this.props;
    return (
      <s.Container>
        <s.Table>
          <s.Head>
            <tr>
              <th>병원명</th>
              <th>등급</th>
              <th>자격증</th>
              <th>연락처</th>
              <th>등록일</th>
              <th>누적 조회수</th>
              <th>노출여부</th>
              <th />
            </tr>
          </s.Head>
          <s.Body>
            {list.map(this.Body)}
            <tr />
          </s.Body>
        </s.Table>
      </s.Container>
    );
  }

  private Body = (clinic: ClinicInterface) => (
    <tr key={clinic.id}>
      <td>{clinic.name}</td>
      <td>{clinic.grade}</td>
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
      <td>{clinic.createdAt}</td>
      <td>{clinic.hits}</td>
      <td>{clinic.hidden ? 'false' : 'true'}</td>
      <td>
        <s.ButtonWrapper>
          <s.EditButton onClick={e => this.handleEdit(e, clinic)}>
            Edit
          </s.EditButton>
          <s.DeleteButton>Delete</s.DeleteButton>
        </s.ButtonWrapper>
      </td>
    </tr>
  );

  private handleEdit = (
    e: React.FormEvent<HTMLButtonElement>,
    clinic: ClinicInterface
  ) => {
    e.preventDefault();
    console.log(clinic);
  };
}

export default connect(
  () => ({}),
  dispatch => ({
    showModal: (label: string, component: ReactNode) =>
      show(label, component)(dispatch),
  })
)(ClinicTable);
