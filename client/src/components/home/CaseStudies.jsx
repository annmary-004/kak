import React from 'react'
import SectionLabel from '../ui/SectionLabel'
import { ArrowRight, Laptop, ShoppingBag, Smartphone, Database } from 'lucide-react'
import Button from '../ui/Button'

export default function CaseStudies() {
  const cases = [
    {
      title: 'Business Automation',
      meta: 'Finance · Web · Cloud',
      icon: Laptop,
      gradient: 'from-blue-600/20 to-sky-400/10',
    },
    {
      title: 'E-commerce Platform',
      meta: 'Retail · Mobile · Web-based',
      icon: ShoppingBag,
      gradient: 'from-cyan-600/20 to-blue-500/10',
    },
    {
      title: 'Mobile Application',
      meta: 'Travel · Mobile · API',
      icon: Smartphone,
      gradient: 'from-sky-600/20 to-indigo-500/10',
    },
    {
      title: 'CRM / Enterprise Solution',
      meta: 'Enterprise · CRM · Cloud',
      icon: Database,
      gradient: 'from-indigo-600/20 to-blue-400/10',
    },
  ]

  return (
    <section id="case-studies" className="py-24 bg-white text-slate-900 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <SectionLabel number="08" text="CASE STUDIES" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Turning technology into business impact.
            </h2>
            <p className="text-slate-600 text-base mt-3">
              Explore successful projects delivered to address real business challenges through technology.
            </p>
          </div>
          <div>
            <Button href="#contact" variant="primary" size="md">
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:border-[#0088FF]/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Visual Header */}
                <div className={`h-44 bg-gradient-to-tr ${item.gradient} p-6 flex flex-col justify-between relative`}>
                  <div className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur-md flex items-center justify-center text-[#0088FF] shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="w-14 h-14 rounded-full bg-[#0088FF]/20 blur-xl absolute bottom-2 right-2" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-[#0088FF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">
                    {item.meta}
                  </p>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0088FF] group-hover:text-[#0077EE] transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
