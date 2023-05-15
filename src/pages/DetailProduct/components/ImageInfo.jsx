import React, { useState } from 'react';
import ReactImageZoom from 'react-image-zoom';
import '../detailProduct.style.css';
import { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function ImageInfo() {
  const [imgShow, setImgShow] = useState('https://bizweb.dktcdn.net/thumb/grande/100/369/704/products/3-ada177ab-e8ae-46f5-8ee9-19e30da4d7ed.jpg?v=1575349214200')
  return (
    <Container >
      <Row>
        <Col sm={2}>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img onClick={() => setImgShow('https://bizweb.dktcdn.net/thumb/grande/100/369/704/products/3-ada177ab-e8ae-46f5-8ee9-19e30da4d7ed.jpg?v=1575349214200')} style={{ width: '80px', height: '70px', border: '1px solid gray' }} src='https://bizweb.dktcdn.net/thumb/grande/100/369/704/products/3-ada177ab-e8ae-46f5-8ee9-19e30da4d7ed.jpg?v=1575349214200' alt='#' />
            <img onClick={() => setImgShow('https://bizweb.dktcdn.net/thumb/grande/100/369/704/products/2-ee8af1ef-b0c8-417b-a501-62f0f218ae6b.jpg?v=1575349159530')} style={{ width: '80px', height: '70px', border: '1px solid gray', margin: '0 20px' }} src='https://bizweb.dktcdn.net/thumb/grande/100/369/704/products/2-ee8af1ef-b0c8-417b-a501-62f0f218ae6b.jpg?v=1575349159530' alt='#' />
            <img onClick={() => setImgShow('https://bizweb.dktcdn.net/thumb/grande/100/369/704/products/28.jpg?v=1572418508650')} style={{ width: '80px', height: '70px', border: '1px solid gray' }} src='https://bizweb.dktcdn.net/thumb/grande/100/369/704/products/28.jpg?v=1572418508650' alt='#' />
          </div>
        </Col>
        <Col sm={8}>
          <img style={{ width: '100%' }} src={imgShow} alt='#' />
        </Col>
      </Row>
    </Container>
  )
}

export default ImageInfo