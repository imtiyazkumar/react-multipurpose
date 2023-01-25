import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { Row, Form, Col, InputGroup } from 'react-bootstrap';
import { auth, registerWithEmailAndPassword, signInWithGoogle } from "../firebase";
// import "../Register.css";
function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useNavigate();
    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
    };
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) return;
        if (user) navigate("/dashboard");
    }, [user, loading]);
    return (

        <div className="Auth-form-container">
            <div className="Auth-form">
                <h3 className="Auth-form-title">Sign Up</h3>
                <div as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <InputGroup className="box gap-3" >
                        <Col sm="3"><InputGroup.Text column sm="3">Name</InputGroup.Text></Col>
                        <Col sm="8">
                            <Form.Control placeholder="Name"
                                aria-label="Name" aria-describedby="basic-addon1" type="Email"
                                value={name} onChange={(e) => setName(e.target.value)} />
                        </Col>
                    </InputGroup>
                </div>

                <div as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <InputGroup className="box gap-3" >
                        <Col sm="3"><InputGroup.Text column sm="3">Email</InputGroup.Text></Col>
                        <Col sm="8">
                            <Form.Control placeholder="Username"
                                aria-label="Username" aria-describedby="basic-addon1"
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Col>
                    </InputGroup>
                </div>

                <div as={Row} className="mb-3">
                    <InputGroup className="box gap-3" >
                        <Col sm="3"><InputGroup.Text column sm="3">Password</InputGroup.Text></Col>
                        <Col sm="8">
                            <Form.Control placeholder="Password"
                                aria-label="Password" aria-describedby="basic-addon1" type="password"
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Col>
                    </InputGroup>
                </div>
                <button className="btn btn-primary" onClick={register}>
                    Register
                </button>
                <h3>OR</h3>
                <button className="register__btn register__google" onClick={signInWithGoogle}>
                    Register with Google
                </button>
                <div>
                    Already have an account?
                    <Link to="/">Login</Link> now.
                </div>
            </div>
        </div>
    );
}
export default Register;