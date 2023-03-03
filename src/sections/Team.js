import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import { StaticImage } from 'gatsby-plugin-image'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import { Facebook, Instagram, Linkedin, Twitter } from 'react-bootstrap-icons'

import './Team.css'

const Team = (props) => (
  <section id="team" className="team">
    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
      <Container>
        <Row>
          <div className="section-title">
            <h2>Team</h2>
            <p>Who We Are</p>
          </div>
        </Row>
        <Row>
          <Col lg={4} className="col-md-6">
            <div className="member" data-aos="zoom-in" data-aos-delay="100">
              <StaticImage
                src="../assets/img/Team/giuseppe.png"
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Giuseppe Castiglione</h4>
                  <span>Founder, Machine Learning Researcher</span>
                </div>
                <div className="social">
                  <a href="">
                    <Twitter />
                  </a>
                  <a href="">
                    <Facebook />
                  </a>
                  <a href="">
                    <Instagram />
                  </a>
                  <a href="">
                    <Linkedin />
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} className="col-md-6">
            <div className="member" data-aos="zoom-in" data-aos-delay="100">
              <StaticImage
                src="../assets/img/Team/dave.png"
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>David Eade</h4>
                  <span>Founder, Mechanical Engineer</span>
                </div>
                <div className="social">
                  <a href="">
                    <Twitter />
                  </a>
                  <a href="">
                    <Facebook />
                  </a>
                  <a href="">
                    <Instagram />
                  </a>
                  <a href="">
                    <Linkedin />
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} className="col-md-6">
            <div className="member" data-aos="zoom-in" data-aos-delay="100">
              <StaticImage
                src="../assets/img/Team/mark.png"
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Mark Sikora</h4>
                  <span>Founder, Electrical Engineer</span>
                </div>
                <div className="social">
                  <a href="">
                    <Twitter />
                  </a>
                  <a href="">
                    <Facebook />
                  </a>
                  <a href="">
                    <Instagram />
                  </a>
                  <a href="">
                    <Linkedin />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </AnimationOnScroll>
  </section>
)

export default Team
