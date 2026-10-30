import React from 'react'
import SectionLabel from '../ui/SectionLabel'
import { ArrowRight, Calendar, User } from 'lucide-react'
import Button from '../ui/Button'

export default function Insights() {
  const articles = [
    {
      title: 'The Rise of AI in Modern Business Operations',
      date: 'Apr 12, 2025',
      gradient: 'from-blue-600/20 to-sky-400/10',
    },
    {
      title: 'Cloud Migration: Key Considerations for Success',
      date: 'Apr 11, 2025',
      gradient: 'from-cyan-600/20 to-blue-500/10',
    },
    {
      title: 'Building Better Digital Experiences',
      date: 'Apr 01, 2025',
      gradient: 'from-sky-600/20 to-indigo-500/10',
    },
    {
      title: 'Business Process Automation Trends in 2025',
      date: 'Mar 25, 2025',
      gradient: 'from-indigo-600/20 to-blue-400/10',
    },
  ]

  return (
    <section id="insights" className="py-24 bg-white text-slate-900 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <SectionLabel number="09" text="OUR INSIGHTS" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Ideas shaping the future of technology.
            </h2>
            <p className="text-slate-600 text-base mt-3">
              Explore perspectives on software, AI, automation, cloud, enterprise and industry transformation.
            </p>
          </div>
          <div>
            <Button href="#contact" variant="primary" size="md">
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* 4 Article Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((item, idx) => (
            <article
              key={idx}
              className="rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:border-[#0088FF]/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div className={`h-40 bg-gradient-to-tr ${item.gradient} p-4 relative`}>
                <div className="w-12 h-12 rounded-full bg-[#0088FF]/20 blur-lg absolute bottom-2 right-2" />
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow">
                <h3 className="text-sm font-bold text-slate-900 mb-6 group-hover:text-[#0088FF] transition-colors leading-snug">
                  {item.title}
                </h3>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#0088FF]" />
                    {item.date}
                  </span>
                  <span className="font-semibold text-[#0088FF] group-hover:translate-x-1 transition-transform inline-flex items-center">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
