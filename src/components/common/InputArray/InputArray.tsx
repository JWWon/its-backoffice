/* tslint:disable:jsx-no-lambda */
// import produce from 'immer';
import React, { Component } from 'react';
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
      <s.Container>
        <s.LabelContainer>
          <s.Label>{this.props.label}</s.Label>
          <s.AddButton onClick={this.handleAdd}>추가</s.AddButton>
        </s.LabelContainer>
        {array.map((item, index) => (
          <s.Input
            key={index}
            name={index.toString()}
            value={item}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              this.handleChange(e, index)
            }
          />
        ))}
      </s.Container>
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
    const { handleChange } = this.props;

    this.setState(state => {
      const nextArray = state.array;
      nextArray[index] = value;
      return { array: nextArray };
    });
    handleChange(this.props.name, this.state.array);
  };
}

export default InputArray;
