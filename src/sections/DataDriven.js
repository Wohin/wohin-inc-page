import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/style.css'

import {Col, Container, Row } from "react-bootstrap";

import { StaticImage } from 'gatsby-plugin-image';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { CheckCircle } from "react-bootstrap-icons";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

const Service1 = props => (
  <Row className="justify-content-center">
    <Col lg={8} className="details order-2 order-lg-1">
      <h3>Interpret Latent Patterns</h3>
      <p class="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
      <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
    </Col>
    <Col lg={4} className="text-center order-1 order-lg-2">
      <StaticImage
        src="../assets/img/About/spiral-pattern-unsplash.jpg"
        className="img-fluid"
        alt=""
      /> 
    </Col>
  </Row>
)

const Service2 = props => (
  <Row className="justify-content-center">
    <Col lg={8} className="details order-2 order-lg-1">
      <h3>Detect Anomalies</h3>
      <p class="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
      <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
    </Col>
    <Col lg={4} className="text-center order-1 order-lg-2">
      <StaticImage
        src="../assets/img/About/cell-anomaly-unsplash.jpg"
        className="img-fluid"
        alt=""
      /> 
    </Col>
  </Row>
)

const Service3 = props => (
  <Row className="justify-content-center">
    <Col lg={8} className="details order-2 order-lg-1">
      <h3>Trust your models</h3>
      <p class="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
      <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
    </Col>
    <Col lg={4} className="text-center order-1 order-lg-2">
      <StaticImage
        src="../assets/img/About/pexels-tara-winstead-8386440.jpg"
        className="img-fluid"
        alt=""
      /> 
    </Col>
  </Row>
)


const DataDriven = props => (
  <section id="datadriven" class="datadriven">
    <Container>
      <Row className="justify-content-center form-group">
        <div class="section-title">
          <h2>Automated Insights</h2>
          <p>Powered by Machine Learning</p>
        </div>
        <p>See how our ML Research can help you: </p>
      </Row>

      <Row>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first"> Interpret Latent Patterns </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second"> Detect Anomalies </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third"> Trust your models </Nav.Link>
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

export default DataDriven