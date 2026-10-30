import React from 'react'
import { ArrowRight, Code, Cpu, Cloud, ShieldCheck } from 'lucide-react'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-16 pb-20 overflow-hidden bg-[#040918] text-white">
      {/* Background Glows & Grid */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[600px] h-[500px] bg-[#0088FF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[400px] bg-[#00A3FF]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#0088FF] animate-pulse" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-slate-200">
                SOFTWARE & TECHNOLOGY SOLUTIONS
              </span>
            </div>

            {/* H1 Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              Engineering Digital Solutions for the{' '}
              <span className="text-[#0088FF]">
                Modern Enterprise.
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              <strong className="text-white font-semibold">KAK Instant Solutions</strong> helps businesses build, modernise and automate their digital operations through custom software, AI-powered automation, cloud technologies and enterprise solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="#capabilities" variant="primary" size="lg">
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                <span>Talk to Our Team</span>
              </Button>
            </div>

            {/* Capability Bar */}
            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-[#0088FF]" />
                <span>Software Engineering</span>
              </div>
              <span className="text-white/20 hidden sm:inline">|</span>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#0088FF]" />
                <span>AI & Automation</span>
              </div>
              <span className="text-white/20 hidden sm:inline">|</span>
              <div className="flex items-center gap-2">
                <Cloud className="w-4 h-4 text-[#0088FF]" />
                <span>Cloud Solutions</span>
              </div>
              <span className="text-white/20 hidden sm:inline">|</span>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0088FF]" />
                <span>Enterprise Technology</span>
              </div>
            </div>
          </div>

          {/* Right Hero Graphic */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            {/* Top Right Tagline */}
            <div className="w-full text-right mb-4">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold block">
                Technology. Simplified.
              </span>
              <span className="text-xs uppercase tracking-widest text-[#0088FF] font-bold block">
                Business. Transformed.
              </span>
            </div>

            {/* Futuristic Tech Frame with Glowing Holographic UI */}
            <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl bg-gradient-to-tr from-[#061433] via-[#0B2559] to-[#040C20] border border-[#0088FF]/30 p-6 shadow-2xl shadow-[#0088FF]/20 flex flex-col justify-between overflow-hidden group">
              {/* Decorative circuit lines */}
              <div className="absolute inset-0 bg-[radial-gradient(#0088FF_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />

              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[10px] font-mono text-sky-300 bg-[#0088FF]/20 px-2 py-0.5 rounded-full border border-[#0088FF]/30">
                  SYSTEM STATUS: OPTIMAL
                </div>
              </div>

              {/* Holographic Charts & Metrics */}
              <div className="relative z-10 space-y-3 my-4">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#0088FF]/20 flex items-center justify-center text-[#0088FF]">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">AI Automation Engine</div>
                      <div className="text-[10px] text-slate-400">Autonomous workflow sync</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400">99.98%</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#0088FF]/20 flex items-center justify-center text-[#0088FF]">
                      <Cloud className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Cloud Multi-Region</div>
                      <div className="text-[10px] text-slate-400">Zero latency cluster</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-sky-400">&lt; 14ms</span>
                </div>
              </div>

              <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Enterprise Live
                </span>
                <span className="font-mono text-slate-400">v2.4.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
