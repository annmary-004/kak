import React from 'react'
import { ArrowRight, Cpu, Cloud, Code, ShieldCheck } from 'lucide-react'
import Button from '../../../components/ui/Button'
import { editableImages } from '../content/homeContent'

export default function Hero() {
  const capabilityBar = [
    { label: 'Software Engineering', icon: Code },
    { label: 'AI & Automation', icon: Cpu },
    { label: 'Cloud Solutions', icon: Cloud },
    { label: 'Enterprise Technology', icon: ShieldCheck },
  ]

  return (
    <section className="relative overflow-hidden bg-[#07112B] text-white">
      <div className="absolute inset-0">
        <img src={editableImages.hero} alt="Modern city technology background" className="h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07112B] via-[#07112B]/88 to-[#07112B]/32" />
        <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#C193CB] via-[#E0B0E7] to-[#C193CB]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid min-h-[540px] items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.28em] text-[#E0B0E7]">
              Software & Technology Solutions
            </p>
            <h1 className="mb-5 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Engineering Digital Solutions for the{' '}
              <span className="text-[#E0B0E7]">Modern Enterprise.</span>
            </h1>
            <p className="mb-8 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
              KAK Instant Solutions helps businesses build, modernize, and automate digital operations through software engineering, AI-powered automation, cloud technologies, and scalable enterprise solutions.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="#capabilities" variant="primary" size="md">
                <span>Explore Solutions</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#contact" variant="secondary" size="md">
                <span>Talk to Our Team</span>
              </Button>
            </div>
          </div>

          <div className="justify-self-end rounded-sm border border-white/15 bg-[#07112B]/70 p-7 shadow-2xl backdrop-blur-md max-w-sm">
            <p className="text-sm font-bold leading-6 text-white">
              Technology. Simplified. Business. Transformed.
            </p>
            <div className="mt-4 h-1 w-14 rounded-full bg-[#E0B0E7]" />
          </div>
        </div>

        <div className="grid gap-3 border-t border-white/15 pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilityBar.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="flex items-center gap-2 rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 backdrop-blur">
                <Icon className="h-4 w-4 text-[#E0B0E7]" />
                <span>{item.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
