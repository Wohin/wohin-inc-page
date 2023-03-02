import * as React from 'react'

import Hero from '../sections/Hero'
import About from '../sections/About'
import DiscoveryServices from '../sections/DiscoveryServices'
import DataDriven from '../sections/DataDriven'
import BeyondData from '../sections/BeyondData'
import YouTubeDemo from '../sections/YouTubeDemo'
import Team from '../sections/Team'

import ContactUs from '../sections/ContactUs'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Footer from '../sections/Footer'
import BrandedNavbar from '../components/Navbar'

export const Head = () => <SEO title="Wohin" />

export default function Home() {
  return (
    <Layout>
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
    </Layout>
  )
}
