import React from 'react'
import SectionLabel from '../../../components/ui/SectionLabel'
import { Target, TrendingUp, Cpu, HeartHandshake, ArrowRight } from 'lucide-react'
import Button from '../../../components/ui/Button'

export default function WhyKAK() {
  const blocks = [
    {
      num: '01',
      title: 'Business-Focused',
      desc: 'Technology strictly aligned with real commercial objectives, unit economics, and measurable organizational outcomes.',
      icon: Target,
    },
    {
      num: '02',
      title: 'Scalable Solutions',
      desc: 'Clean codebases, modern microservices, and elastic cloud architectures engineered to seamlessly grow with your business.',
      icon: TrendingUp,
    },
    {
      num: '03',
      title: 'Modern Technology',
      desc: 'State-of-the-art frameworks, containerized environments, AI workflows, and modern enterprise tooling.',
      icon: Cpu,
    },
    {
      num: '04',
      title: 'Long-Term Support',
      desc: 'Proactive technology partnership, continuous monitoring, and ongoing optimization far beyond initial deployment.',
      icon: HeartHandshake,
    },
  ]

  return (
    <section id="why-kak" className="py-24 bg-[#07070B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel number="02" text="WHY KAK" />
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Technology built around{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-[#C7008A] bg-clip-text text-transparent">
              your business.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Every business has distinct operational bottlenecks. KAK Instant Solutions pairs deep technological engineering with practical business context to build resilient, scalable, and secure digital foundations.
          </p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {blocks.map((block, idx) => {
            const Icon = block.icon
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#C7008A]/40 hover:bg-white/[0.04] transition-all duration-300 relative group overflow-hidden"
              >
                {/* Background accent light */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C7008A]/5 rounded-bl-full pointer-events-none group-hover:bg-[#C7008A]/10 transition-colors" />

                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C7008A] group-hover:bg-gradient-to-tr group-hover:from-[#4A0072] group-hover:to-[#C7008A] group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-500 tracking-wider">
                    {block.num}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-pink-300 transition-colors">
                  {block.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {block.desc}
                </p>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Button href="#contact" variant="outline" size="md">
            <span>About KAK & Our Mission</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

