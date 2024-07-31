import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import studentReducer from '../features/studentSlice';
import teacherReducer from '../features/teacherSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    students: studentReducer,
    teachers: teacherReducer,
  },
});

export default store;
