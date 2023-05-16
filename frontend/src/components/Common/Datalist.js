import PropTypes from 'prop-types';
import styles from './Datalist.module.css';

function Datalist({
  id,
  label,
  options,
  name,
  placeholder,
  containerStyles,
  handleChange,
  value,
}) {
  return (
    <div style={ { ...containerStyles } } className={ styles[id] }>
      <label
        htmlFor={ `datalist-${id}` }
        className="form-label"
      >
        { label }
      </label>
      <input
        type="input"
        className="form-control"
        list={ id }
        name={ name }
        placeholder={ placeholder }
        id={ `datalist-${id}` }
        onChange={ (event) => handleChange(event) }
        value={ value }
      />
      <datalist id={ id }>
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
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  containerStyles: PropTypes.objectOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Datalist;
