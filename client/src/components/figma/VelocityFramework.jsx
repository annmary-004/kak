import React from 'react'
import { ArrowRight, Check } from 'lucide-react'

export default function VelocityFramework({ onOpenSchedule }) {
  const stages = [
    {
      number: '01',
      title: 'Discovery & Architecture',
      description: 'Threat assessment and ROI feasibility, before the first line of code.',
      outcome: 'A validated blueprint',
      isCompleted: false,
    },
    {
      number: '02',
      title: 'Rapid Prototyping',
      description: '14-day delivery. Validate the core experience with working software.',
      outcome: 'A production-minded prototype',
      isCompleted: false,
    },
    {
      number: '03',
      title: 'Zero-Loss Migration',
      description: 'Canary deployments and shadow traffic replay. Transition with confidence.',
      outcome: 'A seamless cutover',
      isCompleted: false,
    },
    {
      number: '04',
      title: 'Autonomous Scaling',
      description: 'CI/CD and 24/7 reliability. Continuously optimize as demand evolves.',
      outcome: 'Always-on performance',
      isCompleted: true,
    },
  ]

  return (
    <section id="methodology" className="w-full bg-[#FAFCFF] py-16 sm:py-24 border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1D4ED8] text-xs font-semibold tracking-tight mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
            <span>Execution Methodology</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-slate-900 leading-tight">
            The 4–Stage <span className="text-[#0066FF]">Instant Velocity</span> Framework
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-normal">
            From first principles to production. A disciplined path to enterprise impact.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((stage, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top: Stage Number & Status Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl sm:text-5xl font-black text-[#0066FF] tracking-tight">
                    {stage.number}
                  </span>

                  {stage.isCompleted ? (
                    <div className="w-8 h-8 rounded-full bg-[#EFF6FF] text-[#0066FF] flex items-center justify-center">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 group-hover:text-[#0066FF] group-hover:bg-[#EFF6FF] flex items-center justify-center transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-[#0066FF] transition-colors">
                  {stage.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-8">
                  {stage.description}
                </p>
              </div>

              {/* Bottom Outcome Tag */}
              <div className="pt-5 border-t border-slate-100">
                <p className="text-xs font-medium text-slate-500">
                  <span className="text-slate-400">Outcome •</span> {stage.outcome}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Ready to architect your high-velocity future?
            </h3>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Connect directly with our principal engineers in Bangalore.
            </p>
          </div>
          <button
            onClick={onOpenSchedule}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold text-base shadow-sm hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Schedule Discovery Session</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  )
}
