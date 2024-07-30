import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/Auth/Login';
import Dashboard from './components/Layout/Dashboard';
import Students from './components/Students/ Students';

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className='color'>
    <Routes>
      <Route path="/" element={<Login />} />
      {isAuthenticated && (
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="students" element={<Students />} />
        </Route>
      )}
    </Routes>
    </div>
  );
};

export default App;
