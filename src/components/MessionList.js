import { useSelector } from 'react-redux';

import MessionRow from './MessionRow';
import '../styles/MessionList.css';

const MessionList = () => {
  const { messions, loading } = useSelector((state) => state.missions);

  if (loading) {
    // I will add more functionality here
    return <div className="mession_table">Loading...</div>;
  }
  return (
    <table className="mession_table">
      <thead>
        <tr className="table_head">
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>{}</th>
        </tr>
      </thead>

      <tbody>
        {
          messions.map((mission, i) => (
            <MessionRow
              key={mission.mission_id + Math.random()}
              id={mission.mission_id}
              missionName={mission.mission_name}
              description={mission.description}
              changeBg={i % 2 === 0}
            />
          ))
        }
      </tbody>
    </table>
  );
};

export default MessionList;
