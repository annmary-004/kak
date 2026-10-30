import React from 'react'
import SectionLabel from '../ui/SectionLabel'
import { Code2, Brain, Cloud, Smartphone, LayoutGrid, BarChart3, ArrowRight } from 'lucide-react'
import Button from '../ui/Button'

export default function TrustSection() {
  const cards = [
    { title: 'Custom Software', icon: Code2 },
    { title: 'AI & Automation', icon: Brain },
    { title: 'Cloud Solutions', icon: Cloud },
    { title: 'Web & Mobile Solutions', icon: Smartphone },
    { title: 'CRM & ERP', icon: LayoutGrid },
    { title: 'Data & Analytics', icon: BarChart3 },
  ]

  return (
    <section className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <SectionLabel number="01" text="JUST FOR BUSINESS" />
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Technology that moves business forward.
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We combine software engineering, cloud technologies, automation and digital expertise to create practical solutions that help businesses improve efficiency, strengthen digital operations and prepare for what's next.
            </p>

            <div className="pt-2">
              <Button href="#why-kak" variant="primary" size="md">
                <span>About KAK</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Column: 6 Cards in 3x2 grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {cards.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-[#0088FF]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0088FF]/10 flex items-center justify-center text-[#0088FF] mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 group-hover:text-[#0088FF] transition-colors">
                    {item.title}
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
