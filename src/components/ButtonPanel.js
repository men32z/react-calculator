import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { clickHandler } = this.props;
    return clickHandler(buttonName);
  }

  render() {
    const paintGray = (i, x) => (i < 3 && x !== '=' ? '#E0E0E0' : undefined);
    const items = [
      ['AC', '+/-', '%', '÷'], ['7', '8', '9', 'x'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['0', '.', '='],
    ].map(x => (
      <div key={x[0][0]}>
        {x.map((x, i) => <Button key={x} name={x} onClick={this.handleClick} color={paintGray(i, x)} wide={x === '0'} />)}
      </div>
    ));

    return (
      <div className="button-panel">
        {items}
      </div>
    );
  }
}


ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

ButtonPanel.defaultProps = {
  clickHandler: () => {},
};

export default ButtonPanel;
