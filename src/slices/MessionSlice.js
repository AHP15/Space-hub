import { createSlice } from '@reduxjs/toolkit';

const MessionSlice = createSlice({
  name: 'mession',
  initialState: {
    loading: false,
    error: null,
    messions: [],
  },
  reducers: {
  },
});
export default MessionSlice.reducer;
