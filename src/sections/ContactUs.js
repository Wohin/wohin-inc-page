import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/style.css'

import { Col, Container, Row } from 'react-bootstrap'

import { StaticImage } from 'gatsby-plugin-image'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import { CheckCircle } from 'react-bootstrap-icons'
import Card from 'react-bootstrap/Card'

import { Envelope } from 'react-bootstrap-icons'

const ContactUs = (props) => (
  // class="d-flex align-items-center"
  <>
    <section id="contact" class="contact">
      <Container>
        <Row>
          <div class="section-title">
            <h2>Contact Us</h2>
            <p> Send us a message!</p>
          </div>
          <h3>
            <Envelope></Envelope>
            <a href="mailto:contact@wohin.ca"> contact@wohin.ca</a>
          </h3>
        </Row>
      </Container>
    </section>
  </>
)

export default ContactUs