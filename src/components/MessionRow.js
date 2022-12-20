import PropTypes from 'prop-types';
// eslint-disable-next-line arrow-body-style
const MessionRow = ({ missionName, description, changeBg }) => {
  return (
    <tr className="table_head" style={{ backgroundColor: changeBg ? 'rgba(211, 211, 211, 0.5)' : '' }}>
      <th>{missionName}</th>
      <td>{description}</td>
      <td className="btn_row">
        <p>NOT A MEMBER</p>
      </td>
      <td className="btn_row">
        <p>Join Mission</p>
      </td>
    </tr>
  );
};

MessionRow.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  changeBg: PropTypes.bool.isRequired,
};

export default MessionRow;
