import React from 'react'
import SectionLabel from '../../../components/ui/SectionLabel'
import { ArrowRight, Clock, Calendar } from 'lucide-react'

export default function Insights() {
  const articles = [
    {
      title: 'The Role of AI in Modern Business Transformation',
      excerpt: 'Artificial intelligence is no longer a future concept. Businesses across industries are utilizing intelligent agents to automate repetitive operations, inform forecasting, and personalize customer lifecycles.',
      category: 'AI & Automation',
      readTime: '5 min read',
      date: 'October 2026',
    },
    {
      title: 'Cloud Migration: Key Architectural Considerations for Scalability',
      excerpt: 'Migrating legacy infrastructure to the cloud demands disciplined planning. We examine cost optimization, microservice isolation, network security, and database sharding techniques.',
      category: 'Cloud Engineering',
      readTime: '4 min read',
      date: 'September 2026',
    },
    {
      title: 'Engineering High-Performance Digital Experiences in 2026',
      excerpt: 'User interface performance directly dictates conversion velocity. How reactive architectures and clean state management drive superior digital retention.',
      category: 'Software Engineering',
      readTime: '6 min read',
      date: 'September 2026',
    },
  ]

  return (
    <section id="insights" className="py-24 bg-[#09090E] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <SectionLabel number="09" text="KAK INSIGHTS" />
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ideas shaping the{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-[#C7008A] bg-clip-text text-transparent">
                future of technology.
              </span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            Perspectives on software engineering, artificial intelligence, cloud modernization, and digital leadership from our practitioners.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {articles.map((item, idx) => (
            <article
              key={idx}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#C7008A]/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-6">
                  <span className="px-3 py-1 rounded-full font-bold uppercase tracking-wider bg-white/5 text-[#C7008A] border border-white/10">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {item.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-500 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.date}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300 group-hover:text-pink-400 transition-colors">
                  <span>Read article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

