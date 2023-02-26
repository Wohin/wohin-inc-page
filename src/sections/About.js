import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/style.css'

import {Col, Container, Row } from "react-bootstrap";

import { StaticImage } from 'gatsby-plugin-image';
import { AnimationOnScroll } from 'react-animation-on-scroll';



const About = props => (
  <section id="about" class="about">
    {/* <div class="container" data-aos="fade-up"> */}
    <Container>
    <Row>
    {/* <div class="row"> */}
      <Col lg={6} className="order-1 order-lg-2">
      {/* <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100"> */}
      {/* <div class="about-img"> 
        <img src="../assets/img/about.jpg" alt=""/>
      </div> */}
        <AnimationOnScroll animateIn="animate__zoomIn" animateOnce="true">

        <StaticImage
          src="../assets/img/about.jpg"
          className="about-img"
          alt=""
        /> 
        </AnimationOnScroll>

        {/* Note: I also changed the style.css.  I removed the relative position attribute
        in order to prevent weird offsets.   */}
       
      </Col>

      {/* </div> */}
      {/* </div> */}
      <Col lg={6} className="pt-4 pt-lg-0 order-2 order-lg-1 content">
      {/* <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"> */}
      <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
      <p class="fst-italic">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <ul>
        <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
        <li><i class="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
        <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
      </ul>
      <p>
        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum
      </p>
      {/* </div> */}
      </Col>
    {/* </div> */}
    </Row>
    {/* </div> */}
    </Container>
  </section>
)

export default About