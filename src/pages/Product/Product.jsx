import { Divider } from '@mui/material'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../Home/components/Footer'
import FilterByPrice from './components/FilterByPrice'
import Main from './components/Main'
import MenuList from './components/MenuList'
import './product.style.css'
import { useState } from 'react';
import CardComponent from './components/CardComponent'
import { dataSample } from './data'
import { useEffect } from 'react'
function Product() {
  const [show, setShow] = useState(false);
  const [oatList, setOatList] = useState([]);
  const [ampouleList, setAmpouleList] = useState([]);
  const [relatedList, setRelatedList] = useState([]);
  useEffect(() => {
    setOatList(dataSample.filter(pro => pro.category === 'Oat Collection'));
  }, [])
  useEffect(() => {
    setAmpouleList(dataSample.filter(pro => pro.category === 'Ampoule Collection'));
  }, [dataSample])
  useEffect(() => {
    setRelatedList(dataSample.filter(pro => pro.category === 'Ampoule Collection'));
  }, [dataSample])
  const handleCloseModal = () => {
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
              {oatList.map((dataItem, index) => {
                return <Col sm={3} key={index} className="mt-4">
                  <CardComponent
                    dataItem={dataItem}
                  />
                </Col>
              })}
            </Row>
          </Container>
        </Row>
        <Row className="mb-4 mt-5">
          <h3 className="black-color">MORE DEEP AMPOULE COLLECTION</h3>
          <Container>
            <Row>
              {ampouleList.map((dataItem, index) => {
                return <Col sm={3} key={index} className="mt-4">
                  <CardComponent
                    dataItem={dataItem}
                  />
                </Col>
              })}
            </Row>
          </Container>
        </Row>
      </Container>
      <Container fluid className="related-product p-3 mt-5">
        <Container>
          <Row className="mb-4">
            <h3 className="black-color">You may also like</h3>
            <Container>
              <Row>
                {relatedList.map((dataItem, index) => {
                  return <Col sm={3} key={index} className="mt-4">
                    <CardComponent
                      dataItem={dataItem}
                    />
                  </Col>
                })}
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