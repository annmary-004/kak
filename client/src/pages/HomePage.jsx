import React, { useState } from 'react'
import Navbar from '../components/figma/Navbar'
import HeroSection from '../components/figma/HeroSection'
import ClientEcosystem from '../components/figma/ClientEcosystem'
import TechArchitecture from '../components/figma/TechArchitecture'
import VelocityFramework from '../components/figma/VelocityFramework'
import Footer from '../components/figma/Footer'
import ScheduleModal from '../components/figma/ScheduleModal'

export default function HomePage() {
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false)

  const handleOpenSchedule = () => setScheduleModalOpen(true)
  const handleCloseSchedule = () => setScheduleModalOpen(false)

  return (
    <div className="w-full bg-white text-slate-900 selection:bg-[#0066FF] selection:text-white antialiased">
      {/* 1. Top Navbar (Image 1 top bar with 5th pic logo) */}
      <Navbar onOpenSchedule={handleOpenSchedule} />

      {/* 2. Hero Section (Image 1 main hero + Live Telemetry Core) */}
      <HeroSection onOpenSchedule={handleOpenSchedule} />

      {/* 3. Client Ecosystem & Capabilities (Image 2) */}
      <ClientEcosystem onOpenSchedule={handleOpenSchedule} />

      {/* 4. Technology Architecture (Image 3) */}
      <TechArchitecture />

      {/* 5. The 4-Stage Instant Velocity Framework (Image 4) */}
      <VelocityFramework onOpenSchedule={handleOpenSchedule} />

      {/* 6. Footer */}
      <Footer onOpenSchedule={handleOpenSchedule} />

      {/* Interactive Discovery Modal */}
      <ScheduleModal isOpen={scheduleModalOpen} onClose={handleCloseSchedule} />
    </div>
  )
}
