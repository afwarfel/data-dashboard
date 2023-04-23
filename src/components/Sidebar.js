import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Dashboard from './Dashboard.js';

const Sidebar = () => {
    return (
        <Container fluid>
          <Row>
            <Col md={3} className="bg-dark text-white">
              {/* Sidebar content goes here */}
              <h3>Sidebar</h3>
              {/* Use React Bootstrap buttons for sidebar items */}
              <div className="d-flex flex-column">
                <Button variant="dark" className="mb-2">Item 1</Button>
                <Button variant="dark" className="mb-2">Item 2</Button>
                <Button variant="dark" className="mb-2">Item 3</Button>
              </div>
            </Col>
            <Col md={9} className="bg-light">
              <Dashboard />
            </Col>
          </Row>
        </Container>
      );
};


export default Sidebar;
