import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/style.css'

import {Col, Container, Row } from "react-bootstrap";

import 'glightbox'

import { AnimationOnScroll } from 'react-animation-on-scroll';

const Hero = props => (
  <section id="hero" class="d-flex align-items-center">
  <Container className="position-relative text-center text-lg-start">
  {/* <div class="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100"> */}
  {/* <div class="row"> */}
  <Row>
    {/* <div class="col-lg-8"> */}
    {/* <Col className="col-lg-8"> */}
    
    <Col lg={8}>
    {/* <Animation type="fadeUp" delay={800}> */}
    <AnimationOnScroll animateIn="animate__zoomIn" delay="100" animateOnce="true">
      <h1>Welcome to <span>Restaurantly</span></h1>
      <h2>Delivering great food for more than 18 years!</h2>
    </AnimationOnScroll>

    <AnimationOnScroll animateIn="animate__fadeInUp" delay="100" animateOnce="true">
      <div class="btns">
        <a href="#menu" class="btn-menu animated fadeInUp scrollto">Our Menu</a>
        <a href="#book-a-table" class="btn-book animated fadeInUp scrollto">Book a Table</a>
      </div>
    </AnimationOnScroll>
      
    {/* </div> */}
    {/* </Animation> */}
    
    </Col>
    
    {/* <Col className="col-lg-4 d-flex align-items-center justify-content-center position-relative"> */}
    <Col lg={4} className="d-flex align-items-center justify-content-center position-relative">
    <AnimationOnScroll animateIn="animate__bounceIn" delay="100" animateOnce="true">
      <a href="https://www.youtube.com/watch?v=u6BOC7CDUTQ" class="glightbox play-btn"></a>
    </AnimationOnScroll>
    </Col>
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


