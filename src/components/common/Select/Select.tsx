import React from 'react';
import * as s from './Select.styled';

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

const Select: React.SFC<Props> = ({
  label,
  name,
  options,
  value,
  handleChange,
}) => (
  <s.Container>
    <s.Label>{label}</s.Label>
    <select name={name} onChange={handleChange} defaultValue={value.toString()}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  </s.Container>
);

export default Select;
