import PropTypes from 'prop-types';
import styles from './Datalist.module.css';

function Datalist({
  id,
  label,
  options,
  inputValue,
  name,
  placeholder,
  containerStyles,
}) {
  return (
    <div style={ { ...containerStyles } } className={ styles[id] }>
      <label
        htmlFor={ id }
        className="form-label"
      >
        { label }
      </label>
      <input
        className="form-control"
        list="datalistOptions"
        id={ id }
        value={ inputValue }
        name={ name }
        placeholder={ placeholder }
      />
      <datalist id="datalistOptions">
        { options.map((option) => (
          <option
            key={ option }
            value={ option }
          >
            { option }
          </option>
        ))}
      </datalist>
    </div>
  );
}

Datalist.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  containerStyles: PropTypes.objectOf(PropTypes.string).isRequired,
  // handleChange: PropTypes.func.isRequired,
};

export default Datalist;
