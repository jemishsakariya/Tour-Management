import React from "react";
import "./newsletter.css";
import { Col, Container, Row } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";

const NewsLetter = () => {
  return (
    <>
      <section className="newsletter">
        <Container>
          <Row>
            <Col lg="6">
              <div className="newsletter__content">
                <h2>Subscribe Now to get useful traveling information.</h2>

                <div className="newsletter__input">
                  <input type="email" placeholder="Enter Your Email" />
                  <button className="btn newsletter__btn">Subscribe</button>
                </div>

                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque rem voluptatum, asperiores ipsam tempora veritatis
                  officiis.
                </p>
              </div>
            </Col>

            <Col lg="6">
              <div className="newaletter__img">
                <img src={maleTourist} alt="maleTourist" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default NewsLetter;
