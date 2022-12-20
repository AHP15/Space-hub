import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ name, image, description }) => (
  <div className="card">
    <img src={image} alt="rocketIMG" />
    <div className="rocket-info">
      <h2>{name}</h2>
      <p>{description}</p>
      <button type="button">Reserve rocket</button>
    </div>
  </div>
);

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default Rocket;
