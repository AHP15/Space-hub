/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const res = await fetch(process.env.REACT_APP_MISSIONS, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data.map((mission) => ({ ...mission, joined: false }));
});

const MessionSlice = createSlice({
  name: 'mession',
  initialState: {
    loading: false,
    error: null,
    messions: [],
  },
  reducers: {
    joinMission: (state, action) => {
      const id = action.payload;
      state.messions = state.messions.map((mission) => {
        if (mission.mission_id === id) {
          return { ...mission, joined: true };
        }
        return mission;
      });
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.loading = false;
        state.messions = action.payload;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { joinMission } = MessionSlice.actions;

export default MessionSlice.reducer;
