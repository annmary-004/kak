import React, { useState } from 'react'
import SectionLabel from '../ui/SectionLabel'
import { MapPin, Mail, Globe, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react'
import Button from '../ui/Button'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Custom Software',
    message: '',
  })

  const [status, setStatus] = useState({ loading: false, success: false, error: null })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: null })

    const baseUrl = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace(/\/$/, '') : ''
    try {
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()

      if (res.ok && data.success) {
        setStatus({ loading: false, success: true, error: null })
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          service: 'Custom Software',
          message: '',
        })
      } else {
        setStatus({
          loading: false,
          success: false,
          error: data.message || 'Something went wrong. Please try again.',
        })
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: true,
        error: null,
      })
    }
  }

  const services = [
    'Custom Software',
    'Web Development',
    'Mobile App Development',
    'AI & Automation',
    'Cloud Solutions',
    'CRM / ERP Solutions',
    'IT Consulting',
    'Digital Marketing & SEO',
    'Other Technology Inquiry',
  ]

  return (
    <section id="contact" className="py-24 bg-white text-slate-900 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <SectionLabel number="11" text="LET'S BUILD" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                Let's build what's next.
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Tell us about your business challenges, technology requirements or project ideas. Our team will get back to you with the right solution.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 text-slate-700 text-sm">
                <div className="w-9 h-9 rounded-full bg-[#0088FF]/10 flex items-center justify-center text-[#0088FF] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Bengaluru, Karnataka, India</span>
              </div>

              <div className="flex items-center gap-3 text-slate-700 text-sm">
                <div className="w-9 h-9 rounded-full bg-[#0088FF]/10 flex items-center justify-center text-[#0088FF] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:info@kakindia.in" className="hover:text-[#0088FF] transition-colors">
                  info@kakindia.in
                </a>
              </div>

              <div className="flex items-center gap-3 text-slate-700 text-sm">
                <div className="w-9 h-9 rounded-full bg-[#0088FF]/10 flex items-center justify-center text-[#0088FF] shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <a href="https://www.kakindia.in" target="_blank" rel="noreferrer" className="hover:text-[#0088FF] transition-colors">
                  www.kakindia.in
                </a>
              </div>
            </div>

            {/* Logo Display on Left */}
            <div className="pt-6">
              <img
                src="/logo.png"
                alt="KAK Instant Solutions"
                className="h-16 w-auto object-contain opacity-90"
              />
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
              {status.success && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Thank you! Your inquiry has been submitted. Our team will contact you shortly.</span>
                </div>
              )}

              {status.error && (
                <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  <span>{status.error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Name <span className="text-[#0088FF]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0088FF] focus:ring-1 focus:ring-[#0088FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Company Name <span className="text-[#0088FF]">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Acme Corp"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0088FF] focus:ring-1 focus:ring-[#0088FF]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      What service are you looking for?
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#0088FF] focus:ring-1 focus:ring-[#0088FF]"
                    >
                      {services.map((svc, idx) => (
                        <option key={idx} value={svc}>
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Phone Number <span className="text-[#0088FF]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0088FF] focus:ring-1 focus:ring-[#0088FF]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Business Email <span className="text-[#0088FF]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@acme.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0088FF] focus:ring-1 focus:ring-[#0088FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Tell us about your project <span className="text-[#0088FF]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your objectives, timeline, or current technical bottlenecks..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0088FF] focus:ring-1 focus:ring-[#0088FF] resize-none"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center !py-4"
                    disabled={status.loading}
                  >
                    <span>{status.loading ? 'Sending Inquiry...' : 'Send a Conversation'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
