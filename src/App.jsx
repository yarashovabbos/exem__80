import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import StudentsPage from './pages/StudentsPage';
import TeachersPage from './pages/TeachersPage';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Routes >
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
      <Route path="/students" element={<PrivateRoute><StudentsPage /></PrivateRoute>} />
      <Route path="/teachers" element={<PrivateRoute><TeachersPage /></PrivateRoute>} />
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
