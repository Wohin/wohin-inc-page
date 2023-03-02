import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/style.css'

import {Col, Container, Row } from "react-bootstrap";

import { StaticImage } from 'gatsby-plugin-image';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { CheckCircle } from "react-bootstrap-icons";


const Team = props => (
  // class="d-flex align-items-center"
  <>
  <section id="team" class="team">
    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
    <Container>
    <Row>
    <div class="section-title">
      <h2>Team</h2>
      <p>Who We Are</p>
    </div>
    </Row>
    <Row>
      <Col lg={4} className="col-md-6">
        <div class="member" data-aos="zoom-in" data-aos-delay="100">
          <StaticImage 
            src="../assets/img/Team/giuseppe.png" className="img-fluid" alt=""
          />
          <div class="member-info">
            <div class="member-info-content">
              <h4>Giuseppe Castiglione</h4>
              <span>Founder, Machine Learning Researcher</span>
            </div>
            <div class="social">
              <a href=""><i class="bi bi-twitter"></i></a>
              <a href=""><i class="bi bi-facebook"></i></a>
              <a href=""><i class="bi bi-instagram"></i></a>
              <a href=""><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </Col>
      <Col lg={4} className="col-md-6">
        <div class="member" data-aos="zoom-in" data-aos-delay="100">
          <StaticImage 
            src="../assets/img/Team/dave.png" className="img-fluid" alt=""
          />
          <div class="member-info">
            <div class="member-info-content">
              <h4>David Eade</h4>
              <span>Founder, Mechanical Engineer</span>
            </div>
            <div class="social">
              <a href=""><i class="bi bi-twitter"></i></a>
              <a href=""><i class="bi bi-facebook"></i></a>
              <a href=""><i class="bi bi-instagram"></i></a>
              <a href=""><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </Col>
      <Col lg={4} className="col-md-6">
        <div class="member" data-aos="zoom-in" data-aos-delay="100">
          <StaticImage 
            src="../assets/img/Team/mark.png" className="img-fluid" alt=""
          />
          <div class="member-info">
            <div class="member-info-content">
              <h4>Mark Sikora</h4>
              <span>Founder, Electrical Engineer</span>
            </div>
            <div class="social">
              <a href=""><i class="bi bi-twitter"></i></a>
              <a href=""><i class="bi bi-facebook"></i></a>
              <a href=""><i class="bi bi-instagram"></i></a>
              <a href=""><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </Col>
    </Row>
    </Container>
    </AnimationOnScroll>
  </section>
</>
)

export default Team