import React from 'react';
import './App.css';
import Cars from './Cars';
import CarsContext from './contextAPI';

class App extends React.Component {
  constructor() {
    super();

    this.handleMovement = this.handleMovement.bind(this);

    this.state = {
      yellow: false,
      red: false,
      blue: false,
    }
  }

  handleMovement(car, side) {
    this.setState({
      [car]: side,
    })
  }

  render() {
    const contextValue = {
      ...this.state, handleMovement: this.handleMovement
    }

    return (
      <CarsContext.Provider
        value={contextValue}
        handleMovement={this.handleMovement}
      >
        <Cars />
      </CarsContext.Provider>
    );
  }
}

export default App;
