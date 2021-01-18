import PropTypes from 'prop-types';
import React from 'react';
import CarsContext from './contextAPI';
import carRed from './images/carRed.jpeg'
import carBlue from './images/carBlue.jpeg'
import carYellow from './images/carYellow.jpeg'

function Cars(props) {
  return (
    <CarsContext.Consumer>
      {
        ({yellow, blue, red, handleMovement}) => (
          <div>
            <div>
              <img
                className={red ? 'car-right' : 'car-left'}
                src={carRed}
                alt="red car"
              />
              <button
                onClick={() => handleMovement('red', !red)}
                type="button"
              >
                Move
              </button>
            </div>
            <div>
              <img
                className={blue ? 'car-right' : 'car-left'}
                src={carBlue}
                alt="blue car"
              />
              <button
                onClick={() => handleMovement('blue', !blue)}
                type="button"
              >
                Move
              </button>
            </div>
            <div>
              <img
                className={yellow ? 'car-right' : 'car-left'}
                src={carYellow}
                alt="yellow car"
              />
              <button
                onClick={() => handleMovement('yellow', !yellow)}
                type="button"
              >
                Move
              </button>
            </div>
          </div>
        )
      }

    </CarsContext.Consumer>
  );
}

Cars.propTypes = {
  handleMovement: PropTypes.func.isRequired,
  car: PropTypes.shape({
    blue: PropTypes.bool.isRequired,
    red: PropTypes.bool.isRequired,
    yellow: PropTypes.bool.isRequired,
  })
};

export default Cars;
