import React from 'react'
import SectionLabel from '../../../components/ui/SectionLabel'
import {
  Code2,
  Globe,
  Smartphone,
  Bot,
  Cloud,
  LayoutGrid,
  Lightbulb,
  BarChart3,
  Wrench,
  ArrowRight,
} from 'lucide-react'
import Button from '../../../components/ui/Button'

export default function Services() {
  const serviceList = [
    {
      num: '01',
      title: 'Custom Software Development',
      desc: 'Scalable and secure software solutions designed around your business processes and requirements.',
      icon: Code2,
    },
    {
      num: '02',
      title: 'Web Application Development',
      desc: 'Modern web applications built for speed, exceptional usability, and robust business growth.',
      icon: Globe,
    },
    {
      num: '03',
      title: 'Mobile Application Development',
      desc: 'User-focused mobile experiences designed for modern iOS and Android enterprise workflows.',
      icon: Smartphone,
    },
    {
      num: '04',
      title: 'AI Business Automation',
      desc: 'Intelligent automation solutions that help organizations reduce repetitive work and amplify productivity.',
      icon: Bot,
    },
    {
      num: '05',
      title: 'Cloud Solutions',
      desc: 'Secure and scalable cloud technologies for modern digital operations, serverless, and hybrid cloud.',
      icon: Cloud,
    },
    {
      num: '06',
      title: 'ERP & CRM Solutions',
      desc: 'Connected business systems that help organizations manage operations, customers, and data seamlessly.',
      icon: LayoutGrid,
    },
    {
      num: '07',
      title: 'IT Consulting',
      desc: 'Strategic technology guidance aligned with your business milestones, technical roadmap, and growth plans.',
      icon: Lightbulb,
    },
    {
      num: '08',
      title: 'Digital Marketing & SEO',
      desc: 'Data-backed digital strategies designed to strengthen online visibility, customer engagement, and inbound growth.',
      icon: BarChart3,
    },
    {
      num: '09',
      title: 'Application Support & Maintenance',
      desc: '24/7 technical monitoring, security patching, and ongoing performance optimization for digital systems.',
      icon: Wrench,
    },
  ]

  return (
    <section id="services" className="py-24 bg-[#060609] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <SectionLabel number="04" text="OUR SERVICES" />
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Technology solutions for{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-[#C7008A] bg-clip-text text-transparent">
                real business challenges.
              </span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            From custom enterprise software to automation and cloud infrastructure, we deliver end-to-end digital solutions.
          </p>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {serviceList.map((svc, idx) => {
            const Icon = svc.icon
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#C7008A]/40 hover:bg-white/[0.04] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C7008A] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-slate-500">
                      {svc.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {svc.desc}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 group-hover:text-pink-400 transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Button href="#contact" variant="primary" size="md">
            <span>Schedule a Free Solution Discovery</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

