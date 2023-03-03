import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import 'glightbox'

import { AnimationOnScroll } from 'react-animation-on-scroll'

import './YouTubeDemo.css'

const YouTubeDemo = (props) => (
  <section id="trebuchet" className="d-flex align-items-center">
    <Container className="position-relative text-center text-lg-start">
      <Row>
        <Col lg={9} className="align-self-center">
          <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true">
            <div className="section-title">
              <h2>Project Demo</h2>
            </div>
            <h1>
              A <span>supersonic trebuchet</span>{' '}
            </h1>
            <h3> you can build in your basement.</h3>
            <br></br>
            {/* <h2>As seen on YouTube </h2> */}
          </AnimationOnScroll>
        </Col>

        {/* <Col className="col-lg-4 d-flex align-items-center justify-content-center position-relative"> */}
        <Col
          lg={1}
          className="d-flex align-items-center justify-content-center position-relative"
        >
          <AnimationOnScroll
            animateIn="animate__bounceIn"
            delay="100"
            animateOnce="true"
          >
            <a
              href="https://www.youtube.com/watch?v=gdXOS-B0Bus"
              className="glightbox play-btn"
            ></a>
          </AnimationOnScroll>
        </Col>
        {/* <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200"> */}
        {/* <a href="https://www.youtube.com/watch?v=u6BOC7CDUTQ" className="glightbox play-btn"></a> */}
        {/* </div> */}

        {/* </div> */}
        {/* </div> */}
      </Row>
      <Row>
        <Col lg={8} className="align-self-center position-fixed">
          <div style={{ 'padding-bottom': 50 }}>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
)

export default YouTubeDemo
