import produce from 'immer';
import React, { Component } from 'react';
import * as s from './InputSpecialist.styled';

interface State {
  chief: string;
  school: string;
  period: {
    startAt: string;
    endAt: string;
  };
}

interface Props {
  value: {
    chief: string;
    school: string;
    period: {
      startAt: string;
      endAt: string;
    };
    image?: string;
  };
  handleChange: (data: State) => void;
}

class InputSpecialist extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      chief: props.value.chief,
      school: props.value.school,
      period: {
        startAt: props.value.period.startAt,
        endAt: props.value.period.endAt,
      },
    };
  }

  public render() {
    const { chief, school, period } = this.state;
    return (
      <s.Container>
        <s.Label>병원장 정보</s.Label>
        <s.InputWrapper>
          <s.Title>이름</s.Title>
          <s.Input
            name="chief"
            placeholder="병원장"
            value={chief}
            onChange={this.handleChange}
          />
        </s.InputWrapper>
        <s.InputWrapper>
          <s.Title>수련기관</s.Title>
          <s.Input
            name="school"
            placeholder="수련기관"
            value={school}
            onChange={this.handleChange}
          />
        </s.InputWrapper>
        <s.InputWrapper>
          <s.Title>수련 시작일</s.Title>
          <s.Input
            name="startAt"
            placeholder="2018.01.01"
            value={period.startAt}
            onChange={this.handlePeriodChange}
          />
        </s.InputWrapper>
        <s.InputWrapper>
          <s.Title>수련 종료일</s.Title>
          <s.Input
            name="endAt"
            placeholder="2018.01.01"
            value={period.endAt}
            onChange={this.handlePeriodChange}
          />
        </s.InputWrapper>
      </s.Container>
    );
  }

  private handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    await this.setState(prevState => ({ ...prevState, [name]: value }));
    this.props.handleChange(this.state);
  };

  private handlePeriodChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.currentTarget;
    await this.setState(state =>
      produce(state, draft => {
        draft.period[name] = value;
      })
    );
    this.props.handleChange(this.state);
  };
}

export default InputSpecialist;
