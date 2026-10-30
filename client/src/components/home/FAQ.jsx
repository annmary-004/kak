import React, { useState } from 'react'
import SectionLabel from '../ui/SectionLabel'
import { Plus, Minus, ArrowRight } from 'lucide-react'
import Button from '../ui/Button'

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)

  const faqs = [
    {
      q: 'What services does KAK Instant Solutions provide?',
      a: 'KAK Instant Solutions provides custom software engineering, scalable web and native mobile applications, AI-powered automation and workflow bots, cloud architecture, CRM and ERP implementations, IT consulting, SEO, and 24/7 application maintenance.',
    },
    {
      q: 'Do you work with startups and SMEs?',
      a: 'Yes. We partner with ambitious startups to launch resilient MVPs swiftly, as well as mid-sized and enterprise clients seeking to modernize their mission-critical legacy infrastructure.',
    },
    {
      q: 'Can KAK build custom software?',
      a: 'Yes. Custom software development is our primary core competency. We design, build, and deploy tailor-made architectures tailored specifically to your organizational workflows, security policies, and scaling milestones.',
    },
    {
      q: 'Do you provide ongoing support?',
      a: 'Yes. We offer continuous application support, SLA monitoring, security audits, cloud infrastructure optimization, and progressive feature iteration post-launch.',
    },
    {
      q: 'Does KAK provide AI and automation solutions?',
      a: 'Absolutely. We build practical AI applications including custom LLM integrations, document ingestion pipelines, internal enterprise chatbots, and robotic process automation (RPA) systems that eliminate repetitive operational overhead.',
    },
    {
      q: 'Where is KAK Instant Solutions based?',
      a: 'KAK Instant Solutions is headquartered in Bengaluru, Karnataka, India, and delivers cutting-edge technology solutions for forward-thinking clients across India and globally.',
    },
  ]

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx)
  }

  return (
    <section id="faq" className="py-24 bg-white text-slate-900 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <SectionLabel number="10" text="FAQ" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Questions, answered.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Find answers to common questions about our services, process, technology and more.
            </p>
            <div className="pt-2">
              <Button href="#contact" variant="primary" size="md">
                <span>More on FAQ</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-200 hover:border-[#0088FF]/40"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-slate-900 text-sm sm:text-base">
                      {faq.q}
                    </span>
                    <div className="text-[#0088FF] shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
