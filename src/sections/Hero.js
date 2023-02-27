import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/style.css'

import {Col, Container, Row } from "react-bootstrap";

import 'glightbox'

import { AnimationOnScroll } from 'react-animation-on-scroll';
import { StaticImage } from 'gatsby-plugin-image';

const Hero = props => (
  <section id="hero" class="d-flex align-items-center">
  <Container className="position-relative text-center text-lg-start">
  {/* <div class="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100"> */}
  {/* <div class="row"> */}
  <Row>
    {/* <div class="col-lg-8"> */}
    {/* <Col className="col-lg-8"> */}
    
    {/* <Col lg={4}>
      
    <AnimationOnScroll animateIn="animate__zoomIn" delay="100" animateOnce="true">
      <StaticImage
        src="../assets/img/Hero/wohin-icon-1200x1200.png"
        className="about-img"
        alt=""
      /> 
    </AnimationOnScroll>
    </Col> */}

    <Col lg={8} className="align-self-center">
    {/* <Animation type="fadeUp" delay={800}> */}
    <AnimationOnScroll animateIn="animate__fadeInLeft" delay="200" animateOnce="true">
      <h1>Design.</h1>
    </AnimationOnScroll>
    <AnimationOnScroll animateIn="animate__fadeInLeft" delay="400" animateOnce="true">
      <h1>Simulate.</h1>
    </AnimationOnScroll>
    <AnimationOnScroll animateIn="animate__fadeInLeft" delay="600" animateOnce="true">
      <h1><span>Optimize.</span></h1>
    </AnimationOnScroll>
    <AnimationOnScroll animateIn="animate__fadeInUp" delay="800" animateOnce="true">
      <h2>We're on a mission to accelerate science</h2>
      <div class="btns">
        <a href="#about" class="btn-menu animated fadeInUp scrollto">Learn more</a>
        {/* <a href="#book-a-table" class="btn-book animated fadeInUp scrollto">Book a Table</a> */}
      </div>
    </AnimationOnScroll>
      
    {/* </div> */}
    {/* </Animation> */}
    
    </Col>
    
    {/* <Col className="col-lg-4 d-flex align-items-center justify-content-center position-relative"> */}
    {/* <Col lg={2} className="d-flex align-items-center justify-content-center position-relative">
    <AnimationOnScroll animateIn="animate__bounceIn" delay="100" animateOnce="true">
      <a href="https://www.youtube.com/watch?v=u6BOC7CDUTQ" class="glightbox play-btn"></a>
    </AnimationOnScroll>
    </Col> */}
    {/* <div class="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200"> */}
    {/* <a href="https://www.youtube.com/watch?v=u6BOC7CDUTQ" class="glightbox play-btn"></a> */}
    {/* </div> */}

  {/* </div> */}
  {/* </div> */}
  </Row>
  </Container>
  </section>
)

export default Hero


