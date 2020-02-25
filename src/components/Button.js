import PropTypes from 'prop-types';
import React from 'react';

const Button = ({
  name, color, wide, onClick,
}) => (
  <div
    style={{ backgroundColor: color, width: wide ? 'calc(50% + 2px)' : '25%', cursor: 'pointer' }}
    onClick={() => onClick(name)}
    onKeyDown={() => onClick(name)}
    role="presentation"
  >
    <span>{name}</span>

  </div>
);
Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  wide: false,
  name: '',
  color: '#F5913E',
  onClick: () => {},
};

export default Button;
