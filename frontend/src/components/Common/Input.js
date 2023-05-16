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
  containerClassName,
  labelClassName,
  inputClassName,
  componentStyles,
}) {
  return (
    <div
      className={
        type === 'radio'
          ? `form-check ${styles[containerClassName]}`
          : `form-group ${styles[containerClassName]}`
      }
      style={ { ...componentStyles } }
    >
      <label
        className={ type === 'radio'
          ? `form-check-label ${styles[labelClassName]}`
          : `${styles[labelClassName]}` }
        htmlFor={ id }
      >
        { label }
      </label>
      <input
        className={ type === 'radio'
          ? `form-check-input ${styles[inputClassName]}`
          : `form-control ${styles[inputClassName]}` }
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
  containerClassName: PropTypes.string.isRequired,
  labelClassName: PropTypes.string.isRequired,
  inputClassName: PropTypes.string.isRequired,
  componentStyles: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Input;
