import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchStudents = createAsyncThunk('students/fetchStudents', async () => {
  const response = await axios.get('http://localhost:3000/students');
  return response.data;
});

const studentSlice = createSlice({
  name: 'students',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStudents.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default studentSlice.reducer;
