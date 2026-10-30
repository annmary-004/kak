import React from 'react'
import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'

export default function FinalCTA() {
  return (
    <section className="py-16 bg-[#040918] text-white border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0088FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2">
              Technology. Simplified. Business. Transformed.
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Ready to build a smarter, digital future for your business?
            </p>
          </div>

          <div className="shrink-0">
            <Button href="#contact" variant="primary" size="lg">
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
