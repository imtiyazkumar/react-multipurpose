import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Row, Form, Col, InputGroup } from 'react-bootstrap';
// import "../Login.css";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) navigate("/dashboard");
    }, [user, loading]);
    return (
        <div className="Auth-form-container">
            <div className="Auth-form">
                <h3 className="Auth-form-title">Sign Up</h3>
                <div as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <InputGroup className="box gap-3" >
                        <Col sm="3"><InputGroup.Text column sm="3">Email</InputGroup.Text></Col>
                        <Col sm="8">
                            <Form.Control placeholder="Username"
                                aria-label="Username" aria-describedby="basic-addon1" type="Email"
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
                <button
                    className="btn btn-primary" onClick={() => logInWithEmailAndPassword(email, password)}>
                    Login
                </button>
                <h3>OR</h3>
                <button className="login__btn login__google" onClick={signInWithGoogle}>
                    Login with Google
                </button>
                <div>
                    <Link to="/reset">Forgot Password</Link>
                </div>
                <div>
                    Don't have an account? <Link to="/register">Register</Link> now.
                </div>
            </div>
        </div>
    );
}
export default Login;