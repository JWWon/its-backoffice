import produce from 'immer';
import React, { Component } from 'react';
import * as s from './InputObjects.styled';
import SingleObject, { Param } from './SingleObject';

interface Props {
  label: string;
  name: string;
  objs: { [key: string]: string };
  handleChange: (name: string, value: { [key: string]: string }) => void;
}

interface ObjectInterface {
  key: string;
  value: string;
}

interface State {
  objs: ObjectInterface[];
}

class InputObjects extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    const objs: ObjectInterface[] = [];
    Object.keys(props.objs).forEach(key => {
      objs.push({ key, value: props.objs[key] });
    });

    this.state = { objs };
  }

  public render() {
    const { objs } = this.state;
    return (
      <s.Container>
        <s.LabelContainer>
          <s.Label>{this.props.label}</s.Label>
          <s.AddButton onClick={this.handleAdd}>추가</s.AddButton>
        </s.LabelContainer>
        {objs.map((obj, index) => (
          <SingleObject
            key={index}
            index={index}
            objKey={obj.key}
            objValue={obj.value}
            handleObjChange={this.handleObjChange}
            handleObjDelete={this.handleObjDelete}
          />
        ))}
      </s.Container>
    );
  }

  private handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.setState(prevState =>
      produce(prevState, draft => {
        draft.objs.push({ key: '', value: '' });
      })
    );
  };

  private handleObjChange = async (obj: Param) => {
    const { name, handleChange } = this.props;
    const objects = {};

    await this.setState(prevState =>
      produce(prevState, draft => {
        draft.objs[obj.index] = {
          key: obj.objKey,
          value: obj.objValue,
        };
      })
    );

    this.state.objs.forEach(stateObj => {
      objects[stateObj.key] = stateObj.value;
    });
    handleChange(name, objects);
  };

  private handleObjDelete = async (index: number) => {
    await this.setState(prevState =>
      produce(prevState, draft => {
        draft.objs.splice(index, 1);
      })
    );
  };
}

export default InputObjects;
