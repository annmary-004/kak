import React from 'react'
import SectionLabel from '../../../components/ui/SectionLabel'
import {
  Plane,
  GraduationCap,
  HeartPulse,
  ShoppingCart,
  Briefcase,
  Home,
  Rocket,
  Building2,
} from 'lucide-react'

export default function Industries() {
  const industryList = [
    { title: 'Aviation & Travel', desc: 'Booking engines, flight monitoring, and logistics portals.', icon: Plane },
    { title: 'Education & EdTech', desc: 'Learning management systems and institutional portals.', icon: GraduationCap },
    { title: 'Healthcare', desc: 'Patient management, HIPAA-ready records, and telemetry.', icon: HeartPulse },
    { title: 'Retail & E-Commerce', desc: 'High-volume storefronts, inventory sync, and checkout flows.', icon: ShoppingCart },
    { title: 'Professional Services', desc: 'Client portals, automated billing, and compliance tools.', icon: Briefcase },
    { title: 'Real Estate & PropTech', desc: 'Listing platforms, virtual tours, and tenant management.', icon: Home },
    { title: 'Startups & SMEs', desc: 'Rapid MVP engineering and scalable foundational tech stacks.', icon: Rocket },
    { title: 'Enterprise Scale', desc: 'Multi-tenant cloud apps, SSO, and distributed databases.', icon: Building2 },
  ]

  return (
    <section id="industries" className="py-24 bg-[#09090E] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel number="07" text="INDUSTRIES" />
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Technology for businesses{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-[#C7008A] bg-clip-text text-transparent">
              across industries.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Delivering tailored software and automation architectures that address domain-specific compliance, performance, and user demands.
          </p>
        </div>

        {/* 8 Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {industryList.map((ind, idx) => {
            const Icon = ind.icon
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#C7008A]/40 hover:bg-white/[0.04] transition-all duration-300 group text-center flex flex-col items-center justify-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C7008A] mb-4 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-[#4A0072] group-hover:to-[#C7008A] group-hover:text-white transition-all">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                  {ind.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <p className="text-xs text-slate-400 italic">
            *Solutions tailored to each sector's unique regulatory, data privacy, and architectural requirements.
          </p>
        </div>
      </div>
    </section>
  )
}

