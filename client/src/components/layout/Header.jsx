import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import Button from '../ui/Button'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [location])

  const solutions = [
    { title: 'Custom Software Development', desc: 'Enterprise-grade tailored software engines' },
    { title: 'AI & Business Automation', desc: 'LLMs, workflow automation & agentic tools' },
    { title: 'Web & Mobile Solutions', desc: 'High-speed reactive web & native mobile apps' },
    { title: 'Cloud Solutions', desc: 'AWS, Azure, GCP infrastructure & devops' },
    { title: 'Enterprise Solutions', desc: 'Scalable ERP, CRM & system integrations' },
  ]

  const services = [
    { title: 'IT Consulting', desc: 'Strategic technology advisory & architecture' },
    { title: 'Website Design & Development', desc: 'Conversion-driven modern digital experiences' },
    { title: 'Mobile App Development', desc: 'iOS & Android cross-platform ecosystems' },
    { title: 'SEO & Performance', desc: 'Organic growth & high search visibility' },
    { title: 'Digital Marketing', desc: 'Targeted customer acquisition & outreach' },
    { title: 'Application Support & Maintenance', desc: '24/7 reliability, SLA & continuous upgrades' },
  ]

  const industries = [
    'Aviation & Travel',
    'Education & EdTech',
    'Healthcare & HealthTech',
    'Retail & E-Commerce',
    'Professional Services',
    'Real Estate & PropTech',
    'Startups & SMEs',
    'Enterprise Scale',
  ]

  const insights = [
    { title: 'Blogs', desc: 'Latest perspectives on modern engineering' },
    { title: 'Case Studies', desc: 'Real impact and measurable results' },
    { title: 'Technology Insights', desc: 'Deep dives into AI, Cloud and Scale' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030712]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="KAK Instant Solutions"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <Link
            to="/"
            className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
          >
            Home
          </Link>
          <a
            href="#why-kak"
            className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
          >
            About
          </a>

          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('solutions')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              Solutions <ChevronDown className="w-4 h-4 opacity-70" />
            </button>
            {activeDropdown === 'solutions' && (
              <div className="absolute top-full left-0 w-80 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="bg-[#091122] border border-white/10 rounded-2xl p-3 shadow-2xl shadow-black/80 backdrop-blur-2xl">
                  {solutions.map((item, idx) => (
                    <a
                      key={idx}
                      href="#capabilities"
                      className="block p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="text-sm font-semibold text-white group-hover:text-sky-400 transition-colors">
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-400 line-clamp-1">{item.desc}</div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              Services <ChevronDown className="w-4 h-4 opacity-70" />
            </button>
            {activeDropdown === 'services' && (
              <div className="absolute top-full left-0 w-80 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="bg-[#091122] border border-white/10 rounded-2xl p-3 shadow-2xl shadow-black/80 backdrop-blur-2xl">
                  {services.map((item, idx) => (
                    <a
                      key={idx}
                      href="#services"
                      className="block p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="text-sm font-semibold text-white group-hover:text-sky-400 transition-colors">
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-400 line-clamp-1">{item.desc}</div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('industries')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              Industries <ChevronDown className="w-4 h-4 opacity-70" />
            </button>
            {activeDropdown === 'industries' && (
              <div className="absolute top-full -left-12 w-64 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="bg-[#091122] border border-white/10 rounded-2xl p-3 shadow-2xl shadow-black/80 backdrop-blur-2xl grid grid-cols-1 gap-1">
                  {industries.map((ind, idx) => (
                    <a
                      key={idx}
                      href="#industries"
                      className="px-3 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                      {ind}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a
            href="#technology"
            className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
          >
            Technology
          </a>

          {/* Insights Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('insights')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              Insights <ChevronDown className="w-4 h-4 opacity-70" />
            </button>
            {activeDropdown === 'insights' && (
              <div className="absolute top-full -left-12 w-72 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="bg-[#091122] border border-white/10 rounded-2xl p-3 shadow-2xl shadow-black/80 backdrop-blur-2xl">
                  {insights.map((item, idx) => (
                    <a
                      key={idx}
                      href="#insights"
                      className="block p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="text-sm font-semibold text-white group-hover:text-sky-400 transition-colors">
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-400">{item.desc}</div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a
            href="#contact"
            className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Button href="#contact" variant="primary" size="sm">
            <span>Let's Talk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <Button href="#contact" variant="primary" size="sm" className="!px-3 !py-1.5 !text-xs">
            Talk
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070E1E] border-b border-white/10 px-4 pt-4 pb-8 space-y-3 max-h-[85vh] overflow-y-auto">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-white hover:bg-white/5"
          >
            Home
          </Link>
          <a
            href="#why-kak"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-white/5"
          >
            About KAK
          </a>
          <a
            href="#capabilities"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-white/5"
          >
            Solutions
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-white/5"
          >
            Services
          </a>
          <a
            href="#industries"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-white/5"
          >
            Industries
          </a>
          <a
            href="#technology"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-white/5"
          >
            Technology
          </a>
          <a
            href="#case-studies"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-white/5"
          >
            Case Studies
          </a>
          <a
            href="#insights"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-white/5"
          >
            Insights
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-white/5"
          >
            FAQ
          </a>
          <div className="pt-4">
            <Button
              href="#contact"
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Let's Talk
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
