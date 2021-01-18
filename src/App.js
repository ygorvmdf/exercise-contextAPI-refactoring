import React from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';
import Context from './contextAPIs';

class App extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      blueCar: false,
      redCar: false,
      yellowCar: false,
      trafficSignal: 'red',
    }
  }

  handleClick(state, value) {
    console.log(this.state)
    this.setState({
      [state]: value,
    })
  }

  render() {
    const myContext = {
      ...this.state,
      handleClick: this.handleClick,
    }

    return (
      <div className="container">
        <Context.Provider value={ myContext}>
          <Cars />
          <TrafficSignal />
        </Context.Provider>
      </div>
    );
  }
}

export default App;
