import React from 'react';
import PropTypes from 'prop-types';
import styles from './Select.module.css';

function Select({
  id,
  label,
  options,
  inputValue,
  name,
  handleChange,
  containerStyles,
}) {
  return (
    <div
      className={ `${styles[id]} form-group` }
      style={ { ...containerStyles } }
    >
      <label
        htmlFor={ id }
        style={ { marginBottom: '8px' } }
      >
        { label }
      </label>

      <select
        className="form-select"
        id={ id }
        value={ inputValue }
        name={ name }
        onChange={ (event) => handleChange(event) }
      >
        { options.map((option) => (
          <option
            key={ option }
            value={ option }
          >
            { option }
          </option>
        ))}
      </select>
    </div>
  );
}

Select.propTypes = {
  id: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.string,
  inputValue: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default Select;
