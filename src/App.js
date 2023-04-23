import "./App.css";
import Sidebar from "./components/Sidebar.js";

import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
