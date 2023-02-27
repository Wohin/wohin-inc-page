import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/style.css'

import {Col, Container, Row } from "react-bootstrap";

import { StaticImage } from 'gatsby-plugin-image';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { CheckCircle } from "react-bootstrap-icons";


const About = props => (
  // class="d-flex align-items-center"
  <section id="about" class="about d-flex align-items-center">
    {/* <div class="container" data-aos="fade-up"> */}
    <Container>
    <Row className="justify-content-center">
      <Col lg={6}>
        <AnimationOnScroll animateIn="animate__zoomIn" animateOnce="true">
          <h1> <span>Minimize</span> your barriers </h1>
        </AnimationOnScroll>
      </Col>
    </Row>
    <Row>
    {/* <div class="row"> */}
      <Col lg={4} className="justify-content-center">
      {/* <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100"> */}
      {/* <div class="about-img"> 
        <img src="../assets/img/about.jpg" alt=""/>
      </div> */}
        <AnimationOnScroll animateIn="animate__zoomIn" animateOnce="true" delay="400">

        <StaticImage
          // src="../assets/img/about.jpg"
          src="../assets/img/About/gol.gif"
          className="about-img"
          alt=""
        /> 
        </AnimationOnScroll>

        {/* Note: I also changed the style.css.  I removed the relative position attribute
        in order to prevent weird offsets.   */}
       
      </Col>

      <Col lg={4} className="justify-content-center">
      {/* <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100"> */}
      {/* <div class="about-img"> 
        <img src="../assets/img/about.jpg" alt=""/>
      </div> */}
        <AnimationOnScroll animateIn="animate__zoomIn" animateOnce="true" delay="800">

        <StaticImage
          // src="../assets/img/about.jpg"
          src="../assets/img/About/gol.gif"
          className="about-img"
          alt=""
        /> 
        </AnimationOnScroll>

        {/* Note: I also changed the style.css.  I removed the relative position attribute
        in order to prevent weird offsets.   */}
       
      </Col>

      <Col lg={4} className="justify-content-center">
      {/* <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100"> */}
      {/* <div class="about-img"> 
        <img src="../assets/img/about.jpg" alt=""/>
      </div> */}
        <AnimationOnScroll animateIn="animate__zoomIn" animateOnce="true" delay="1200">

        <StaticImage
          // src="../assets/img/about.jpg"
          src="../assets/img/About/gol.gif"
          className="about-img"
          alt=""
        /> 
        </AnimationOnScroll>

        {/* Note: I also changed the style.css.  I removed the relative position attribute
        in order to prevent weird offsets.   */}
       
      </Col>

      {/* </div> */}
      {/* </div> */}
      {/* <Col lg={6} className="pt-4 pt-lg-0 order-2 order-lg-1 content"> */}
      {/* <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"> */}

      {/* <h3>We reduce your workflow to just three steps: </h3> */}
      {/* <h1>Design.  Simulate.  Optimize. </h1> */}
      {/* <br></br>
      <p> We reduce your engineering workflow to just four steps: </p>
      <br></br> */}
      {/* <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li> */}
      {/* <ul>  
        <li><CheckCircle color="#cda45e" /> Design. </li>
        <li><CheckCircle color="#cda45e" /> Simulate. </li>
        <li><CheckCircle color="#cda45e" /> Optimize. </li>
        <li><CheckCircle color="#cda45e" /> Prototype. </li>
      </ul> */}
      {/* <p>
        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum
      </p> */}
      {/* </div> */}
      {/* </Col> */}
    {/* </div> */}
    </Row>
    {/* </div> */}
    </Container>
  </section>
)

export default About