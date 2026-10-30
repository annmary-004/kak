import React from 'react'
import SectionLabel from '../ui/SectionLabel'
import { ArrowRight, Code2, Brain, Cloud } from 'lucide-react'
import Button from '../ui/Button'

export default function Capabilities() {
  const cards = [
    {
      title: 'Software Engineering',
      desc: 'Custom applications & platforms for your business.',
      icon: Code2,
      tag: 'Development',
      gradient: 'from-blue-600/30 to-sky-400/10',
    },
    {
      title: 'AI & Automation',
      desc: 'Intelligent solutions to improve productivity and efficiency.',
      icon: Brain,
      tag: 'Intelligence',
      gradient: 'from-cyan-600/30 to-blue-500/10',
    },
    {
      title: 'Cloud & Enterprise Technology',
      desc: 'Secure, scalable and connected business systems.',
      icon: Cloud,
      tag: 'Infrastructure',
      gradient: 'from-indigo-600/30 to-blue-400/10',
    },
  ]

  return (
    <section id="capabilities" className="py-24 bg-[#040918] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-6">
            <SectionLabel number="03" text="CORE CAPABILITIES" light={true} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Digital capability. Built for what's next.
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              KAK's solutions span different software, cloud, and enterprise solutions, helping businesses optimize operations and stay ahead.
            </p>
            <div className="pt-2">
              <Button href="#services" variant="primary" size="md">
                <span>Discover KAK</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Column: 3 Image/Glass Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, idx) => {
              const Icon = card.icon
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 overflow-hidden hover:border-[#0088FF]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                >
                  {/* Visual Header */}
                  <div className={`h-40 bg-gradient-to-tr ${card.gradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-sky-200 bg-black/40 px-2.5 py-1 rounded-full border border-white/10">
                        {card.tag}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                        <Icon className="w-5 h-5 text-sky-300" />
                      </div>
                    </div>
                    {/* Glowing graphic hint */}
                    <div className="w-16 h-16 rounded-full bg-[#0088FF]/30 blur-xl absolute bottom-0 right-0" />
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed mb-6">
                        {card.desc}
                      </p>
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0088FF] group-hover:text-sky-300 transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
