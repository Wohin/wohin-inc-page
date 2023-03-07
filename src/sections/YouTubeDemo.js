import React, { useState } from 'react'

import { Col, Container, Row, Button } from 'react-bootstrap'

import FsLightbox from 'fslightbox-react'

import { AnimationOnScroll } from 'react-animation-on-scroll'

import './YouTubeDemo.css'

function YouTubeDemo(props) {
  const [toggler, setToggler] = useState(false)
  return (
    <section id="trebuchet" className="d-flex align-items-center">
      <Container className="position-relative text-center text-lg-start">
        <FsLightbox
          toggler={toggler}
          sources={['https://www.youtube.com/watch?v=gdXOS-B0Bus']}
        />
        <Row>
          <Col lg={9} className="align-self-center">
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              animateOnce="true"
            >
              <div className="section-title">
                <h2>Project Demo</h2>
              </div>
              <h1>
                A <span>supersonic trebuchet</span>{' '}
              </h1>
              <h3> you can build in your basement.</h3>
              <br></br>
            </AnimationOnScroll>
          </Col>
          <Col
            lg={1}
            className="d-flex align-items-center justify-content-center position-relative"
          >
            <AnimationOnScroll
              animateIn="animate__bounceIn"
              delay="100"
              animateOnce="true"
            >
              <Button
                onClick={() => setToggler(!toggler)}
                className="play-btn"
              />
            </AnimationOnScroll>
          </Col>
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
}

export default YouTubeDemo
