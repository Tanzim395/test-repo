import React from 'react';
import './Login.css'
import { Button, Col, Row } from 'react-bootstrap';
import loginImg from '../../images/login.png'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <Row xs={12} md={12} className='g-4 m-0 p-5 d-flex justify-content-center align-items-center'>
                <Col>
                <div className='my-5 mx-auto w-75'>
                <form>
                    <h3 className='text-center custom-text-primary fw-bold my-3'>Please Sign In</h3>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='underline'></div>
                        <div className='underline-small'></div>
                        <div className='underline'></div>
                    </div>
                    <div className="mb-3 my-5">
                        <label htmlFor="exampleInputEmail1" className="form-label"><i className="fas fa-envelope-square custom-text-warning me-2"></i>E-mail</label>
                        <input type="email" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label"><i className="fas fa-key custom-text-warning me-2"></i>Password</label>
                        <input  type="password" className="form-control" />
                    </div>

                    <div>
                        <p  className='custom-cursor-style text-primary'> Forgot Password ? </p>
                       <Button className = 'mt-2 px-4  py-2'>Login</Button>
                        <Button className='ms-3 mt-2 custom-button'><i className="fab fa-google text-white fs-6 px-4 py-1 "></i></Button>
                        <p className=' mt-4'>Don't have an account?<Link to='/register'> Sign Up</Link></p>
                        {/* <p className='text-danger fw-bold mt-4'>{error}</p> */}
                    </div>

                </form>
            </div>
                </Col>
                <Col >
                    <img src={loginImg} alt="" className='img-fluid' />
                </Col>
            </Row>
        </div>
    );
};

export default Login;