import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import { StaticImage } from 'gatsby-plugin-image'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import { CheckCircle } from 'react-bootstrap-icons'

const CascadedLists = (props) => (
  // class="d-flex align-items-center"
  <section id="discovery" class="discovery d-flex align-items-center">
    {/* <div class="container" data-aos="fade-up"> */}
    <Container>
      <Row className="justify-content-center form-group">
        <Col lg={8}>
          <div class="discovery-header">
            <AnimationOnScroll animateIn="animate__zoomIn" animateOnce="true">
              <h1>
                {' '}
                Accelerate your research with{' '}
                <span> Artificial Intelligence</span>
              </h1>
              {/* <br></br>
            <p>
              Use Machine Learning to extract insights from your data.
            </p> */}
              <br></br>
            </AnimationOnScroll>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center form-group">
        <Col lg={4} className="pt-4 pt-lg-0 order-1 order-lg-1 content">
          <div class="section-title">
            <h2>Discover</h2>
            <p>Find Latent Patterns</p>
          </div>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum
          </p>
        </Col>
        <Col lg={4} className="justify-content-center order-1 order-lg-2">
          <AnimationOnScroll
            animateIn="animate__zoomIn"
            animateOnce="true"
            delay="400"
          >
            <StaticImage
              src="../assets/img/About/gol.gif"
              className="discovery-img"
              alt=""
            />
          </AnimationOnScroll>
        </Col>
      </Row>

      {/* ITEM 2 */}
      <Row className="justify-content-center form-group">
        <Col lg={4} className="justify-content-center order-1 order-lg-2">
          <AnimationOnScroll
            animateIn="animate__zoomIn"
            animateOnce="true"
            delay="400"
          >
            <StaticImage
              src="../assets/img/About/gol.gif"
              className="discovery-img"
              alt=""
            />
          </AnimationOnScroll>
        </Col>
        <Col lg={4} classname="pt-4 pt-lg-0 order-2 order-lg-1 content">
          <div class="section-title">
            <h2>Discover</h2>
            <p>Model Stochastic Behaviour</p>
          </div>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center form-group">
        <Col lg={4} classname="pt-4 pt-lg-0 order-1 order-lg-1 content">
          <div class="section-title">
            <h2>Discover</h2>
            <p> Identify Outliers</p>
          </div>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum
          </p>
        </Col>
        <Col lg={4} className="justify-content-center">
          <AnimationOnScroll
            animateIn="animate__zoomIn"
            animateOnce="true"
            delay="400"
          >
            <StaticImage
              src="../assets/img/About/gol.gif"
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

export default CascadedLists
