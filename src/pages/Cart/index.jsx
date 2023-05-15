import React from 'react'
import Footer from '../Home/components/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './styles.css'
import ProductImage from '../../images/product.png';
import Button from 'react-bootstrap/Button';
function Cart() {
    return (
        <div className="cart">
            <Container>
                <Row>
                    <Col sm={6}>
                        <Container>
                            <h3 className="black-color">Contacts</h3>
                            <Row>
                                <Col sm={6}>
                                    <Form.Group className="mb-3 black-color" controlId="formBasicEmail">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter full name" />
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                </Col>
                                <Col sm={6}>
                                    <Form.Group className="mb-3 black-color" controlId="formBasicEmail">
                                        <Form.Label>E-mail</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                    <Form.Group className="mb-3 black-color" controlId="formBasicEmail">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type="phone" placeholder="Enter phone" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Container>
                        <Container className="mt-3">
                            <h3 className="black-color">Shipping address</h3>
                            <Row>
                                <Col sm={6}>
                                    <Form.Group className="mb-3 black-color" controlId="formBasicEmail">
                                        <Form.Label>Country</Form.Label>
                                        <Form.Control type="text" placeholder="Enter country" />
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                    <Form.Group className="mb-3 black-color" controlId="formBasicEmail">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control type="text" placeholder="Enter city" />
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                    <Form.Group className="mb-3 black-color" controlId="formBasicEmail">
                                        <Form.Label>District</Form.Label>
                                        <Form.Control type="text" placeholder="Enter district" />
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col sm={6}>
                        <div>
                            <h3 className="black-color mb-4">YOUR ORDER</h3>
                            <Container className="order-item pt-3 pb-3">
                                <Row>
                                    <Col sm={3}>
                                        <div className="order-image-product d-flex justify-content-center align-items-center p-3">
                                            <img src={ProductImage} alt="" />
                                        </div>
                                    </Col>
                                    <Col sm={9}>
                                        <h4 className="black-color">Oat Essential Water</h4>
                                        <div className="d-flex justify-content-between black-color">
                                            <span>Price</span>
                                            <span>$49.98</span>
                                        </div>
                                        <p className="black-color">Quantity: 1</p>
                                    </Col>
                                </Row>
                            </Container>
                            <Container className="order-item pt-3 pb-3">
                                <Row>
                                    <Col sm={3}>
                                        <div className="order-image-product d-flex justify-content-center align-items-center p-3">
                                            <img src={ProductImage} alt="" />
                                        </div>
                                    </Col>
                                    <Col sm={9}>
                                        <h4 className="black-color">Oat Essential Water</h4>
                                        <div className="d-flex justify-content-between black-color">
                                            <span>Price</span>
                                            <span>$49.98</span>
                                        </div>
                                        <p className="black-color">Quantity: 1</p>
                                    </Col>
                                </Row>
                            </Container>
                            <Container className="total-price py-2">
                                <Row className="black-color">
                                    <Col sm={6}>
                                        Shipping
                                    </Col>
                                    <Col sm={6} className="text-end">
                                        $5.00
                                    </Col>
                                    <Col sm={6}>
                                        Subtotal
                                    </Col>
                                    <Col sm={6} className="text-end">
                                        $119.96
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row className="black-color">
                                    <Col sm={6} className="fw-bold">
                                        TOTAL
                                    </Col>
                                    <Col sm={6} className="fw-bold text-end">
                                        $124.96
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="d-grid gap-2 mt-4">
                            <Button className="btn-payment" variant="secondary">Complete Payment</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Cart