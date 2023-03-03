import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import { StaticImage } from 'gatsby-plugin-image'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import { CheckCircle } from 'react-bootstrap-icons'

import './DiscoveryServices.css'

const DiscoveryServices = (props) => (
  // className="d-flex align-items-center"
  <section id="discovery" className="discovery d-flex align-items-center">
    {/* <div className="container" data-aos="fade-up"> */}
    <Container>
      <Row className="justify-content-center form-group">
        <Col lg={6} className="align-self-center">
          {/* <Animation type="fadeUp" delay={800}> */}
          <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true">
            <div className="section-title">
              <h2>Why Us? Accessible tools</h2>
            </div>
            <div className="discovery-header1">
              <h1>No supercomputer?</h1>
              <h1>
                <span>No problem.</span>
              </h1>

              <h2>
                We use machine learning to adapt workflows to your hardware.
              </h2>
              <br></br>
              {/* <p>
            Some scientific problems - such as climate change - have deadlines associated with them. 
          </p> */}
              <p>
                We worked with researchers at the Frontier Development
                Laboratory to model the relationship between Carbon
                Sequestration and Seismic Activity.
              </p>

              <p>
                Their old simulation took 22 hours to run on a supercomputer.
              </p>
              <p>Our model needed just 2 minutes - on a tablet.</p>
            </div>
          </AnimationOnScroll>
        </Col>
        <Col lg={6} className="justify-content-center order-1 order-lg-2">
          <AnimationOnScroll
            animateIn="animate__zoomIn"
            animateOnce="true"
            delay="400"
          >
            <StaticImage
              src="../assets/img/About/natural-gas-pexels-cropped.jpg"
              className="discovery-img"
              alt=""
            />
          </AnimationOnScroll>
        </Col>
      </Row>

      {/* </div> */}
    </Container>
  </section>
)

export default DiscoveryServices
