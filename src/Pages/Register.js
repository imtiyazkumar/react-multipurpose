import { Row, Form, Col } from 'react-bootstrap';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Register() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleOnChange1 = (event) => {
        console.log(name)
        setName(event.target.value)
    }
    const handleOnChange2 = (event) => {
        console.log(email)
        setEmail(event.target.value)
    }
    const handleOnChange3 = (event) => {
        console.log(password)
        setPassword(event.target.value)
    }

    return (
        <div className="Auth-form-container">
            <Form className="Auth-form">
                <h3 className="Auth-form-title">Sign Up</h3>
                <div className="form-group mt-3">
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="3">
                            Name
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control value={name} onChange={handleOnChange1} type="text" placeholder="e,g Usman Khan" />
                        </Col>
                    </Form.Group>
                </div>
                <div className="form-group mt-3">
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="3">
                            Email
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control value={email} onChange={handleOnChange2} type="Email" placeholder="example@gmail.com" />
                        </Col>
                    </Form.Group>
                </div>
                <div className="form-group mt-3">
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="3">
                            Password
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control value={password} onChange={handleOnChange3} type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                </div>
                <div className="text-center">Already registered?{" "}
                    <Link to="/login">Sign In</Link>
                </div>
            </Form>
        </div>
    );
}

export default Register;