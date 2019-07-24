import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Input } from 'reactstrap';

const NumberInput = ({ id, name, value, onChange }) => {
  const number = _.toNumber(value);
  const isValid = _.isFinite(number);
  return (
    <Input
      id={id}
      name={name}
      invalid={!isValid}
      type="number"
      value={value}
      onChange={onChange}
      className="text-right"
    />
  );
}

NumberInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

NumberInput.defaultProps = {
  id: undefined,
  name: undefined,
}

export default NumberInput;
