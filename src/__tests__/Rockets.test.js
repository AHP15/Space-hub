import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import Rockets from '../components/Rockets';
import Store from '../slices/store';

it('testing Rockets', () => {
  const tree = renderer.create(<Provider store={Store}><Rockets /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
