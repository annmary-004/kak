import React from 'react'
import SectionLabel from '../ui/SectionLabel'
import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'

export default function Process() {
  const steps = [
    { num: '01', title: 'Discover', subtitle: 'Understand Business' },
    { num: '02', title: 'Define', subtitle: 'Build the Right Plan' },
    { num: '03', title: 'Design', subtitle: 'Create the Experience' },
    { num: '04', title: 'Develop', subtitle: 'Engineer the Solution' },
    { num: '05', title: 'Launch', subtitle: 'Go Live' },
    { num: '06', title: 'Support', subtitle: 'Grow & Optimize' },
  ]

  return (
    <section id="process" className="py-24 bg-[#040918] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-6">
            <SectionLabel number="05" text="OUR PROCESS" light={true} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              From idea to impact.
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              A collaborative and transparent process that ensures high-quality delivery and long-term success.
            </p>
            <div className="pt-2">
              <Button href="#contact" variant="primary" size="md">
                <span>Our Approach</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Column: Connected Timeline Process Nodes */}
          <div className="lg:col-span-8 relative">
            {/* Connecting horizontal line */}
            <div className="hidden lg:block absolute top-7 left-8 right-8 h-0.5 bg-[#0088FF]/30 -z-0" />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-14 h-14 rounded-full bg-[#040918] border-2 border-[#0088FF] flex items-center justify-center font-mono text-sm font-bold text-[#0088FF] group-hover:scale-110 group-hover:bg-[#0088FF] group-hover:text-white transition-all duration-300 shadow-lg shadow-[#0088FF]/20 mb-3">
                    {step.num}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1 group-hover:text-sky-300 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    {step.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
