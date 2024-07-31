import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTeachers = createAsyncThunk('teachers/fetchTeachers', async () => {
  const response = await axios.get('http://localhost:3000/teachers');
  return response.data;
});

const teacherSlice = createSlice({
  name: 'teachers',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTeachers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default teacherSlice.reducer;
