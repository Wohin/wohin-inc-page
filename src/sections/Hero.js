import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import { AnimationOnScroll } from 'react-animation-on-scroll'

import './Hero.css'

const Hero = (props) => (
  <section id="hero" className="d-flex align-items-center">
    <Container className="position-relative text-center text-lg-start">
      <div className="section-title">
        <h2>W O H I N ?</h2>
      </div>
      <Row>
        <Col lg={8} className="align-self-center">
          <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true">
            <h1 className="fw-bold display-1 lh-1 text-uppercase">
              Removing
              <br />
              Barriers to
              <br />
              Engineering
            </h1>
          </AnimationOnScroll>
          <br></br>

          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            animateOnce="true"
            delay="100"
          >
            <h2>We are consultants who empower</h2>
            <h2>
              {' '}
              <span>curiosity-driven</span> research
            </h2>
            <div className="btns">
              <a href="#about" className="btn-menu animated fadeInUp scrollto">
                What would you explore?
              </a>
            </div>
          </AnimationOnScroll>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Hero
