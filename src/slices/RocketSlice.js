import { createSlice } from '@reduxjs/toolkit';

const RocketSlice = createSlice({
  name: 'rocket',
  initialState: {
    loading: false,
    error: null,
    rockets: [],
  },
  reducers: {
  },
});
export default RocketSlice.reducer;
