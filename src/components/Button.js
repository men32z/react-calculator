import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ name }) => (
  <div>
    {name}
  </div>
);
Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: '',
};

export default Button;
