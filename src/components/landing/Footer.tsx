import React from 'react';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Footer() {
  return (
    <footer className="pt-24 pb-12 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Massive CTA */}
        <GlassCard className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-500/20 py-16 text-center mb-24 group">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 group-hover:scale-[1.01] transition-transform duration-500">Let’s Take the Complexity Out of Your Accounting</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join hundreds of forward-thinking businesses. Book your free strategy session today.
          </p>
          <Link to="/contact">
            <Button className="btn-emerald h-14 px-10 text-lg">Book Free Consultation</Button>
          </Link>
        </GlassCard>
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-12">
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-bold text-white tracking-tighter">
              PRIDE<span className="text-emerald-500">ACCOUNTING</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Leading the way in premium international accounting services for the modern global economy.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500/20 transition-colors">
                <Linkedin className="h-5 w-5 text-slate-300" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500/20 transition-colors">
                <Twitter className="h-5 w-5 text-slate-300" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/services#accounting" className="hover:text-emerald-400 transition-colors">Outsourced Accounting</Link></li>
              <li><Link to="/services#tax" className="hover:text-emerald-400 transition-colors">Tax Compliance</Link></li>
              <li><Link to="/services#payroll" className="hover:text-emerald-400 transition-colors">Payroll Solutions</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Audit Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Locations</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-2"><MapPin className="h-3 w-3 text-emerald-500" /> Mauritius (HQ)</li>
              <li className="flex items-center gap-2"><MapPin className="h-3 w-3 text-emerald-500" /> London, UK</li>
              <li className="flex items-center gap-2"><MapPin className="h-3 w-3 text-emerald-500" /> South Africa</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-emerald-500" /> contact@prideaccounting.mu</li>
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-emerald-500" /> +230 460 0000</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">© 2024 Pride Accounting Services. All rights reserved.</p>
          <div className="flex gap-8 text-slate-500 text-sm">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <p className="text-slate-500 text-[10px] text-center max-w-xs">
            *Note: AI assistance is provided for informational purposes only. Request limits apply.
          </p>
        </div>
      </div>
    </footer>
  );
}