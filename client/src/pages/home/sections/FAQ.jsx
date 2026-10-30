import React, { useState } from 'react'
import SectionLabel from '../../../components/ui/SectionLabel'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)

  const faqs = [
    {
      q: 'What services does KAK Instant Solutions provide?',
      a: 'KAK Instant Solutions provides custom software engineering, scalable web and native mobile applications, AI-powered automation and workflow bots, cloud architecture, CRM and ERP implementations, IT consulting, SEO, and 24/7 application maintenance.',
    },
    {
      q: 'Does KAK develop custom software from scratch?',
      a: 'Yes. Custom software development is our primary core competency. We design, build, and deploy tailor-made architectures tailored specifically to your organizational workflows, security policies, and scaling milestones.',
    },
    {
      q: 'Does KAK provide AI and automation solutions?',
      a: 'Absolutely. We build practical AI applications including custom LLM integrations, document ingestion pipelines, internal enterprise chatbots, and robotic process automation (RPA) systems that eliminate repetitive operational overhead.',
    },
    {
      q: 'Does KAK work with startups and growing SMEs?',
      a: 'Yes. We partner with ambitious startups to launch resilient MVPs swiftly, as well as mid-sized and enterprise clients seeking to modernize their mission-critical legacy infrastructure.',
    },
    {
      q: 'Does KAK provide ongoing support after delivery?',
      a: 'Yes. We offer continuous application support, SLA monitoring, security audits, cloud infrastructure optimization, and progressive feature iteration post-launch.',
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
    <section id="faq" className="py-24 bg-[#060609] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel number="10" text="FAQ" />
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Answers to{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-[#C7008A] bg-clip-text text-transparent">
              common questions.
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Everything you need to know about partnering with KAK Instant Solutions.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-semibold text-white text-base sm:text-lg">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-300 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#C7008A] bg-[#C7008A]/10' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-400 text-sm leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

