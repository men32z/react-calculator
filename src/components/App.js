import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calculation: '0',
    };
  }

  render() {
    const { calculation } = this.state;
    return (
      <div>
        <Display result={calculation} />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
