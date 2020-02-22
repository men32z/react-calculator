import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ name, color, wide }) => (
  <div style={{backgroundColor: color, width: wide ? '50%' : '25%'}}>
  <span>{name}</span>

  </div>
);
Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  wide: false,
  name: '',
  color: '#F5913E'
};

export default Button;
