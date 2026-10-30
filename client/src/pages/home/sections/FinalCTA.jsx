import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import Button from '../../../components/ui/Button'

export default function FinalCTA() {
  return (
    <section className="kak-final-cta py-24 relative overflow-hidden bg-gradient-to-br from-[#2D004B] via-[#4A0072] to-[#C7008A] text-white">
      {/* Decorative background glows and elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
          <Sparkles className="w-3.5 h-3.5 text-pink-300" />
          <span className="text-xs font-bold tracking-widest uppercase text-pink-100">
            Technology. Simplified. Business. Transformed.
          </span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-6">
          Ready to transform your business with technology?
        </h2>

        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Partner with KAK Instant Solutions to engineer scalable digital systems, automate workflows, and outpace competition.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="#contact" variant="dark" size="lg" className="w-full sm:w-auto shadow-2xl">
            <span>Let's Talk</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button href="#services" variant="secondary" size="lg" className="w-full sm:w-auto !border-white/30 hover:!bg-white/20">
            <span>Explore Services</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

