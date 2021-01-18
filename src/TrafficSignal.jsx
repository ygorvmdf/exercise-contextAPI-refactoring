// src/TrafficSignal.jsx

import React from 'react';
import PropTypes from 'prop-types';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import Context from './contextAPIs'

const renderSignal = (signalColor) => {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

const TrafficSignal = () => {
  return (
    <Context.Consumer>
      {
        ({ trafficSignal, handleClick }) => (
      <div>
        <div className="button-container">
          <button onClick={() => handleClick('trafficSignal', 'red')} type="button">
            Red
        </button>
          <button onClick={() => handleClick('trafficSignal', 'yellow')} type="button">
            Yellow
        </button>
          <button onClick={() => handleClick('trafficSignal', 'green')} type="button">
            Green
        </button>
        </div>
        <img className="signal" src={renderSignal(trafficSignal)} alt={`${trafficSignal} light image`} />
      </div>
        )
      }
    </Context.Consumer>
  );
};

TrafficSignal.propTypes = {
  handleClick: PropTypes.func.isRequired,
  trafficSignal: PropTypes.string.isRequired,
};

export default TrafficSignal;
