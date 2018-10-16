/* tslint:disable:jsx-no-lambda */
import { Moment } from 'moment';
import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';

import { show } from 'store/modules/modal';
import * as s from './ClinicTable.styled';

interface DataInterface {
  id: string;
  name: string;
  grade: string;
  certificates: {
    specialist: boolean;
    association: boolean;
    invisalign: boolean;
  };
  phone: string;
  createdAt: Moment;
  hits: number;
  hidden: boolean;
}

interface Props {
  list: DataInterface[];
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

  private Body = (value: DataInterface) => (
    <tr key={value.id}>
      <td>{value.name}</td>
      <td>{value.grade}</td>
      <td>
        <s.CertifWrapper>
          <s.CertifIcon
            theme={{
              type: 'specialist',
              active: value.certificates.specialist,
            }}
          />
          <s.CertifIcon
            theme={{
              type: 'association',
              active: value.certificates.association,
            }}
          />
          <s.CertifIcon
            theme={{
              type: 'invisalign',
              active: value.certificates.invisalign,
            }}
          />
        </s.CertifWrapper>
      </td>
      <td>{value.phone}</td>
      <td>{value.createdAt.format('YYYY.MM.DD')}</td>
      <td>{value.hits}</td>
      <td>{value.hidden ? 'false' : 'true'}</td>
      <td>
        <s.ButtonWrapper>
          <s.EditButton onClick={e => this.handleEdit(e, value)}>
            Edit
          </s.EditButton>
          <s.DeleteButton>Delete</s.DeleteButton>
        </s.ButtonWrapper>
      </td>
    </tr>
  );

  private handleEdit = (
    e: React.FormEvent<HTMLButtonElement>,
    value: DataInterface
  ) => {
    e.preventDefault();
    console.log(value);
  };
}

export default connect(
  () => ({}),
  dispatch => ({
    showModal: (label: string, component: ReactNode) =>
      show(label, component)(dispatch),
  })
)(ClinicTable);
