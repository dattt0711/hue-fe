import React from 'react';
import './detailProduct.style.css';
import { Container } from 'react-bootstrap';
import DetailInfo from './components/DetailInfo';
import ImageInfo from './components/ImageInfo';
import ProductInCategory from './components/ProductInCategory';
import Description from './components/Description';
import CarouselProduct from '../Home/components/CarouselProduct';
import Footer from '../Home/components/Footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Review from './components/Review';
import Card from '../Product/components/Card'
function DetailProduct() {
  return (
    <div className='detail-product'>
      <Container >
        <Row>
          <Col sm={6}>
            <ImageInfo />
          </Col>
          <Col sm={6}>
            <DetailInfo />
          </Col>
        </Row>
        <div className="mt-5">
          <h3 className="black-color">REVIEWS</h3>
          <Review />
        </div>
        <Container fluid className="related-product p-3 mt-5">
          <Container>
            <Row className="mb-4">
              <h3 className="black-color">You may also like</h3>
              <Container>
                <Row>
                  <Col sm={3}>
                    <Card />
                  </Col>
                  <Col sm={3}>
                    <Card />
                  </Col>
                  <Col sm={3}>
                    <Card />
                  </Col>
                  <Col sm={3}>
                    <Card />
                  </Col>
                </Row>
              </Container>
            </Row>
          </Container>
        </Container>
      </Container>
      <Footer />
    </div>
  )
}

export default DetailProduct