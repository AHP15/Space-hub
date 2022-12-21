import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import MyProfile from '../components/MyProfile';
import Store from '../slices/store';

it('testing MyProfile', () => {
  const tree = renderer.create(<Provider store={Store}><MyProfile /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
