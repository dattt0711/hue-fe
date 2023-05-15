import React from 'react'
import Footer from '../Home/components/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './styles.css'
import ProductImage from '../../images/product.png';
import Button from 'react-bootstrap/Button';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import EditNoteIcon from '@mui/icons-material/EditNote';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LogoutIcon from '@mui/icons-material/Logout';
function Login() {
    return (
        <div className="login-container">
            <div className="login-cover black-color d-flex align-items-center justify-content-center mb-5">
                <div className="d-flex flex-column" style={{ width: '100%' }}>
                    <h3 className="mb-4 text-center">Enter the site</h3>
                    <Container>
                        <Row>
                            <Col sm={3}></Col>
                            <Col sm={6}>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>E-mail address</Form.Label>
                                    <Form.Control type="text" placeholder="Email address" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <div className="d-grid gap-2">
                                    <Button>Login</Button>
                                </div>
                                <div className="text-center d-flex flex-column">
                                    <a className="link-login mt-3">Forgot your password?</a>
                                    <a className="link-login mt-3">New User Registration</a>
                                </div>
                            </Col>
                            <Col sm={3}></Col>
                        </Row>
                    </Container>

                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Login;