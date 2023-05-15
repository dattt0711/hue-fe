import { Divider } from '@mui/material'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../Home/components/Footer'
import FilterByPrice from './components/FilterByPrice'
import Main from './components/Main'
import MenuList from './components/MenuList'
import './product.style.css'
import { useState } from 'react';
import Card from './components/Card'
function Product() {
  const [show, setShow] = useState(false);
  const handleCloseModal = () => {
    console.log()
    setShow(false);
  }
  const handleSubmit = () => {
    setShow(false);
  }
  const handleOpenModal = () => {
    setShow(true);
  }
  return (
    <div className='product primary-background'>
      <Container>
        <Row className="mb-4">
          <h3 className="black-color">OAT COLLECTION</h3>
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
        <Row className="mb-4">
          <h3 className="black-color">OAT COLLECTION</h3>
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
        <Row className="mb-4">
          <h3 className="black-color">OAT COLLECTION</h3>
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
      <Container fluid className="related-product p-3">
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
      <Footer />
    </div>
  )
}

export default Product