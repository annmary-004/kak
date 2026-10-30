import React from 'react'
import { Cpu, Cloud, Database, Layout } from 'lucide-react'

export default function TechArchitecture() {
  const stats = [
    { value: '500+', label: 'Deployments' },
    { value: '99.999%', label: 'SLA' },
    { value: '12ms', label: 'Global Latency' },
    { value: '0', label: 'Security Breaches' },
  ]

  const layers = [
    {
      icon: Cpu,
      category: 'INTELLIGENCE',
      title: 'AI & Intelligence Core',
      techs: ['PyTorch', 'Transformers', 'LangChain'],
      tagline: 'Context-aware enterprise intelligence',
    },
    {
      icon: Cloud,
      category: 'INFRASTRUCTURE',
      title: 'Cloud & Orchestration',
      techs: ['AWS · GCP', 'Kubernetes', 'Terraform'],
      tagline: 'Infrastructure as code. Resilience by design.',
    },
    {
      icon: Database,
      category: 'DATA PLANE',
      title: 'Distributed Data Mesh',
      techs: ['Kafka', 'Postgres', 'ClickHouse'],
      tagline: 'Real-time streams. Unified intelligence.',
    },
    {
      icon: Layout,
      category: 'EXPERIENCE',
      title: 'Client & Edge Interfaces',
      techs: ['Next.js 14', 'React', 'WebSockets'],
      tagline: 'Low-latency experiences at the edge',
    },
  ]

  return (
    <section id="architecture" className="w-full bg-white py-16 sm:py-24 border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1D4ED8] text-xs font-semibold tracking-tight mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
          <span>Technology Architecture</span>
        </div>

        {/* 2-Column Heading Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Engineered for Zero Downtime <br />
              <span className="text-[#0066FF]">& Global Scale</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              A composable, cloud-native foundation. Every layer designed for resilience, security and real-time performance.
            </p>
          </div>
        </div>

        {/* Dark Navy Pill Banner */}
        <div className="w-full bg-[#071732] rounded-3xl lg:rounded-full py-8 px-8 sm:px-14 mb-16 shadow-xl shadow-blue-950/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center justify-items-center">
            {stats.map((stat, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center text-center">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
                    {stat.label}
                  </span>
                </div>
                {idx < stats.length - 1 && (
                  <div className="hidden md:block w-px h-10 bg-slate-800/80 -mx-2"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 4 Architecture Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {layers.map((layer, idx) => {
            const Icon = layer.icon
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200/90 p-7 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top row: Icon & Category */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] flex items-center justify-center text-[#0066FF] group-hover:bg-[#0066FF] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10.5px] font-bold tracking-wider text-slate-400 uppercase">
                      {layer.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-5 group-hover:text-[#0066FF] transition-colors">
                    {layer.title}
                  </h3>

                  {/* Bullet Tech List */}
                  <ul className="space-y-3 mb-8">
                    {layer.techs.map((tech, tIdx) => (
                      <li key={tIdx} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]"></span>
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Caption Tag */}
                <div className="pt-5 border-t border-slate-100">
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                    {layer.tagline}
                  </p>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
