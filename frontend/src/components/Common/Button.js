import React from 'react';
import PropTypes from 'prop-types';

function Button({
  label,
  onClick,
  type,
  disabled,
  componentStyles,
}) {
  return (
    <button
      type={ type }
      onClick={ onClick }
      disabled={ disabled }
      className="btn btn-primary"
      style={ {
        border: '1px solid #684f92',
        fontFamily: 'Museo Sans Rounded',
        fontSize: '14px',
        ...componentStyles,
      } }
    >
      { label }
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
  disabled: PropTypes.bool.isRequired,
  componentStyles: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Button;
