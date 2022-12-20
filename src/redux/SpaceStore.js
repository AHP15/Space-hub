import { configureStore } from '@reduxjs/toolkit';
import rocketsReduser from './Rockets/Rockets';

const Store = configureStore({
  reducer: {
    rockets: rocketsReduser,
  },
});

export default Store;
