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

const createRocketJustForTest = (reserved) => ({
  id: 'id',
  flickr_images: ['first image', 'secound image'],
  rocket_name: 'mission name',
  description: 'mission description',
  reserved,
});

const RocketSlice = createSlice({
  name: 'rocket',
  initialState: {
    loading: false,
    error: null,
    rockets: [createRocketJustForTest(true), createRocketJustForTest(false)],
  },
  reducers: {
    bookingRocket: (state, action) => {
      state.rockets = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload.id) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
    },
    unbookingRocket: (state, action) => {
      state.rockets = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload.id) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRockets.fulfilled, (state, action) => {
        state.loading = false;
        state.rockets = action.payload;
        state.error = null;
      })
      .addCase(getRockets.rejected, (state, action) => {
        state.loading = false;
        state.rockets = [];
        state.error = action.error.message;
      });
  },
});

export default RocketSlice.reducer;
export const { bookingRocket, unbookingRocket } = RocketSlice.actions;
