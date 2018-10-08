import moment from 'moment';
import React, { Component } from 'react';

import ClinicTable from 'components/dashboard/ClinicTable';
import Template from 'components/dashboard/Template';
import { IParams } from 'pages/DashboardPage';

const tempList = [
  {
    id: '1',
    name: '2D 치과',
    grade: 'A',
    certificates: { specialist: true, association: false, invisalign: true },
    phone: '02-365-2810',
    createdAt: moment(),
    hits: 27816,
    hidden: false,
  },
  {
    id: '2',
    name: '강남미인 치과',
    grade: 'B',
    certificates: { specialist: true, association: false, invisalign: true },
    phone: '02-365-2810',
    createdAt: moment(),
    hits: 27816,
    hidden: false,
  },
];

class ClinicListContainer extends Component<IParams> {
  public render() {
    const { detail } = this.props.params;
    return (
      <Template
        label={
          detail.toString() === 'proposals' ? '입점 신청 목록' : '병원 목록'
        }>
        <ClinicTable list={tempList} />
      </Template>
    );
  }
}

export default ClinicListContainer;
