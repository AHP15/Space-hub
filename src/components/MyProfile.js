import '../styles/MyProfile.css';
import React from 'react';
import { useSelector } from 'react-redux';

// eslint-disable-next-line arrow-body-style
const MyProfile = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  return (
    <div className="profile">
      <div className="missions">
        <h2>My Messions</h2>
      </div>
      <div className="rockets">
        <h2>My Rockets</h2>
        {reservedRockets.length > 0 ? <ul>{reservedRockets.map((rocket) => <li key={rocket.id}>{rocket.rocket_name}</li>)}</ul> : ''}
      </div>
    </div>
  );
};
export default MyProfile;
