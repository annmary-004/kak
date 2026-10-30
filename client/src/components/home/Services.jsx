import React from 'react'
import SectionLabel from '../ui/SectionLabel'
import {
  Code2,
  Globe,
  Smartphone,
  Bot,
  Cloud,
  LayoutGrid,
  Lightbulb,
  BarChart3,
  Wrench,
  ArrowRight,
} from 'lucide-react'
import Button from '../ui/Button'

export default function Services() {
  const serviceList = [
    { title: 'Custom Software Development', icon: Code2 },
    { title: 'Web Application Development', icon: Globe },
    { title: 'Mobile App Development', icon: Smartphone },
    { title: 'AI Business Solutions', icon: Bot },
    { title: 'Cloud Solutions', icon: Cloud },
    { title: 'ERP & CRM Solutions', icon: LayoutGrid },
    { title: 'IT Consulting', icon: Lightbulb },
    { title: 'Digital Marketing & SEO', icon: BarChart3 },
    { title: 'Application Support & Maintenance', icon: Wrench },
  ]

  return (
    <section id="services" className="py-24 bg-white text-slate-900 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-6">
            <SectionLabel number="04" text="OUR SERVICES" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Technology solutions for real business challenges.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              End-to-end solutions to help you build, grow and scale with the right technology.
            </p>
            <div className="pt-2">
              <Button href="#contact" variant="primary" size="md">
                <span>Discover Services</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Column: Grid of Service Cards */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {serviceList.map((svc, idx) => {
              const Icon = svc.icon
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-[#0088FF]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0088FF]/10 flex items-center justify-center text-[#0088FF] mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#0088FF] transition-colors">
                    {svc.title}
                  </h3>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
