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
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  containerStyles: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Select;
