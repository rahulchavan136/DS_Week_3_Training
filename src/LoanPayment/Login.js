import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from '../logo.png';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (formData.username.trim() !== "" && formData.password.trim() !== "") {
      onLogin(formData);
      navigate("/dashboard"); // Redirect to dashboard on successful login
    } else {
      setError("Please enter username and password.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    setError(""); // Clear error message on change
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <div className="bg-light p-4 rounded">
            <div className="text-center">
              <img
                src={logo}
                alt="SCB Logo"
                style={{ height: "120px", width: "200px" }}
              />
              <h2 className="mt-4 mb-4 fw-bolder">User Login</h2>
            </div>
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="username">
                <Form.Label className="fw-bold">Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="password" className="mt-3">
                <Form.Label className="fw-bold">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {error && <p className="text-danger">{error}</p>}

              <div className="d-flex justify-content-between align-items-center mt-3">
                <div>
                  <p className="text-decoration-underline fw-bold m-0 text-primary">
                    Register User
                  </p>
                </div>
                <Button
                  variant="success"
                  type="submit"
                  className="fw-bold"
                  style={{ width: "100px" }}
                >
                  Login
                </Button>
              </div>
              <br />
              <p className="text-decoration-underline fw-bold m-0 text-primary">
                Forget Username/Password?
              </p>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
