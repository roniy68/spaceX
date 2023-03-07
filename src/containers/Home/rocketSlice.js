import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rocketList: [],
  reservedRockets: [],
  totalReservedRockets: 0,
};

export const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => ({
      ...state,
      ...state.reservedRockets.push(state[action.payload]),
      ...state.totalReservedRockets + 1,
    }),
    cancelReservation: (state, action) => ({
      ...state,
      ...state.reservedRockets.splice(state.reservedRockets.findIndex(
        (rocket) => rocket.id === action.payload,
      ), 1),
      ...state.totalReservedRockets - 1,
    }),
  },
});

export const { reserveRocket, cancelReservation } = rocketSlice.reducer;

export default rocketSlice.reducer;
