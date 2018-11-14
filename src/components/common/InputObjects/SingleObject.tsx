import React, { Component } from 'react';
import * as s from './InputObjects.styled';

interface State {
  objKey: string;
  objValue: string;
}

export interface Param extends State {
  index: number;
}

interface ObjectInterface extends Param {
  handleObjChange: (obj: Param) => void;
}

class SingleObject extends Component<ObjectInterface, State> {
  public constructor(props: ObjectInterface) {
    super(props);
    this.state = {
      objKey: props.objKey,
      objValue: props.objValue,
    };
  }

  public render() {
    return (
      <s.InputContainer>
        <s.Key
          name="objKey"
          placeholder="제목"
          value={this.state.objKey}
          onChange={this.handleChange}
        />
        <s.Value
          name="objValue"
          placeholder="내용"
          value={this.state.objValue}
          onChange={this.handleChange}
        />
      </s.InputContainer>
    );
  }

  private handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { handleObjChange, index } = this.props;
    const { name, value } = e.currentTarget;
    await this.setState(prevState => ({ ...prevState, [name]: value }));

    handleObjChange({ ...this.state, index });
  };
}

export default SingleObject;
