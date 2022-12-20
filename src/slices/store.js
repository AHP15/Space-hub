import { configureStore } from '@reduxjs/toolkit';
import rocketsReduser from './RocketSlice';
import messionSlice from './MessionSlice';

const Store = configureStore({
  reducer: {
    rockets: rocketsReduser,
    missions: messionSlice,
  },
});

export default Store;
