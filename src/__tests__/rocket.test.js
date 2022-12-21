import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Rocket from '../components/Rocket';
import Store from '../slices/store';

it('renders Rocket correctly', () => {
  const tree = renderer.create(
    <Provider store={Store}>
      <Rocket
        name="Falcon 1"
        image="rocket image"
        description="Rocket description"
        id={1}
        reserved={false}
      />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

const CustomizedCompenent = ({ index }) => {
  const { rockets } = useSelector((state) => state.rockets);
  return (
    <section>
      <div>
        <Rocket
          key={rockets[index].id}
          name={rockets[index].rocket_name}
          image={rockets[index].flickr_images[0]}
          description={rockets[index].description}
          id={rockets[index].id}
          reserved={rockets[index].reserved}
        />
      </div>
    </section>
  );
};

CustomizedCompenent.propTypes = {
  index: PropTypes.number.isRequired,
};

it('Join button works correctly', async () => {
  // Arrange
  render(<Provider store={Store}><CustomizedCompenent index={0} /></Provider>);

  // Act
  await userEvent.click(screen.getByText('Cancel reservation'));
  await screen.getByTitle('isMember');

  // Assertion
  expect(screen.getByTitle('isMember')).toHaveTextContent('Reserve rocket');
});

it('Leave button works correctly', async () => {
  // Arrange
  render(<Provider store={Store}><CustomizedCompenent index={1} /></Provider>);

  // Act
  await userEvent.click(screen.getByText('Reserve rocket'));
  await screen.getByTitle('isMember');

  // Assertion
  expect(screen.getByTitle('isMember')).toHaveTextContent('Cancel reservation');
});
