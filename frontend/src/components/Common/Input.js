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
  minInput,
  maxInput,
  maxInputLength,
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
        min={ minInput }
        max={ maxInput }
        maxLength={ maxInputLength }
        autoComplete="off"
      />

    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  inputValue: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  containerStyles: PropTypes.objectOf(PropTypes.string),
  minInput: PropTypes.number,
}.isRequired;

export default Input;
