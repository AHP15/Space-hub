import { useSelector } from 'react-redux';
import '../styles/MyProfile.css';
import React from 'react';

// eslint-disable-next-line arrow-body-style
const MyProfile = () => {
  const { messions, loading } = useSelector((state) => state.missions);
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  if (loading) {
    return <div className="mession_table">Loading...</div>;
  }

  return (
    <div className="profile">
      <div className="missions">
        <h2>My Messions</h2>
        {
          messions
            .filter((mission) => mission.joined)
            .map((mission) => (
              <p className="mission_name" key={mission.mission_id + Math.random()}>{mission.mission_name}</p>
            ))
        }
      </div>
      <div className="rockets">
        <h2>My Rockets</h2>
        {reservedRockets.length > 0 ? <ul>{reservedRockets.map((rocket) => <li key={rocket.id}>{rocket.rocket_name}</li>)}</ul> : ''}
      </div>
    </div>
  );
};
export default MyProfile;
