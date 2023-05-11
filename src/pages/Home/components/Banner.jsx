import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

function Banner() {
  return (
    <Container style={{ marginTop: "74px" }}>
      <h1 className="text-center py-4">Uptown Lizz</h1>
      <Row>
        <Col sm={4} className="banner-col">
          <img src="https://plus.unsplash.com/premium_photo-1681406994502-bb673c265877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        </Col>
        <Col sm={4} className="banner-col">
          <img src="https://plus.unsplash.com/premium_photo-1681406994502-bb673c265877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        </Col>
        <Col sm={4} className="banner-col">
          <img src="https://plus.unsplash.com/premium_photo-1681406994502-bb673c265877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;