import React, { useState, useEffect } from 'react'
import { ChevronDown, ArrowUpRight, Menu, X, Shield, Sparkles } from 'lucide-react'

export default function Navbar({ onOpenSchedule }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const servicesLinks = [
    { name: 'Custom Software Development', desc: 'Enterprise-grade scalable systems' },
    { name: 'Cloud & Orchestration', desc: 'AWS, GCP, Kubernetes & Terraform' },
    { name: 'AI & Neural Systems', desc: 'LLMs, PyTorch & automated workflows' },
    { name: 'Distributed Data Mesh', desc: 'Real-time Kafka & ClickHouse streaming' },
  ]

  const portfolioLinks = [
    { name: 'Global FinCorp', desc: 'High-frequency banking platform' },
    { name: 'Apollo Health', desc: 'Diagnostic AI engine' },
    { name: 'LOGIX Global', desc: 'Autonomous logistics automation' },
  ]

  const aboutLinks = [
    { name: 'The KAK Story', desc: 'Engineering mindset founded in Bangalore' },
    { name: 'Leadership & Team', desc: 'Specialist systems architects' },
    { name: 'Velocity Framework', desc: 'Our 4-stage disciplined path' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 h-20 sm:h-22 flex items-center justify-between">
        
        {/* Left: Logo */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden flex items-center justify-center p-0.5 border border-slate-200 shadow-sm bg-white group-hover:scale-105 transition-transform">
            <img 
              src="/kak-logo.png" 
              alt="KAK Instant Solutions Logo" 
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-[#073370] leading-tight">
              KAK
            </span>
            <span className="text-[9.5px] font-bold tracking-[0.22em] text-[#0594FD] uppercase -mt-0.5">
              INSTANT SOLUTIONS
            </span>
          </div>
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1.5 text-[15px] font-medium text-slate-700 hover:text-[#0088FF] py-2 transition-colors">
              Services
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-[#0088FF]' : 'text-slate-400'}`} />
            </button>
            {activeDropdown === 'services' && (
              <div className="absolute top-full -left-4 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-2.5 mt-1 animate-in fade-in slide-in-from-top-2 duration-150">
                {servicesLinks.map((item, idx) => (
                  <a key={idx} href="#services" className="block p-2.5 rounded-xl hover:bg-blue-50/60 transition-colors">
                    <div className="text-sm font-semibold text-slate-800">{item.name}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Portfolio Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('portfolio')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1.5 text-[15px] font-medium text-slate-700 hover:text-[#0088FF] py-2 transition-colors">
              Portfolio
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'portfolio' ? 'rotate-180 text-[#0088FF]' : 'text-slate-400'}`} />
            </button>
            {activeDropdown === 'portfolio' && (
              <div className="absolute top-full -left-4 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-2.5 mt-1 animate-in fade-in slide-in-from-top-2 duration-150">
                {portfolioLinks.map((item, idx) => (
                  <a key={idx} href="#ecosystem" className="block p-2.5 rounded-xl hover:bg-blue-50/60 transition-colors">
                    <div className="text-sm font-semibold text-slate-800">{item.name}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* About Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('about')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1.5 text-[15px] font-medium text-slate-700 hover:text-[#0088FF] py-2 transition-colors">
              About
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180 text-[#0088FF]' : 'text-slate-400'}`} />
            </button>
            {activeDropdown === 'about' && (
              <div className="absolute top-full -left-4 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-2.5 mt-1 animate-in fade-in slide-in-from-top-2 duration-150">
                {aboutLinks.map((item, idx) => (
                  <a key={idx} href="#methodology" className="block p-2.5 rounded-xl hover:bg-blue-50/60 transition-colors">
                    <div className="text-sm font-semibold text-slate-800">{item.name}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                  </a>
                ))}
              </div>
            )}
          </div>

        </nav>

        {/* Right: Status Pill & Action Button */}
        <div className="hidden sm:flex items-center gap-3.5">
          {/* Bangalore Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F6FF] border border-[#D6E6FE] text-[#1E56B3] text-xs font-semibold tracking-tight">
            <span className="w-2 h-2 rounded-full bg-[#1E6BFF] animate-pulse"></span>
            <span>Bangalore Global HQ Active</span>
          </div>

          {/* Schedule Discovery Button */}
          <button
            onClick={onOpenSchedule}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white text-[14px] font-semibold tracking-tight shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            <span>Schedule Discovery</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-5 py-4 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F6FF] border border-[#D6E6FE] text-[#1E56B3] text-xs font-semibold mb-2">
            <span className="w-2 h-2 rounded-full bg-[#1E6BFF]"></span>
            <span>Bangalore Global HQ Active</span>
          </div>
          <div className="space-y-1">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-slate-800">Services</a>
            <a href="#ecosystem" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-slate-800">Portfolio</a>
            <a href="#architecture" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-slate-800">Architecture</a>
            <a href="#methodology" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-slate-800">About</a>
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false)
              if (onOpenSchedule) onOpenSchedule()
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0066FF] text-white font-semibold text-sm mt-3"
          >
            <span>Schedule Discovery</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  )
}
