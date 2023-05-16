import React from 'react';
import PropTypes from 'prop-types';

function Select({ id, label, options, inputValue, name, handleChange }) {
  return (
    <div className="form-group" style={ { marginRight: '24px', width: '15%' } }>
      <label
        htmlFor={ id }
        style={ { marginBottom: '4px' } }
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
};

export default Select;
