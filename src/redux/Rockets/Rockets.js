/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  rockets: [],
  error: null,
};
export const getRockets = createAsyncThunk('rockets/fetchRockets', () => fetch('https://api.spacexdata.com/v3/rockets').then((data) => data.json()));

const RocketSlice = createSlice({
  name: 'rocket',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getRockets.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRockets.fulfilled, (state, actions) => {
      state.loading = false;
      state.rockets = actions.payload;
      state.error = null;
    });
    builder.addCase(getRockets.rejected, (state, actions) => {
      state.loading = false;
      state.rockets = [];
      state.error = actions.error.message;
    });
  },
});

export default RocketSlice.reducer;
