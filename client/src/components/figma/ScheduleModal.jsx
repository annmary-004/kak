import React, { useState } from 'react'
import { X, CheckCircle, ArrowRight, Calendar, Clock, ShieldCheck } from 'lucide-react'

export default function ScheduleModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceInterest: 'Custom Software Development',
    message: '',
  })

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      // Auto close after 3 seconds if needed
    }, 3000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 sm:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Discovery Session Requested
            </h3>
            <p className="text-sm text-slate-600 mb-6 max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. Our principal engineering architect in Bangalore will contact you at <span className="font-semibold text-slate-800">{formData.email}</span> within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false)
                onClose()
              }}
              className="px-6 py-2.5 rounded-xl bg-[#0066FF] text-white font-semibold text-sm hover:bg-[#0052CC]"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#0066FF]"></span>
              <span className="text-xs font-bold text-[#0066FF] uppercase tracking-wider">
                Discovery Session
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Schedule Your Architecture Review
            </h3>
            <p className="text-sm text-slate-600 mt-1 mb-6">
              Connect with senior engineering leadership. Zero-commitment technical roadmap.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Company / Organisation
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Primary Capability of Interest
                </label>
                <select
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] bg-white text-slate-800"
                >
                  <option>Custom Software Development</option>
                  <option>Cloud Infrastructure & Orchestration</option>
                  <option>AI & Neural Intelligence Systems</option>
                  <option>Distributed Data Mesh & Streaming</option>
                  <option>Zero-Loss Legacy Migration</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Brief Project Overview
                </label>
                <textarea
                  rows="3"
                  placeholder="Tell us about your technical goals, target scale, or timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Confirm Discovery Session</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-slate-400 text-xs pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Confidential NDA protected technical discussion</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
