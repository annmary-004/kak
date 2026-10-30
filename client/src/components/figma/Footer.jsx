import React from 'react'
import { ArrowUpRight, Mail, Phone, MapPin, Globe } from 'lucide-react'

export default function Footer({ onOpenSchedule }) {
  return (
    <footer className="w-full bg-white border-t border-slate-200 pt-16 pb-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-100">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 pr-0 lg:pr-8">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center p-0.5 border border-slate-200 shadow-sm bg-white">
                <img 
                  src="/kak-logo.png" 
                  alt="KAK Instant Solutions Logo" 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-[#073370] leading-tight">
                  KAK
                </span>
                <span className="text-[9.5px] font-bold tracking-[0.22em] text-[#0594FD] uppercase -mt-0.5">
                  INSTANT SOLUTIONS
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Architecting scalable custom software, cloud infrastructure, and intelligent digital platforms for high-growth enterprises worldwide.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#1E56B3] bg-[#F0F6FF] border border-[#D6E6FE] px-3.5 py-1.5 rounded-full inline-flex">
              <span className="w-2 h-2 rounded-full bg-[#1E6BFF]"></span>
              <span>Bangalore Technology Headquarters</span>
            </div>
          </div>

          {/* Column 1: Ecosystem */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-4">
              Ecosystem
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-slate-600">
              <li><a href="#services" className="hover:text-[#0066FF] transition-colors">Services & Capabilities</a></li>
              <li><a href="#ecosystem" className="hover:text-[#0066FF] transition-colors">Case Studies & Outcomes</a></li>
              <li><a href="#about" className="hover:text-[#0066FF] transition-colors">About KAK Instant Solutions</a></li>
              <li><a href="#architecture" className="hover:text-[#0066FF] transition-colors">Architecture Stack</a></li>
            </ul>
          </div>

          {/* Column 2: Framework */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-4">
              Velocity Framework
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-slate-600">
              <li><span className="text-slate-700">01. Discovery & Architecture</span></li>
              <li><span className="text-slate-700">02. Rapid Prototyping</span></li>
              <li><span className="text-slate-700">03. Zero-Loss Migration</span></li>
              <li><span className="text-slate-700">04. Autonomous Scaling</span></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-4">
              Connect
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0066FF] flex-shrink-0" />
                <span>Bangalore, Karnataka, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0066FF] flex-shrink-0" />
                <span>contact@kakinstantsolutions.com</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenSchedule}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0066FF] hover:underline"
                >
                  <span>Schedule Discovery Session</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} KAK Instant Solutions. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-800 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-800 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-800 transition-colors">Security Architecture</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
