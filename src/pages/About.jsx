import React from "react";
import { Container, Row, Col } from "reactstrap";
import Img_restaurant from "../assets/images/restaurant.png";

const About = () => {
  return (
    <section
      style={{
        marginTop: "80px",
      }}
    >
      <Container>
        <Row>
          <Col lg="6" sm="12">
            <h1>About Us...</h1>
            <p className="mt-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </Col>
          <Col lg="6" sm="12" style={{border: "1px solid white"}}>
            <img src={Img_restaurant} alt="Restaurant" className="about_restaurant"  />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
