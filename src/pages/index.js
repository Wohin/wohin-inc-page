import * as React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import DiscoveryServices from '../sections/DiscoveryServices'
import DataDriven from '../sections/DataDriven'
import BeyondData from '../sections/BeyondData'
import YouTubeDemo from '../sections/YouTubeDemo'
import Team from '../sections/Team'
import { Helmet } from 'react-helmet'

import ContactUs from '../sections/ContactUs'

import Footer from '../sections/Footer'
import BrandedNavbar from '../components/Navbar'

import GLightbox from 'glightbox'
import 'glightbox/dist/css/glightbox.min.css'

export default function Home() {
  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox',
  })
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Helmet>
      <BrandedNavbar />
      <Hero />
      <main id="main">
        <About />
        <BeyondData />
        <YouTubeDemo />
        <DataDriven />
        <DiscoveryServices />

        <Team />
        <ContactUs />
      </main>
      <Footer />
    </>
  )
}
