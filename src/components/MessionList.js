import MessionRow from './MessionRow';
import '../styles/MessionList.css';

// eslint-disable-next-line arrow-body-style
const MessionList = () => {
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
          Array(10).fill(null).map((_, i) => (
            <MessionRow
              key={Math.random()}
              missionName="messtion name"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur delectus commodi ducimus sapiente voluptatibus illum, qui soluta quis perferendis inventore placeat culpa illo! Deserunt ducimus ab suscipit sint distinctio unde assumenda molestiae ipsum illum non reiciendis nesciunt exercitationem, quae quo quaerat nihil? Nihil dolore corrupti facilis nobis, vero cumque recusandae."
              changeBg={i % 2 === 0}
            />
          ))
        }
      </tbody>
    </table>
  );
};

export default MessionList;
