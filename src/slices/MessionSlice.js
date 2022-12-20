import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const res = await fetch(process.env.REACT_APP_MISSIONS, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
});

const MessionSlice = createSlice({
  name: 'mession',
  initialState: {
    loading: false,
    error: null,
    messions: [],
  },
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMissions.pending, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.loading = true;
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.loading = false;
        // eslint-disable-next-line no-param-reassign
        state.messions = [...state.messions, ...action.payload];
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.loading = false;
        // eslint-disable-next-line no-param-reassign
        state.error = action.error.message;
      });
  },
});
export default MessionSlice.reducer;
