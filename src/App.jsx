import React from 'react';
import { BrowserRouter as Router, Route } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import StudentList from './components/Students/StudentList';
import Login from './components/Login/Login';

const App = () => {
  return (
    <Router>
      <Header />
      <Container fluid>
        <Sidebar />
        <main>
          <Route path="/login" component={Login} />
          <Route path="/students" component={StudentList} />
        </main>
      </Container>
    </Router>
  );
};

export default App;
