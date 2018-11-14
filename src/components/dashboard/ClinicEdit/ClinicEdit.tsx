import React, { Component } from 'react';
import * as s from './ClinicEdit.styled';

import InputObjects from 'components/common/InputObjects';
import InputText from 'components/common/InputText';
import { ClinicInterface, InputInterface } from 'lib/networks/clinic';

class ClinicEdit extends Component<ClinicInterface | {}, InputInterface> {
  public constructor(props: ClinicInterface) {
    super(props);
    const { association, invisalign, specialist } = props.certificates;

    this.state = {
      name: props.name || '',
      province: props.province || '',
      city: props.city || '',
      address: props.address || '',
      landmark: props.landmark || '',
      phone: props.phone || '',
      webpage: props.webpage || '',
      timetable: props.timetable || {},
      directions: props.directions || {},
      certificates: {
        association: {
          image: association.image || '',
        },
        invisalign: {
          image: invisalign.image || '',
        },
        specialist: {
          chief: specialist.chief || '',
          school: specialist.school || '',
          period: {
            startAt: specialist.period.startAt || '',
            endAt: specialist.period.endAt || '',
          },
          image: specialist.image || '',
        },
      },
      grade: props.grade || 0, // 2: A, 1: B, 0: C, -1: D
      hidden: props.hidden || false,
    };
  }

  public render() {
    return (
      <s.Form>
        <s.RowWrapper>
          <InputText
            label="병원명"
            name="name"
            value={this.state.name}
            handleChange={this.handleChange}
          />
          <InputText
            label="랜드마크"
            name="landmark"
            value={this.state.landmark}
            handleChange={this.handleChange}
          />
        </s.RowWrapper>
        <s.RowWrapper>
          <InputText
            label="도/특별시"
            name="province"
            value={this.state.province}
            handleChange={this.handleChange}
          />
          <InputText
            label="시/군/구"
            name="city"
            value={this.state.city}
            handleChange={this.handleChange}
          />
        </s.RowWrapper>
        <s.RowWrapper>
          <InputText
            label="주소"
            name="address"
            value={this.state.address}
            handleChange={this.handleChange}
          />
        </s.RowWrapper>
        <s.RowWrapper>
          <InputText
            label="연락처"
            name="phone"
            value={this.state.phone}
            handleChange={this.handleChange}
          />
          <InputText
            label="웹사이트"
            name="webpage"
            value={this.state.webpage}
            handleChange={this.handleChange}
          />
        </s.RowWrapper>
        <s.RowWrapper>
          <InputObjects
            label="영업시간"
            name="timetable"
            objs={this.state.timetable}
            handleChange={this.handleObjChange}
          />
          <InputObjects
            label="찾아오는길"
            name="directions"
            objs={this.state.directions}
            handleChange={this.handleObjChange}
          />
        </s.RowWrapper>
      </s.Form>
    );
  }

  private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    this.setState(prevState => ({ ...prevState, [name]: value }));
  };

  private handleObjChange = (
    name: string,
    value: { [key: string]: string }
  ) => {
    this.setState(prevState => ({ ...prevState, [name]: value }));
  };
}

export default ClinicEdit;
