/* tslint:disable:jsx-no-lambda */
import produce from 'immer';
import React, { Component } from 'react';
import InputWrapper from '../InputWrapper';
import * as s from './InputArray.styled';

interface Props {
  label: string;
  name: string;
  value: string[];
  handleChange: (name: string, value: string[]) => void;
}

interface State {
  array: string[];
}

class InputArray extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = { array: props.value };
  }

  public render() {
    const { array } = this.state;
    return (
      <InputWrapper
        label={this.props.label}
        buttonText="추가"
        handleClick={this.handleAdd}>
        {array.map((item, index) => (
          <s.InputContainer key={index}>
            <s.Input
              name={index.toString()}
              value={item}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                this.handleChange(e, index)
              }
            />
            <s.Delete onClick={() => this.handleDelete(index)}>
              <s.DeleteIcon />
            </s.Delete>
          </s.InputContainer>
        ))}
      </InputWrapper>
    );
  }

  private handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.setState({ array: [...this.state.array, ''] });
  };

  private handleChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.currentTarget;
    const { name, handleChange } = this.props;

    await this.setState(state =>
      produce(state, draft => {
        draft.array[index] = value;
      })
    );
    handleChange(name, this.state.array);
  };

  private handleDelete = async (index: number) => {
    const { name, handleChange } = this.props;

    await this.setState(state =>
      produce(state, draft => {
        draft.array.splice(index, 1);
      })
    );
    handleChange(name, this.state.array);
  };
}

export default InputArray;
