import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  joinedMissions: [],
  totalJoinedMissions: 0,
};

export const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => ({
      ...state,
      joinedMissions: [...state.joinedMissions, action.payload],
      totalJoinedMissions: state.totalJoinedMissions + 1,
    }),
    leaveMission: (state, action) => ({
      ...state,
      ...state.joinedMissions.splice(state.joinedMissions.findIndex(
        (mission) => mission.id === action.payload,
      ), 1),
      totalJoinedMissions: state.totalJoinedMissions - 1,
    }),
  },
});

export const { joinMission, leaveMission } = missionSlice.reducer;

export default missionSlice.reducer;
