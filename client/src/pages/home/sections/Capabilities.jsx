import React from 'react'
import SectionLabel from '../../../components/ui/SectionLabel'
import { Code2, Brain, Cloud, ArrowRight, Check } from 'lucide-react'

export default function Capabilities() {
  const cards = [
    {
      title: 'Software Engineering',
      desc: 'Custom enterprise applications, robust microservices, and specialized platforms designed around unique business requirements.',
      icon: Code2,
      chips: ['Web Apps', 'Mobile Apps', 'Custom APIs', 'Legacy Modernization'],
      highlight: false,
    },
    {
      title: 'AI & Automation',
      desc: 'Next-gen AI workflows, LLM integration, robotic process automation, and intelligent pipelines to elevate operational efficiency.',
      icon: Brain,
      chips: ['Workflow Automation', 'LLM Integration', 'Predictive Models', 'Autonomous Agents'],
      highlight: true,
    },
    {
      title: 'Cloud & Enterprise Technology',
      desc: 'High-availability cloud migrations, scalable CRM/ERP systems, and robust enterprise databases built for mission-critical loads.',
      icon: Cloud,
      chips: ['Cloud Architecture', 'ERP & CRM', 'DevOps & CI/CD', 'Data Lakes'],
      highlight: false,
    },
  ]

  return (
    <section id="capabilities" className="py-24 bg-[#0A0A10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel number="03" text="OUR CAPABILITIES" />
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Digital capability.{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-[#C7008A] bg-clip-text text-transparent">
              Built for what's next.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Delivering the complete spectrum of enterprise technology â€” from high-velocity custom software to autonomous workflow automation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon
            return (
              <div
                key={idx}
                className={`p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between relative group ${
                  card.highlight
                    ? 'bg-gradient-to-b from-[#1C0D2E] to-[#0E0E18] border-[#C7008A]/50 shadow-2xl shadow-[#C7008A]/20 scale-100 lg:-translate-y-2'
                    : 'bg-[#0E0E17]/60 border-white/10 hover:border-[#C7008A]/30 hover:bg-[#12121E]'
                }`}
              >
                {card.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#4A0072] to-[#C7008A] text-[10px] font-extrabold uppercase tracking-widest text-white shadow-md">
                    Featured Capability
                  </div>
                )}

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C7008A] mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {card.desc}
                  </p>

                  <div className="space-y-2 mb-8">
                    {card.chips.map((chip, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#C7008A] shrink-0" />
                        <span>{chip}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-pink-400 transition-colors pt-4 border-t border-white/10"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

