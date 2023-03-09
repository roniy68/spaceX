import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://api.spacexdata.com/v3/missions';

const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
});

export default fetchMissions;
