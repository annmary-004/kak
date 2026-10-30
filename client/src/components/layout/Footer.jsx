import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Globe, Linkedin, Youtube, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-white/10 pt-16 pb-10 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-14 border-b border-white/10">
          {/* Logo & Tagline Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <img
                src="/logo.png"
                alt="KAK Instant Solutions"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Technology. Simplified. Business. Transformed.
            </p>
          </div>

          {/* Column 1 - Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#why-kak" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#why-kak" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 2 - Solutions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#capabilities" className="hover:text-white transition-colors">Custom Software</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">AI & Automation</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Cloud Solutions</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Web & Mobile</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Enterprise Solutions</a></li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">IT Consulting</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Digital Marketing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Support & Maintenance</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Data & Analytics</a></li>
            </ul>
          </div>

          {/* Column 4 - Connect */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm mb-4">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0088FF] shrink-0 mt-0.5" />
                <span>Bengaluru, Karnataka, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#0088FF] shrink-0" />
                <a href="mailto:info@kakindia.in" className="hover:text-white transition-colors">
                  info@kakindia.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#0088FF] shrink-0" />
                <a href="https://www.kakindia.in" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  www.kakindia.in
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#0088FF] hover:bg-[#0088FF]/10 transition-colors">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#0088FF] hover:bg-[#0088FF]/10 transition-colors">
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#0088FF] hover:bg-[#0088FF]/10 transition-colors">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#0088FF] hover:bg-[#0088FF]/10 transition-colors">
                <Twitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 KAK Instant Solutions. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <a href="#" className="hover:text-slate-300 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
