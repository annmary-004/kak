import React from 'react'
import Landing from './sections/landing'
import TrustSection from './sections/TrustSection'
import About from './sections/about'
import Capabilities from './sections/capabilities'
import Services from './sections/services'
import Process from './sections/process'
import Technology from './sections/technology'
import Industries from './sections/industries'
import CaseStudies from './sections/case-studies'
import Insights from './sections/insights'
import FAQ from './sections/faq'
import ContactSection from './sections/contact'
import FinalCTA from './sections/final-cta'

export default function HomePage() {
  return (
    <div className="kak-home-page">
      <Landing />
      <TrustSection />
      <About />
      <Capabilities />
      <Services />
      <Process />
      <Technology />
      <Industries />
      <CaseStudies />
      <Insights />
      <FAQ />
      <ContactSection />
      <FinalCTA />
    </div>
  )
}
