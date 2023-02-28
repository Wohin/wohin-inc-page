import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/style.css'

import {Col, Container, Row } from "react-bootstrap";

import { StaticImage } from 'gatsby-plugin-image';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { CheckCircle } from "react-bootstrap-icons";


const About = props => (
  <section id="about" class="about d-flex align-items-center">
    <Container>
      <Row className="justify-content-center  form-group">
        <Col lg={8}>
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
            <h1> What would <i>you</i> <span>explore?</span></h1>
            <p>
            Science policy and infrastructure do not always incentivize the research that most benefits society.  Part of the problem is that scientific expertise and apparatuses require significant investment.
            </p>
            <br></br>
            <p>
            We want more people to be scientists and engineers.  We want research to be more democratic.  We want society as a whole to explore more questions.
            </p>
            <br></br>
            <p>Our mission is to empower you in three ways:</p>
          </AnimationOnScroll>
        </Col>
      </Row>
    <Row className="justify-content-center form-group">
      <Col lg={4}>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true" delay="200">
          <div class="box">
            <span>Make Insights More Automated</span>
          </div>
        </AnimationOnScroll>
      </Col>
      <Col lg={4}>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true" delay="400">
          <div class="box">
            <span>Make Tools More Accessible</span>
          </div>
        </AnimationOnScroll>
      </Col>
      <Col lg={4}>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true" delay="600">
        <div class="box">
          <span>Make Workflows More Hackable</span>
        </div>
        </AnimationOnScroll>
      </Col>
      
    </Row>
    </Container>
  </section>
)

export default About