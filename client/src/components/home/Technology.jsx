import React from 'react'
import SectionLabel from '../ui/SectionLabel'
import { Brain, Cloud, Globe, Smartphone, Database, Building2, ArrowRight } from 'lucide-react'
import Button from '../ui/Button'

export default function Technology() {
  const categories = [
    { title: 'AI & Automation', icon: Brain },
    { title: 'Cloud Technologies', icon: Cloud },
    { title: 'Web Technologies', icon: Globe },
    { title: 'Mobile Technologies', icon: Smartphone },
    { title: 'Data & Analytics', icon: Database },
    { title: 'Enterprise Systems', icon: Building2 },
  ]

  return (
    <section id="technology" className="py-24 bg-white text-slate-900 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-6">
            <SectionLabel number="06" text="TECHNOLOGY" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Built with modern technology.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We use modern and proven technologies to deliver secure, scalable solutions for real business needs.
            </p>
            <div className="pt-2">
              <Button href="#contact" variant="primary" size="md">
                <span>Explore Technology</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Column: 6 Cards in grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {categories.map((cat, idx) => {
              const Icon = cat.icon
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-[#0088FF]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0088FF]/10 flex items-center justify-center text-[#0088FF] mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 group-hover:text-[#0088FF] transition-colors">
                    {cat.title}
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
