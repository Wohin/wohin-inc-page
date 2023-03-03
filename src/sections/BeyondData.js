import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import { StaticImage } from 'gatsby-plugin-image'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'

import SpecialBullets from '../components/SpecialBullets'

import './DataDriven.css'

function Service1() {
  const descriptions = [
    'Differentiable Boundary Conditions.',
    'Topology Optimization.',
    'Energy Minimization and Component Placement.',
  ]
  return (
    <Row className="justify-content-center">
      <Col lg={8} className="details order-2 order-lg-1">
        <h3>Parameter Tuning</h3>
        <p className="fst-italic">
          {' '}
          Bring your favourite simulation tools into the optimization loop. Find
          the best parameters to use in your designs.{' '}
        </p>
        <div className="content">
          <SpecialBullets descriptions={descriptions} />
        </div>
      </Col>
      <Col lg={4} className="text-center order-1 order-lg-2">
        <StaticImage
          src="../assets/img/About/plasma-pexels.jpg"
          className="img-fluid"
          alt=""
        />
      </Col>
    </Row>
  )
}

function Service2() {
  const descriptions = [
    'Hierarchical Reinforcement Learning.',
    'Multi-Agent Control.',
    'Guided Policy Search.',
  ]
  return (
    <Row className="justify-content-center">
      <Col lg={8} className="details order-2 order-lg-1">
        <h3>Underactuated Control</h3>
        <p className="fst-italic">
          {' '}
          Need to dynamically control behaviour with weak actuators? Learn
          optimal policies to generate actions from inputs.
        </p>
        <div className="content">
          <SpecialBullets descriptions={descriptions} />
        </div>
      </Col>
      <Col lg={4} className="text-center order-1 order-lg-2">
        <StaticImage
          src="../assets/img/About/cat-crop-unsplash.jpg"
          className="img-fluid"
          alt=""
        />
      </Col>
    </Row>
  )
}

function Service3() {
  const descriptions = [
    'Stress analysis.',
    'Bottleneck isolation.',
    'Adversarial perturbation.',
  ]
  return (
    <Row className="justify-content-center">
      <Col lg={8} className="details order-2 order-lg-1">
        <h3>Stress Testing</h3>
        <p className="fst-italic">
          {' '}
          Want to measure the reliability of your designs? Let us search for
          scenarios that trigger component failure.{' '}
        </p>
        <div className="content">
          <SpecialBullets descriptions={descriptions} />
        </div>
      </Col>
      <Col lg={4} className="text-center order-1 order-lg-2">
        <StaticImage
          src="../assets/img/About/stress-analysis.png"
          className="img-fluid"
          alt=""
        />
      </Col>
    </Row>
  )
}

const BeyondData = (props) => (
  <section id="beyonddata" className="datadriven">
    <Container>
      <Row className="justify-content-center form-group">
        <div className="section-title">
          <h2>Why Us? Hackable workflows</h2>
          <p> If it can be programmed, it can be optimized.</p>
        </div>
        <p>
          {' '}
          From Ant Colony Optimization to the Wolfe Algorithm, we're experts at
          mathematical programming.
        </p>
        <p>
          {' '}
          We can also expose primitives in your design and simulation tools to
          be compatible with modern solvers.
        </p>
        <p> See what the power of optimization can help you unlock. </p>
      </Row>

      <Row>
        <Tab.Container id="left-tabs-optimization" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first"> Parameter Tuning </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second"> Underactuated Control </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third"> Stress Testing </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Service1 />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Service2 />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Service3 />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Row>
    </Container>
  </section>
)

export default BeyondData
