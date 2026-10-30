import React from 'react'
import SectionLabel from '../ui/SectionLabel'
import {
  Plane,
  GraduationCap,
  HeartPulse,
  ShoppingCart,
  Briefcase,
  Home,
  Rocket,
  Building2,
  ArrowRight,
} from 'lucide-react'
import Button from '../ui/Button'

export default function Industries() {
  const industryList = [
    { title: 'Aviation & Travel', icon: Plane },
    { title: 'Education', icon: GraduationCap },
    { title: 'Healthcare', icon: HeartPulse },
    { title: 'Retail & E-Commerce', icon: ShoppingCart },
    { title: 'Professional Services', icon: Briefcase },
    { title: 'Real Estate', icon: Home },
    { title: 'Startups & SMEs', icon: Rocket },
    { title: 'Enterprise', icon: Building2 },
  ]

  return (
    <section id="industries" className="py-24 bg-white text-slate-900 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-6">
            <SectionLabel number="07" text="INDUSTRIES" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Technology for businesses across industries.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We understand the unique needs of each industry and create digital solutions that deliver real business value.
            </p>
            <div className="pt-2">
              <Button href="#contact" variant="primary" size="md">
                <span>Explore Industries</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Column: 8 Industry Cards in 4x2 grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industryList.map((ind, idx) => {
              const Icon = ind.icon
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-[#0088FF]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0088FF]/10 flex items-center justify-center text-[#0088FF] mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#0088FF] transition-colors">
                    {ind.title}
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
