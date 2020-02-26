import PropTypes from 'prop-types';
import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.isLocked = this.isLocked.bind(this);
  }

  handleClick(name) {
    const { onClick } = this.props;
    if (!this.isLocked(name)) return onClick(name);
    return false;
  }

  isLocked(x) {
    const { result: { next } } = this.props;
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    return (next && next.match(/[a-z]/i) && !numbers.includes(x));
  }

  render() {
    const { name, color, wide } = this.props;
    const styles = {
      backgroundColor: this.isLocked(name) ? `${color}50` : color,
      width: wide ? 'calc(50% + 2px)' : '25%',
      cursor: this.isLocked(name) ? 'not-allowed' : 'pointer',
    };
    return (
      <div
        style={styles}
        onClick={() => this.handleClick(name)}
        onKeyDown={() => this.handleClick(name)}
        role="presentation"
      >
        <span>{name}</span>

      </div>
    );
  }
}
Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
  onClick: PropTypes.func,
  result: PropTypes.objectOf(PropTypes.object()),
};

Button.defaultProps = {
  wide: false,
  name: '',
  color: '#F5913E',
  onClick: () => {},
  result: {
    next: '',
  },
};

export default Button;
