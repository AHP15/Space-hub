import renderer from 'react-test-renderer';
// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import MessionList from '../components/MessionList';
import Store from '../slices/store';

it('renders NavBar correctly', () => {
  const tree = renderer.create(<Provider store={Store}><MessionList /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
