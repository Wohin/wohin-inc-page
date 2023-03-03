import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import { StaticImage } from 'gatsby-plugin-image'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import './Footer.css'

const Footer = (props) => (
  // className="d-flex align-items-center"
  <footer id="footer">
    <div className="container">
      <div className="copyright">
        &copy; Copyright{' '}
        <strong>
          <span>Wohin Inc</span>
        </strong>
        . All Rights Reserved
      </div>
      <div className="credits">
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>
)

export default Footer
