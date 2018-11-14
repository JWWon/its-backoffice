import React, { Component } from 'react';
import * as s from './InputObjects.styled';
import SingleObject, { Param } from './SingleObject';

interface State {
  objs: {
    [key: string]: string;
  };
}

interface Props extends State {
  label: string;
  name: string;
  handleChange: (name: string, value: { [key: string]: string }) => void;
}

class InputObjects extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = { objs: props.objs };
  }

  public render() {
    const { objs } = this.state;
    return (
      <s.Container>
        <s.LabelContainer>
          <s.Label>{this.props.label}</s.Label>
          <s.AddButton onClick={this.handleAdd}>추가</s.AddButton>
        </s.LabelContainer>
        {Object.keys(objs).map((key, idx) => (
          <SingleObject
            key={idx}
            index={idx}
            objKey={key}
            objValue={objs[key]}
            handleObjChange={this.handleObjChange}
          />
        ))}
      </s.Container>
    );
  }

  private handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { objs } = this.state;
    this.setState({ objs: { ...objs, ['제목']: '' } });
  };

  private handleObjChange = (obj: Param) => {
    const { objs, name, handleChange } = this.props;
    const nextObjs = {};

    Object.keys(objs).forEach((key, index) => {
      if (index === obj.index) {
        nextObjs[obj.objKey] = obj.objValue;
      } else {
        nextObjs[key] = objs[key];
      }
    });

    handleChange(name, nextObjs);
  };
}

export default InputObjects;
