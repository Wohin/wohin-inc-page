import React from 'react'

import { Container } from 'react-bootstrap'

import './Footer.css'

const Footer = (props) => (
  // className="d-flex align-items-center"
  <footer id="footer">
    <Container>
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
    </Container>
  </footer>
)

export default Footer
