import Home from '../../Pages/Home';
import Login from '../../Pages/Login';
import NotFound from '../../Pages/NotFound';
import Register from '../../Pages/Register';
import Dashboard from '../../Pages/Dashboard';
import Reset from '../../Pages/Reset';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';


function Header() {
    return (
        <Router>
            <div>
                <div>
                    <Navbar bg="light" expand="lg" >
                        <Container>
                            <Navbar.Brand href="#home">React-News App</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                                    <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
                                    <Nav.Link as={Link} to={"/dashboard"}>Dashboard</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/reset" element={<Reset />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router >
    );
}

export default Header;
