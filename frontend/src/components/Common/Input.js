import PropTypes from 'prop-types';

function Input({
  id,
  label,
  type,
  inputValue,
  name,
  handleChange,
}) {
  return (
    <div className={ type === 'radio' ? 'form-check' : 'form-group' }>
      <label
        className={ type === 'radio' ? 'form-check-label' : '' }
        htmlFor={ id }
      >
        { label }
      </label>
      <input
        className={ type === 'radio' ? 'form-check-input' : 'form-control' }
        id={ id }
        type={ type }
        name={ name }
        value={ inputValue }
        onChange={ (event) => handleChange(event) }
      />

    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
