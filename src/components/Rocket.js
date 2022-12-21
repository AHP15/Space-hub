import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookingRocket, unbookingRocket } from '../slices/RocketSlice';

const Rocket = ({
  name, image, description, id, reserved,
}) => {
  const dispatch = useDispatch();

  const booking = () => {
    const obj = {
      id,
    };

    if (reserved) {
      dispatch(unbookingRocket(obj));
    } else {
      dispatch(bookingRocket(obj));
    }
  };

  return (
    <div className="card">
      <img src={image} alt="rocketIMG" />
      <div className="rocket-info">
        <h2>{name}</h2>
        <p>{description}</p>
        <button title="isMember" type="button" onClick={booking} className={reserved ? 'booked' : ''}>{reserved ? 'Cancel reservation' : 'Reserve rocket'}</button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};
Rocket.defaultProps = {
  reserved: false,
};
export default Rocket;
