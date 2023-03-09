import { createSlice } from '@reduxjs/toolkit';
import fetchMissions from './missionAPI';

const initialState = {
  missions: [],
  status: 0,
  joinedMissions: [],
  totalJoinedMissions: 0,
};

export const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      // console.log(action.payload);
      const newState = [...state.missions];
      const updatedMissions = newState.map((mission) => {
        if (mission.id !== action.payload) {
          return mission;
        }
        return { ...mission, joined: !mission.joined };
      });

      return {
        ...state,
        missions: [...updatedMissions],
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchMissions.pending, (state) => ({
      ...state,
      status: 'loading...',
    }))
      .addCase(fetchMissions.fulfilled, (state, action) => {
        const data = action.payload;
        return {
          ...state,
          missions: data.map((mission) => ({
            id: mission.mission_id,
            mission_name: mission.mission_name,
            description: mission.description,
            joined: false,
          })),
          status: 'loaded',
        };
      }).addCase(fetchMissions.rejected, (state) => ({
        ...state,
        status: 'succeeded',
      }));
  },
});

export const { joinMission } = missionSlice.actions;

export default missionSlice.reducer;
