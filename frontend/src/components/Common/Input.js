import PropTypes from 'prop-types';

function Input({
  id,
  label,
  type,
  inputValue,
  name,
  handleChange,
  placeholder,
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
        placeholder={ placeholder }
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
  placeholder: PropTypes.string.isRequired,
};

export default Input;
