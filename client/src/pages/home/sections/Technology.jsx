import React from 'react'
import SectionLabel from '../../../components/ui/SectionLabel'
import { Brain, Cloud, Globe, Smartphone, Database, Building2 } from 'lucide-react'

export default function Technology() {
  const categories = [
    {
      title: 'AI & Automation',
      icon: Brain,
      techs: ['OpenAI / Anthropic APIs', 'LangChain / LlamaIndex', 'Python', 'PyTorch', 'Vector Databases', 'RPA Tools'],
    },
    {
      title: 'Cloud Technologies',
      icon: Cloud,
      techs: ['AWS Ecosystem', 'Google Cloud', 'Microsoft Azure', 'Docker & Kubernetes', 'Terraform', 'Serverless'],
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      techs: ['React', 'Next.js', 'Node.js', 'Express', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'REST APIs'],
    },
    {
      title: 'Mobile Technologies',
      icon: Smartphone,
      techs: ['React Native', 'Flutter', 'Swift (iOS)', 'Kotlin (Android)', 'Progressive Web Apps'],
    },
    {
      title: 'Data & Analytics',
      icon: Database,
      techs: ['MongoDB', 'PostgreSQL', 'Redis', 'Kafka', 'Power BI / Metabase', 'Snowflake'],
    },
    {
      title: 'Enterprise Systems',
      icon: Building2,
      techs: ['Custom ERP/CRM', 'Microservices', 'OAuth2 / SAML', 'Stripe / Razorpay', 'API Gateways'],
    },
  ]

  return (
    <section id="technology" className="py-24 bg-[#060609] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel number="06" text="TECHNOLOGY" />
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Built with modern{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-[#C7008A] bg-clip-text text-transparent">
              enterprise technology.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We use modern technologies and development practices to create secure, scalable, and future-ready digital solutions.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((cat, idx) => {
            const Icon = cat.icon
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#C7008A]/40 hover:bg-white/[0.04] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C7008A] mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors">
                  {cat.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {cat.techs.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/5 text-slate-300 group-hover:border-white/15 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-slate-400">
            Stack agnosticism â€” we select precisely what serves your security, scale, and performance needs best.
          </p>
        </div>
      </div>
    </section>
  )
}

