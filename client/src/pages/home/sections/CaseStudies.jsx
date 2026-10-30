import React from 'react'
import SectionLabel from '../../../components/ui/SectionLabel'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Button from '../../../components/ui/Button'

export default function CaseStudies() {
  const cases = [
    {
      title: 'Business Automation Platform',
      category: 'Professional Services',
      tag: 'AI & Automation',
      challenge: 'Manual, spreadsheet-driven workflow bottlenecking client onboarding and slowing turnaround times by 4 business days.',
      solution: 'Custom end-to-end automation engine with intelligent OCR, automated document verification, and automated routing.',
      tech: 'React, Node.js, Python, MongoDB, AWS Lambda',
      outcome: '72% reduction in manual verification overhead and instantaneous client onboarding.',
    },
    {
      title: 'Enterprise Web Application',
      category: 'Enterprise Scale',
      tag: 'Software Engineering',
      challenge: 'Fragmented legacy architecture unable to scale concurrency during quarterly peak transaction loads.',
      solution: 'Microservices rebuild featuring decoupled backend APIs, multi-region database sharding, and real-time dashboarding.',
      tech: 'Next.js, Node.js, PostgreSQL, Docker, Redis',
      outcome: '99.99% system availability during peak operations and 4x faster page load times.',
    },
    {
      title: 'High-Volume E-Commerce Platform',
      category: 'Retail & E-Commerce',
      tag: 'Web & Mobile',
      challenge: 'Third-party platform instability, inflexible custom checkout logic, and limited mobile app functionality.',
      solution: 'Engineered a headless commerce platform integrated with a native cross-platform mobile app and warehouse sync.',
      tech: 'React, React Native, Node.js, Express, Stripe API',
      outcome: '180% surge in mobile conversion rates and real-time inventory management across 12 outlets.',
    },
  ]

  return (
    <section id="case-studies" className="py-24 bg-[#060609] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <SectionLabel number="08" text="CASE STUDIES" />
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Turning technology into{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-[#C7008A] bg-clip-text text-transparent">
                measurable business impact.
              </span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            Concrete transformations engineered for operational resilience and measurable business scale.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#C7008A]/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C7008A]/10 text-pink-400 border border-[#C7008A]/20">
                    {item.tag}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-6 group-hover:text-pink-300 transition-colors">
                  {item.title}
                </h3>

                <div className="space-y-4 text-xs leading-relaxed">
                  <div>
                    <span className="font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      Challenge
                    </span>
                    <p className="text-slate-300">{item.challenge}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-[#C7008A] uppercase tracking-wider block mb-1">
                      Solution
                    </span>
                    <p className="text-slate-300">{item.solution}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      Technology
                    </span>
                    <p className="text-slate-300 font-mono text-[11px]">{item.tech}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="font-semibold text-fuchsia-300 uppercase tracking-wider block mb-1">
                      Outcome
                    </span>
                    <p className="text-white font-medium">{item.outcome}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 group-hover:text-pink-400 transition-colors"
                >
                  <span>Explore this case study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button href="#contact" variant="outline" size="md">
            <span>Discuss Your Project Requirements</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

