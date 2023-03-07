import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  reservedRockets: [],
  totalReservedRockets: 0,
};

export const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => ({
      ...state,
      reserveRocket: [...state.reservedRockets, action.payload],
      totalReservedRockets: state.totalReservedRockets + 1,
    }),
    cancelReservation: (state, action) => ({
      ...state,
      ...state.reservedRockets.splice(state.reservedRockets.findIndex(
        (rocket) => rocket.id === action.payload,
      ), 1),
      totalReservedRockets: state.totalReservedRockets - 1,
    }),
  },
});

export const { reserveRocket, cancelReservation } = rocketSlice.reducer;

export default rocketSlice.reducer;
