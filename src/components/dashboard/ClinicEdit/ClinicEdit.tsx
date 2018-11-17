import AWS from 'aws-sdk';
import produce from 'immer';
import React, { Component } from 'react';

import * as s from './ClinicEdit.styled';
import InputSpecialist from './InputSpecialist';

import InputArray from 'components/common/InputArray';
import InputImage from 'components/common/InputImage';
import InputObjects from 'components/common/InputObjects';
import InputText from 'components/common/InputText';
import Select from 'components/common/Select';
import {
  ClinicInterface,
  InputInterface,
  SubmitInterface,
  updateClinic,
} from 'lib/networks/clinic';
import { deleteRegistration } from 'lib/networks/registration';

interface State extends InputInterface {
  files: {
    association: File | null;
    specialist: File | null;
    invisalign: File | null;
  };
}

class ClinicEdit extends Component<ClinicInterface & any, State> {
  public constructor(props: ClinicInterface) {
    super(props);
    const certificates = props.certificates || null;

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
        association: certificates ? certificates.association : false,
        invisalign: certificates ? certificates.invisalign : false,
        specialist: {
          chief: certificates ? certificates.specialist.chief : '',
          school: certificates ? certificates.specialist.school : '',
          period: {
            startAt:
              certificates && certificates.specialist.period
                ? certificates.specialist.period.startAt
                : '',
            endAt:
              certificates && certificates.specialist.period
                ? certificates.specialist.period.endAt
                : '',
          },
          image: certificates ? certificates.specialist.image : '',
        },
      },
      files: {
        association: null,
        specialist: null,
        invisalign: null,
      },
      grade: props.grade || 0, // 2: A, 1: B, 0: C, -1: D
      hidden: props.hidden || false,
      tags: props.tags || [],
    };
  }

  public render() {
    const { specialist } = this.state.certificates;
    return (
      <s.Form onSubmit={this.handleSubmit}>
        <s.RowWrapper>
          <InputText
            label="병원명"
            name="name"
            value={this.state.name}
            handleChange={this.handleChange}
          />
          <Select
            label="등급"
            name="grade"
            value={this.state.grade}
            options={[
              { value: 2, name: 'A' },
              { value: 1, name: 'B' },
              { value: 0, name: 'C' },
              { value: -1, name: 'D' },
            ]}
            handleChange={this.handleSelectChange}
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
          <InputText
            label="랜드마크"
            name="landmark"
            value={this.state.landmark}
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
        <s.RowWrapper>
          <InputSpecialist
            value={specialist}
            handleChange={this.handleSpecialistChange}
          />
          <InputArray
            label="키워드"
            name="tags"
            value={this.state.tags}
            handleChange={this.handleArrayChange}
          />
        </s.RowWrapper>
        <s.RowWrapper>
          <InputImage
            label="치과교정전문의"
            name="specialist"
            defaultSrc={specialist.image}
            handleImageChange={this.handleImageChange}
          />
        </s.RowWrapper>

        <s.ButtonWrapper>
          <s.SubmitButton>등록</s.SubmitButton>
        </s.ButtonWrapper>
      </s.Form>
    );
  }

  private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    this.setState(prevState => ({ ...prevState, [name]: value }));
  };

  private handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    this.setState(prevState => ({ ...prevState, [name]: parseInt(value, 10) }));
  };

  private handleArrayChange = (name: string, value: string[]) => {
    this.setState(prevState => ({ ...prevState, [name]: value }));
  };

  private handleObjChange = (
    name: string,
    value: { [key: string]: string }
  ) => {
    this.setState(prevState => ({ ...prevState, [name]: value }));
  };

  private handleSpecialistChange = (data: {
    chief: string;
    school: string;
    period: { startAt: string; endAt: string };
  }) => {
    this.setState(state =>
      produce(state, draft => {
        draft.certificates.specialist = {
          ...draft.certificates.specialist,
          ...data,
        };
      })
    );
  };

  private handleImageChange = (e: React.ChangeEvent<any>) => {
    const { name, files } = e.target;
    this.setState(state =>
      produce(state, draft => {
        draft.files[name] = files[0];
      })
    );
  };

  private handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const prevFiles = this.state.files;
      if (prevFiles.specialist) {
        await this.uploadImage(prevFiles.specialist, 'specialist');
      }

      const { files, ...other } = this.state;
      const { id, registerId } = this.props;

      const data: SubmitInterface = { ...other };
      // ** APPEND REQUEST DATA
      if (id) data.id = id;
      // ** APPEND DATA END

      await updateClinic(data);
      if (registerId) await deleteRegistration(registerId, true);
      alert('저장 완료');
    } catch (e) {
      throw e;
    }
  };

  private uploadImage = (file: File, srcType: string) =>
    new Promise((resolve, reject) => {
      const bucket = new AWS.S3();
      const params = {
        Bucket: process.env.REACT_APP_AWS_S3_BUCKET_NAME || '',
        Key: `clinic/${this.state.name}/${srcType}/${file.name}`,
        ContentType: file.type,
        Body: file,
        ACL: 'public-read',
      };

      bucket
        .upload(params)
        .on('httpUploadProgress', evt => {
          console.log((evt.loaded * 100) / evt.total);
        })
        .send(async (e: any, data: { Location: string }) => {
          if (e) throw e;
          await this.setState(state =>
            produce(state, draft => {
              draft.certificates[srcType].image = data.Location;
            })
          );
          resolve(data.Location);
        });
    });
}

export default ClinicEdit;
