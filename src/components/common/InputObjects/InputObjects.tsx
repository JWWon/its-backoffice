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
    this.setState({ objs: { ...this.state.objs, ['']: '' } });
  };

  private handleObjChange = async (obj: Param) => {
    const { name, handleChange } = this.props;
    const objs = {};

    Object.keys(this.state.objs).forEach((key, index) => {
      if (index === obj.index) {
        objs[obj.objKey] = obj.objValue;
      } else {
        objs[key] = this.state.objs[key];
      }
    });

    await this.setState({ objs });
    handleChange(name, this.state.objs);
  };
}

export default InputObjects;
