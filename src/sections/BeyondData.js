import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/style.css'

import {Col, Container, Row } from "react-bootstrap";

import { StaticImage } from 'gatsby-plugin-image';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { CheckCircle } from "react-bootstrap-icons";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

import SpecialBullets from '../components/SpecialBullets';


function Service1() {
  const descriptions = [
    "Differentiable Boundary Conditions.", 
    "Topology Optimization.",
    "Energy Minimization and Component Placement."
  ]
  return (
  <Row className="justify-content-center">
    <Col lg={8} className="details order-2 order-lg-1">
    <h3>Parameter Tuning</h3>
    <p class="fst-italic"> Bring the simulation into the optimization loop: find the optimal parameters for your design. </p>
    <div class="content">
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
)}

function Service2() {
  const descriptions = [
    "Hierarchical Reinforcement Learning.", 
    "Multi-Agent Control.",
    "Guided Policy Search."
  ]
  return (
  <Row className="justify-content-center">
    <Col lg={8} className="details order-2 order-lg-1">
    <h3>Underactuated Control</h3>
    <p class="fst-italic"> Learn optimal policies for controlling behaviour without precision feedback.</p>
    <div class="content">
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
)}

function Service3() {
  const descriptions = [
    "Stress analysis.", 
    "Adversarial attacks.",
    "Isolate bottlenecks."
  ]
  return (
  <Row className="justify-content-center">
    <Col lg={8} className="details order-2 order-lg-1">
    <h3>Stress Testing</h3>
    <p class="fst-italic"> Measure reliability under worst-case scenarios </p>
    <div class="content">
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
)}


const BeyondData = props => (
  <section id="beyonddata" class="datadriven">
  <Container>
    <Row className="justify-content-center form-group">
    <div class="section-title">
      <h2>Why Us? Hackable workflows</h2>
      <p> Optimize literally everything.</p>
    </div>
    <p> We expose primitives in your design and simulation tools to be compatible with modern solvers. </p>
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