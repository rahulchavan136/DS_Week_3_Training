import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { PersonCircle } from 'react-bootstrap-icons';
import logo from '../logo.png';

const MyNavbar = ({ isLoggedIn, username, onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate("/");
    };

    return (
        <Navbar expand="lg" bg="light" fixed="top">
            <Container>
                <Navbar.Brand as={NavLink} to="/dashboard">
                    <img
                        src={logo}
                        height="100px"
                        width="200px"
                        className="d-inline-block align-top"
                        alt="SCB React-Training-Week-3 logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" style={{ fontSize: "16px" }}>
                        <NavLink to="/dashboard" className="nav-link">Home</NavLink>
                        <NavLink to="/accounts" className="nav-link">Accounts and Deposits</NavLink>
                        <NavLink to="/cards" className="nav-link">Cards</NavLink>
                        <NavLink to="/invest" className="nav-link">Invest</NavLink>
                        <NavLink to="/loancalculator" className="nav-link">Loan Calculator</NavLink>
                        <NavDropdown title="Loans" id="examples-dropdown" className="mr-2">
                            <NavDropdown.Item as={NavLink} to="/personalloan">Personal Loan</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/homeloan">Home Loan</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/twowheelerloan">Two Wheeler Loan</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        {isLoggedIn ? (
                            <>
                                <strong><Nav.Link disabled>Welcome, {username}</Nav.Link></strong>
                                <Button variant="success" onClick={handleLogout}>Logout</Button>
                            </>
                        ) : (
                            <NavLink to="/" className="nav-link">
                                <PersonCircle size={24} />
                                Login
                            </NavLink>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
