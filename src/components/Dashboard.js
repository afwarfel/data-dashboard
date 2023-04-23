import { Container, Row, Col, Card } from "react-bootstrap";

const Dashboard = () => {
  return (
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <h3>Macro Data</h3>
                <p>Dashboard content goes here</p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <h3>Financial Data Dashboard</h3>
                <p>Dashboard content goes here</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <h3>Financial Data Dashboard</h3>
                        <p>Dashboard content goes here</p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
      </Container>
  );
};

export default Dashboard;
