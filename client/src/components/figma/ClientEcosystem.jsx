import React from 'react'
import { ArrowUpRight, Layers, TrendingUp, Building2, Landmark, Asterisk, Hexagon, CircleDot, Triangle } from 'lucide-react'

export default function ClientEcosystem({ onOpenSchedule }) {
  const clients = [
    { name: 'Global FinCorp', icon: Landmark },
    { name: 'Apollo Health', icon: Asterisk },
    { name: 'LOGIX GLOBAL', icon: Hexagon },
    { name: 'Nexora', icon: CircleDot },
    { name: 'Vertex Systems', icon: Triangle },
  ]

  const cards = [
    {
      icon: Layers,
      category: 'OUR EXPERTISE',
      title: 'Services & Core Capabilities',
      description: 'From intelligent systems to resilient platforms. Built around your business.',
      tags: ['GenAI', 'Microservices', 'ERP'],
      linkText: 'Explore capabilities',
      href: '#services',
    },
    {
      icon: TrendingUp,
      category: 'REAL OUTCOMES',
      title: 'Case Studies & Client Work',
      description: 'See complex challenges become measurable business outcomes.',
      tags: ['FinTech ROI', 'Diagnostic AI'],
      linkText: 'View client work',
      href: '#case-studies',
    },
    {
      icon: Building2,
      category: 'OUR PEOPLE',
      title: 'About KAK Instant Solutions',
      description: 'Founded in Bangalore. A specialist team with a global engineering mindset.',
      tags: ['Est. 2021', 'Bangalore team'],
      linkText: 'Meet KAK',
      href: '#about',
    },
  ]

  return (
    <section id="ecosystem" className="w-full bg-[#FAFCFF] py-16 sm:py-24 border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Top Logo Banner */}
        <div className="pb-16 sm:pb-24 border-b border-slate-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
            <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
              BUILT FOR AMBITIOUS ENTERPRISES
            </span>
            <span className="text-xs text-slate-400">
              Illustrative client ecosystem • Concept wordmarks
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {clients.map((client, idx) => {
              const IconComp = client.icon
              return (
                <div 
                  key={idx}
                  className="flex items-center gap-3 text-slate-500 hover:text-slate-800 transition-colors group cursor-default"
                >
                  <IconComp className="w-5 h-5 text-slate-400 group-hover:text-[#0066FF] transition-colors" />
                  <span className="text-base sm:text-lg font-bold tracking-tight">
                    {client.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Explore Ecosystem Header */}
        <div className="pt-16 sm:pt-20 text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1D4ED8] text-xs font-semibold tracking-tight mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
            <span>Enterprise Portal Navigation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-slate-900 leading-tight">
            Explore KAK Instant Solutions <span className="text-[#0066FF]">Ecosystem</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            The expertise, outcomes and people behind your next enterprise advantage.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Row: Icon & Category */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] flex items-center justify-center text-[#0066FF] group-hover:bg-[#0066FF] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                      {card.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-[#0066FF] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                    {card.description}
                  </p>

                  {/* Badges / Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-8">
                    {card.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Link with Circle Icon */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={card.href}
                    className="text-sm font-bold text-[#0066FF] hover:text-[#0052CC] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>{card.linkText}</span>
                  </a>
                  <div className="w-9 h-9 rounded-full bg-[#EFF6FF] text-[#0066FF] flex items-center justify-center group-hover:bg-[#0066FF] group-hover:text-white transition-all duration-200">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
