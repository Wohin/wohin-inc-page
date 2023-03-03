import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import { StaticImage } from 'gatsby-plugin-image'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import Card from 'react-bootstrap/Card'

import { Envelope } from 'react-bootstrap-icons'

import './ContactUs.css'

const ContactUs = (props) => (
  <section id="contact" className="contact">
    <Container>
      <Row>
        <div className="section-title">
          <h2>Contact Us</h2>
          <p> Send us a message!</p>
        </div>
        <h3>
          <Envelope />
          <a href="mailto:contact@wohin.ca"> contact@wohin.ca</a>
        </h3>
      </Row>
    </Container>
  </section>
)

export default ContactUs
