import React, { useState, useEffect } from 'react'
import { ArrowRight, ArrowUpRight, Shield, Zap, Activity, ChevronDown, CheckCircle2, Layers } from 'lucide-react'

export default function HeroSection({ onOpenSchedule }) {
  const [hoveredBar, setHoveredBar] = useState(null)
  const [chartBars, setChartBars] = useState([
    18, 22, 28, 25, 34, 30, 42, 48, 45, 52, 60, 58, 65, 72, 70, 78, 85, 82, 90, 94, 98, 92, 96, 100
  ])

  // Subtle real-time oscillation for live feel
  useEffect(() => {
    const interval = setInterval(() => {
      setChartBars(prev => {
        const next = [...prev]
        const lastIdx = next.length - 1
        const delta = (Math.random() - 0.45) * 4
        next[lastIdx] = Math.max(88, Math.min(100, Math.round(next[lastIdx] + delta)))
        return next
      })
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full bg-white pt-10 sm:pt-14 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-4">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1D4ED8] text-xs font-semibold tracking-tight mb-8 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
              <span>Established 2021 • Bangalore Technology Headquarters</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold tracking-[-0.03em] leading-[1.12] text-slate-900 mb-6">
              <span>"Architecting Scalable</span><br />
              <span className="text-[#0066FF]">Custom Software,</span><br />
              <span className="text-[#0066FF]">Cloud & Digital</span><br />
              <span className="text-[#0066FF]">solutions"</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed mb-10">
              From intelligent automation to resilient cloud ecosystems, we engineer the
              backbone of your next era. Built in Bangalore. Designed for global scale.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-6 mb-14">
              <button
                onClick={onOpenSchedule}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold text-[15px] shadow-sm hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-200 cursor-pointer"
              >
                <span>Build Your Next Advantage</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#ecosystem"
                className="inline-flex items-center gap-2 px-3 py-3 text-slate-800 hover:text-[#0066FF] font-semibold text-[15px] transition-colors"
              >
                <span>Explore Our Expertise</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Three Metrics */}
            <div className="w-full max-w-lg grid grid-cols-3 gap-6 pt-6 border-t border-slate-100">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  +4.8x
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                  Velocity
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  99.999%
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                  SLA
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  12ms
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                  Latency
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Telemetry Window Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Top Floater Label: Enterprise-ready. Always. */}
            <div className="flex justify-end mb-3">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm text-xs">
                <Shield className="w-4 h-4 text-[#0066FF]" />
                <div className="flex flex-col text-left">
                  <span className="font-bold text-slate-900">Enterprise-ready. Always.</span>
                  <span className="text-[11px] text-slate-400">Enterprise level workflows</span>
                </div>
              </div>
            </div>

            {/* Main Window Card */}
            <div className="relative bg-white rounded-3xl border border-slate-200/90 shadow-2xl shadow-blue-900/5 p-6 sm:p-7 overflow-visible">
              
              {/* Window Top Controls */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                  <span className="text-xs font-semibold text-slate-700 ml-2">Live Neural Telemetry Core</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-[11px] font-bold text-[#0066FF]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-ping"></span>
                  <span>LIVE</span>
                </div>
              </div>

              {/* Sub-header */}
              <div className="pt-4 pb-4 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                    PRODUCTION ENVIRONMENT
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                    Enterprise intelligence, online.
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#0066FF]">
                  <Layers className="w-4 h-4" />
                </div>
              </div>

              {/* 2 Stat Boxes */}
              <div className="grid grid-cols-2 gap-3.5 mb-5">
                
                {/* Nodes Box */}
                <div className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs font-medium text-slate-500">
                    <span>Nodes</span>
                    <span className="w-2 h-2 rounded-full bg-[#0066FF]"></span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 my-1">
                    48
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    38 systems operational
                  </div>
                </div>

                {/* Ingestion Box */}
                <div className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs font-medium text-slate-500">
                    <span>Ingestion</span>
                    <Zap className="w-3.5 h-3.5 text-[#0066FF]" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 my-1">
                    14,200/s
                  </div>
                  <div className="text-[11px] text-emerald-600 font-semibold">
                    +24.18% peak real-time
                  </div>
                </div>

              </div>

              {/* Bar Chart Section */}
              <div className="bg-[#FAFCFF] border border-blue-50 rounded-2xl p-4 relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-slate-700">Distributed throughput mesh</span>
                  <div className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-md">
                    <span>Last 24 hours</span>
                    <ChevronDown className="w-3 h-3 text-slate-400" />
                  </div>
                </div>

                {/* Vertical Bars */}
                <div className="h-32 flex items-end justify-between gap-1 sm:gap-1.5 pt-2 px-1 relative">
                  {chartBars.map((height, idx) => {
                    const isLast = idx >= chartBars.length - 3
                    return (
                      <div
                        key={idx}
                        className="flex-1 flex flex-col items-center group relative cursor-pointer"
                        onMouseEnter={() => setHoveredBar({ idx, height })}
                        onMouseLeave={() => setHoveredBar(null)}
                      >
                        {/* Tooltip on hover */}
                        {hoveredBar?.idx === idx && (
                          <div className="absolute -top-8 bg-slate-900 text-white text-[10px] font-mono py-0.5 px-1.5 rounded whitespace-nowrap z-20 shadow-md">
                            {(height * 142).toLocaleString()} evt/s
                          </div>
                        )}
                        <div
                          className={`w-full rounded-t-sm transition-all duration-300 ${
                            isLast
                              ? 'bg-[#0066FF] shadow-sm shadow-blue-400/40'
                              : 'bg-[#60A5FA]/80 hover:bg-[#0066FF]'
                          }`}
                          style={{ height: `${height}%` }}
                        ></div>
                      </div>
                    )
                  })}
                </div>

                {/* Timeline axis */}
                <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono mt-2 pt-2 border-t border-slate-100">
                  <span>12:00</span>
                  <span>18:00</span>
                  <span>23:59</span>
                </div>
              </div>

              {/* Bottom Overlapping Floating Pills */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 bg-[#0066FF] text-white text-xs font-semibold px-3.5 py-2 rounded-xl shadow-lg shadow-blue-600/20">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Intelligence, deployed.</span>
                  <span className="text-[11px] opacity-80">48 nodes orchestrated</span>
                  <span className="bg-white/20 px-1.5 py-0.5 rounded text-[10px] font-mono">100%</span>
                </div>

                <div className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-2 rounded-xl border border-slate-200">
                  <span>+ Kubernetes</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
