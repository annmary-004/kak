import React from 'react'
import SectionLabel from '../../../components/ui/SectionLabel'
import { Code2, Brain, Cloud, Building2, Zap, CheckCircle2 } from 'lucide-react'

export default function TrustSection() {
  const capabilities = [
    { title: 'Software Engineering', desc: 'Custom application architectures & robust APIs', icon: Code2 },
    { title: 'AI & Automation', desc: 'Agentic workflows & machine intelligence', icon: Brain },
    { title: 'Cloud Solutions', desc: 'Resilient multi-cloud deployments & microservices', icon: Cloud },
    { title: 'Enterprise Systems', desc: 'ERP, CRM, & unified business databases', icon: Building2 },
    { title: 'Digital Transformation', desc: 'Modernizing legacy processes for digital acceleration', icon: Zap },
  ]

  return (
    <section className="py-24 bg-[#09090E] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <SectionLabel number="01" text="BUILT FOR BUSINESS" />
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Technology that moves{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-[#C7008A] bg-clip-text text-transparent">
                business forward.
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We combine software engineering, cloud technologies, automation, and digital expertise to create practical solutions that help businesses improve efficiency, strengthen digital operations, and prepare for what's next.
            </p>

            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#C7008A] shrink-0" />
                <span>Enterprise grade security and compliance standards</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#C7008A] shrink-0" />
                <span>Architected for extreme scalability and zero unplanned downtime</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#C7008A] shrink-0" />
                <span>Direct ROI and operational cost reduction through automation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Capability Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#C7008A]/40 hover:bg-white/[0.04] transition-all duration-300 group ${
                    idx === 4 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#4A0072]/40 to-[#C7008A]/30 border border-[#C7008A]/30 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-fuchsia-300" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-pink-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

