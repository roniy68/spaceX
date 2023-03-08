import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './Missions/missionSlice';
import rocketReducer from './Home/rocketSlice';

export const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    mission: missionReducer,
  },
});

export default store;
