import React from 'react';

import InputObjects from 'components/common/InputObjects';
import InputText from 'components/common/InputText';
import { Footer } from 'lib/networks/meta';
import * as s from './FooterEdit.styled';

interface Props extends Footer {
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  handleObjChange: (name: string, value: { [key: string]: string }) => void;
}

const FooterEdit: React.SFC<Props> = props => (
  <s.Container>
    <s.Form>
      <s.RowWrapper>
        <InputText
          label="대표"
          name="president"
          value={props.president}
          handleChange={props.handleChange}
        />
        <InputText
          label="관리자"
          name="manager"
          value={props.manager}
          handleChange={props.handleChange}
        />
        <InputText
          label="사업자번호"
          name="registration"
          value={props.registration}
          handleChange={props.handleChange}
        />
      </s.RowWrapper>
      <s.RowWrapper>
        <InputText
          label="이메일"
          name="email"
          value={props.email}
          handleChange={props.handleChange}
        />
        <InputText
          label="연락처"
          name="phone"
          value={props.phone}
          handleChange={props.handleChange}
        />
        <InputText
          label="주소"
          name="address"
          value={props.address}
          handleChange={props.handleChange}
        />
      </s.RowWrapper>
      <s.RowWrapper>
        <InputObjects
          disabled
          label="소셜 링크"
          name="social"
          objs={props.social}
          handleChange={props.handleObjChange}
        />
      </s.RowWrapper>
    </s.Form>
  </s.Container>
);

export default FooterEdit;
