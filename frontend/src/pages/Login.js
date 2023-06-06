import React, { useState } from "react";
import "../styles/login.css";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";
import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const handleChange = (e) => {
    let { id, value } = e.target;
    setCredentials((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="loginimg" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="usericonimg" />
                </div>
                <h2>Login</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      required
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                      required
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                  >
                    Login
                  </Button>
                </Form>
                <p>
                  Don't have an account? <Link to={"/register"}>Create</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
