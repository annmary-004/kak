import React from 'react'
import SectionLabel from '../../../components/ui/SectionLabel'
import { Search, Compass, Palette, Code2, Rocket, RefreshCw } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      subtitle: 'Understand the Business',
      desc: 'We analyze your strategic objectives, user personas, operational pain points, and existing architectural footprint.',
      icon: Search,
    },
    {
      num: '02',
      title: 'Define',
      subtitle: 'Build the Strategy',
      desc: 'We translate operational requirements into a concrete technical roadmap, system architecture, and milestone timeline.',
      icon: Compass,
    },
    {
      num: '03',
      title: 'Design',
      subtitle: 'Create the Experience',
      desc: 'We produce interactive wireframes, design enterprise UX flows, and engineer intuitive interfaces for effortless user adoption.',
      icon: Palette,
    },
    {
      num: '04',
      title: 'Develop',
      subtitle: 'Engineer the Solution',
      desc: 'Our engineering team develops modular, clean, and thoroughly tested code backed by automated unit and integration tests.',
      icon: Code2,
    },
    {
      num: '05',
      title: 'Launch',
      subtitle: 'Go Live',
      desc: 'Zero-downtime deployment, automated CI/CD pipeline triggering, secure cloud provisioning, and monitored rollout.',
      icon: Rocket,
    },
    {
      num: '06',
      title: 'Support',
      subtitle: 'Grow & Optimize',
      desc: 'Continuous real-time performance monitoring, SLA compliance, security patching, and ongoing feature iterations.',
      icon: RefreshCw,
    },
  ]

  return (
    <section id="process" className="py-24 bg-[#09090E] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel number="05" text="OUR PROCESS" />
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            From idea to{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-[#C7008A] bg-clip-text text-transparent">
              measurable impact.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A disciplined, agile engineering approach designed to de-risk delivery and accelerate time-to-market.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#C7008A]/40 hover:bg-white/[0.04] transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C7008A] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-2xl font-black text-white/10 group-hover:text-[#C7008A]/30 transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <div className="mb-2">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#C7008A]">
                      Stage {step.num}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1">
                      {step.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-400 mb-4">
                      {step.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

