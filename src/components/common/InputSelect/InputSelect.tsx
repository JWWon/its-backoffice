import React from 'react';
import InputWrapper from '../InputWrapper';

interface OptionInterface {
  value: number;
  name: string;
}

interface Props {
  label: string;
  name: string;
  value: number;
  options: OptionInterface[];
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const InputSelect: React.SFC<Props> = ({
  label,
  name,
  options,
  value,
  handleChange,
}) => (
  <InputWrapper label={label}>
    <select name={name} onChange={handleChange} defaultValue={value.toString()}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  </InputWrapper>
);

export default InputSelect;
