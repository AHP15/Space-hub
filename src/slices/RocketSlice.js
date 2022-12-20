/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const res = await fetch(process.env.REACT_APP_ROCKETS, {
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
  initialState: {
    loading: false,
    error: null,
    rockets: [],
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRockets.fulfilled, (state, action) => {
        state.loading = false;
        state.rockets = action.payload;
      })
      .addCase(getRockets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default RocketSlice.reducer;
