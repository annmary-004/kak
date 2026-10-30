import React from 'react'
import SectionLabel from '../ui/SectionLabel'
import { Target, TrendingUp, Cpu, HeartHandshake, ArrowRight } from 'lucide-react'
import Button from '../ui/Button'

export default function WhyKAK() {
  const blocks = [
    {
      title: 'Business-Focused',
      desc: 'Solutions aligned with real business objectives.',
      icon: Target,
    },
    {
      title: 'Scalable Solutions',
      desc: 'Solutions designed to scale with your business.',
      icon: TrendingUp,
    },
    {
      title: 'Modern Technology',
      desc: 'Contemporary solutions built with advanced capabilities.',
      icon: Cpu,
    },
    {
      title: 'Long-Term Support',
      desc: 'Ongoing support and improvements.',
      icon: HeartHandshake,
    },
  ]

  return (
    <section id="why-kak" className="py-24 bg-white text-slate-900 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-6">
            <SectionLabel number="02" text="WHY KAK" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Technology built around your business.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Every business has different challenges. KAK creates solutions combining technology expertise with business understanding to create scalable, secure and user-focused digital solutions.
            </p>
            <div className="pt-2">
              <Button href="#capabilities" variant="primary" size="md">
                <span>Choose KAK</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Column: 4 Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {blocks.map((block, idx) => {
              const Icon = block.icon
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-[#0088FF]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#0088FF]/10 flex items-center justify-center text-[#0088FF] mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#0088FF] transition-colors">
                      {block.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {block.desc}
                    </p>
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
