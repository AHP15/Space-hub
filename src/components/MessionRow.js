import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { joinMission, leaveMission } from '../slices/MessionSlice';

// eslint-disable-next-line object-curly-newline, no-unused-vars
const MessionRow = ({ id, missionName, description, changeBg, joined }) => {
  const dispatch = useDispatch();

  const toggleJoin = () => {
    if (!joined) {
      dispatch(joinMission(id));
    } else {
      dispatch(leaveMission(id));
    }
  };

  return (
    <tr
      className="table_head"
      style={{ backgroundColor: changeBg ? 'rgba(211, 211, 211, 0.5)' : '' }}
    >
      <th>{missionName}</th>
      <td>{description}</td>
      <td className="btn_row">
        <button title="isMember" className={joined ? 'member' : 'not_member'} type="button">
          {joined ? 'Active Member' : 'NOT A MEMBER'}
        </button>
      </td>
      <td className="btn_row">
        <button type="button" className={joined ? 'joined' : ''} onClick={toggleJoin}>
          {joined ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
};

MessionRow.propTypes = {
  id: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  changeBg: PropTypes.bool.isRequired,
  joined: PropTypes.bool.isRequired,
};

export default MessionRow;
