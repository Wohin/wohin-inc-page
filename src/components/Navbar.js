import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { Link } from 'gatsby'

import { StaticImage } from 'gatsby-plugin-image'
import NavDropdown from 'react-bootstrap/NavDropdown'

const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}

class BrandedNavbar extends Component {
  state = { style: { 'background-color': 'transparent' } }

  listenScrollEvent = (e) => {
    const style1 = {
      'background-color': 'transparent',
    }
    const style2 = {
      'background-color': 'rgba(0, 0, 0, 0.9)',
      transition: 'background-color 200ms linear',
    }

    if (window.scrollY > 50) {
      // this.setState({ bg: "dark" });
      this.setState({ style: style2 })
    } else {
      // this.setState({ bg: "transparent" });
      this.setState({ style: style1 })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    return (
      //
      <>
        <Navbar
          collapseOnSelect
          variant="dark"
          fixed="top"
          expand="lg"
          id="navbar"
          // bg="transparent"
          // bg='dark'
          // bg={this.state.bg}
          style={this.state.style}
          // activeKey={active}
          // onSelect={(selectedKey) => setActive(selectedKey)}
        >
          <Container className="d-flex align-items-center">
            <Navbar.Brand href="#hero">
              <StaticImage
                src="../assets/img/Logos/wohin-icon-100x100.png"
                className="img-fluid"
                alt=""
                width="30"
                height="30"
              />{' '}
              W O H I N ?
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="response-navbar-nav">
              <Nav as="ul">
                <Nav.Item as="li">
                  <Nav.Link href="#about" as="a" eventKey="link-about">
                    Our Mission
                  </Nav.Link>
                </Nav.Item>
                <NavDropdown title="Advantages" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#beyonddata">
                    Hackable Workflows
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#datadriven">
                    Automated Insights
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#discovery">
                    Accessible Tools
                  </NavDropdown.Item>
                </NavDropdown>
                {/* <Nav.Item as="li">
            <Nav.Link href="#beyonddata" as="a" eventKey="link-services">
              Advantages
            </Nav.Link>
          </Nav.Item> */}
                {/* <Nav.Item as="li">
            <Nav.Link href="#trebuchet" as="a" eventKey="link-portfolio">
              Portfolio</Nav.Link>
          </Nav.Item> */}
                <Nav.Item as="li">
                  <Nav.Link href="#team" as="a" eventKey="team">
                    Team
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>

            <Link href="#contact">
              <Button
                variant="dark"
                className="book-a-table-btn d-none d-lg-flex"
              >
                Contact Us
              </Button>
            </Link>
          </Container>
        </Navbar>
      </>
    )
  }
}

export default BrandedNavbar
