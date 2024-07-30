import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Sidebar = () => {
  return (
    <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky"></div>
      <Nav.Item>
        <LinkContainer to="/students">
          <Nav.Link>Students</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/teachers">
          <Nav.Link>Teachers</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Nav>
  );
};

export default Sidebar;
