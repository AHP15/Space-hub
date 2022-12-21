import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import MessionRow from '../components/MessionRow';
import Store from '../slices/store';

it('renders MessionRow correctly', () => {
  const tree = renderer.create(
    <Provider store={Store}>
      <MessionRow
        id={Math.random().toString()}
        missionName="mission name"
        description="mission description mission description mission description mission"
        changeBg={false}
        joined={false}
      />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

const CustomizedCompenent = ({ index }) => {
  const { messions } = useSelector((state) => state.missions);
  return (
    <div>
      <table>
        <tbody>
          <MessionRow
            id={messions[index].mission_id}
            missionName={messions[index].mission_name}
            description={messions[index].description}
            changeBg={false}
            joined={messions[index]?.joined}
          />
        </tbody>
      </table>
    </div>
  );
};

CustomizedCompenent.propTypes = {
  index: PropTypes.number.isRequired,
};

it('Join button works correctly', async () => {
  // Arrange
  render(<Provider store={Store}><CustomizedCompenent index={0} /></Provider>);

  // Act
  await userEvent.click(screen.getByText('Join Mission'));
  await screen.getByTitle('isMember');

  // Assertion
  expect(screen.getByTitle('isMember')).toHaveTextContent('Active Member');
});

it('Leave button works correctly', async () => {
  // Arrange
  render(<Provider store={Store}><CustomizedCompenent index={1} /></Provider>);

  // Act
  await userEvent.click(screen.getByText('Leave Mission'));
  await screen.getByTitle('isMember');

  // Assertion
  expect(screen.getByTitle('isMember')).toHaveTextContent('NOT A MEMBER');
});
