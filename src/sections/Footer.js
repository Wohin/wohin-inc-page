import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import { StaticImage } from 'gatsby-plugin-image'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import { CheckCircle } from 'react-bootstrap-icons'

const Footer = (props) => (
  // class="d-flex align-items-center"
  <>
    <footer id="footer">
      <div class="container">
        <div class="copyright">
          &copy; Copyright{' '}
          <strong>
            <span>Wohin Inc</span>
          </strong>
          . All Rights Reserved
        </div>
        <div class="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  </>
)

export default Footer
