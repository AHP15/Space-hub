import PropTypes from 'prop-types';

// eslint-disable-next-line object-curly-newline, no-unused-vars
const MessionRow = ({ id, missionName, description, changeBg, joined }) => {
  const handleJoin = () => {
  };

  return (
    <tr className="table_head" style={{ backgroundColor: changeBg ? 'rgba(211, 211, 211, 0.5)' : '' }}>
      <th>{missionName}</th>
      <td>{description}</td>
      <td className="btn_row">
        <button type="button">NOT A MEMBER</button>
      </td>
      <td className="btn_row">
        <button type="button" onClick={handleJoin}>Join Mission</button>
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
