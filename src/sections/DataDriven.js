import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import { StaticImage } from 'gatsby-plugin-image'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import { CheckCircle } from 'react-bootstrap-icons'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'

const Service1 = (props) => (
  <Row className="justify-content-center">
    <Col lg={8} className="details order-2 order-lg-1">
      <h3>Interpret Latent Patterns</h3>
      <p class="fst-italic"> What are our models learning during training? </p>
      <p>
        {' '}
        The current narrative is that models learn features to support their
        inference. But often, because of artifacts in the data, these features
        are meaningless.
      </p>
      <p>
        {' '}
        We'll help you discern what your model is learning. What's more, we can
        work with you to include inductive biases into the training.{' '}
      </p>
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

const Service2 = (props) => (
  <Row className="justify-content-center">
    <Col lg={8} className="details order-2 order-lg-1">
      <h3>Detect Anomalies</h3>
      <p class="fst-italic">
        {' '}
        How does the training data impact model parameters? How do we detect
        changes in the data distribution?{' '}
      </p>
      <p>
        {' '}
        Outliers can be the result of noise, but they can also herald new
        discoveries (for instance, in particle physics).
      </p>
      <p>
        {' '}
        We use a combination of techniques - generative modelling, influence
        analysis, uncertainty estimation - to help you understand your data.
      </p>
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

//Many machine learning algorithms are blackboxes: while they can capably satisfy performance objectives, the decision rules, and the process for learning these decision rules, are opaque.
//This is problematic, because if the objective is under-specified, models may simply exploit biases in the dataset to satisfy it.
const Service3 = (props) => (
  <Row className="justify-content-center">
    <Col lg={8} className="details order-2 order-lg-1">
      <h3>Trust your models</h3>
      <p class="fst-italic">
        {' '}
        How do we know our models will work outside the lab?
      </p>
      <p>
        Training ML models is different from other engineering tasks, because we
        only have indirect control over the final product. What's more, the
        models we use are often too complex for human-based validation.
      </p>
      <p>
        We are researching new ways to create certificates of trustworthy
        behaviour for models. They're like mathematical proofs of reliability.
      </p>
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

const DataDriven = (props) => (
  <section id="datadriven" class="datadriven">
    <Container>
      <Row className="justify-content-center form-group">
        <div class="section-title">
          <h2>Why Us? Automated Insights</h2>
          <p>Powered by Machine Learning</p>
        </div>
        <p>
          {' '}
          From modelling stochastic systems to artificial perception, Machine
          Learning presents a powerful paradigm for accelerating discovery.
        </p>
        <p>
          {' '}
          But complex models introduce their own risks. If your AI-designed
          solar cell seemingly contradicts the laws of physics, is that a
          statistical error, or a breakthrough?
        </p>
        <p>
          We have expertise in representation learning and model interpretation.
          Let us help you distill insights from your data.
        </p>
      </Row>

      <Row>
        <Tab.Container id="left-tabs-data" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    {' '}
                    Interpret Latent Patterns{' '}
                  </Nav.Link>
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
