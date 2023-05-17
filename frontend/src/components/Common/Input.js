import PropTypes from 'prop-types';
import styles from './Input.module.css';

function Input({
  id,
  label,
  type,
  inputValue,
  name,
  handleChange,
  placeholder,
  containerStyles,
}) {
  return (
    <div
      className={
        type === 'radio'
          ? `form-check ${styles[id]}`
          : `form-group ${styles[id]}`
      }
      style={ { ...containerStyles } }
    >
      <label
        className={ type === 'radio'
          ? 'form-check-label'
          : '' }
        htmlFor={ id }
        style={ { marginBottom: '8px' } }
      >
        { label }
      </label>
      <input
        className={ type === 'radio'
          ? 'form-check-input'
          : 'form-control' }
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
  containerStyles: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Input;
