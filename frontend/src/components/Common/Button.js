import React from 'react';
import PropTypes from 'prop-types';

function Button({
  label,
  onClick,
  type,
  disabled,
}) {
  return (
    <button
      type={ type }
      onClick={ onClick }
      disabled={ disabled }
      className="btn btn-primary"
      style={ {
        backgroundColor: '#684f92',
        border: '1px solid #684f92',
        fontFamily: 'Museo Sans Rounded',
        fontSize: '14px',
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
};

export default Button;
