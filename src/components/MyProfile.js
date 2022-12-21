import { useSelector } from 'react-redux';
import '../styles/MyProfile.css';

// eslint-disable-next-line arrow-body-style
const MyProfile = () => {
  const { messions, loading } = useSelector((state) => state.missions);

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
      </div>
    </div>
  );
};
export default MyProfile;
