/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  rockets: [],
  error: null,
};
export const getRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const res = await fetch('https://api.spacexdata.com/v3/missions', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
});

const RocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
  },
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
