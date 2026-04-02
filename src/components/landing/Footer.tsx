import React from 'react';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
export function Footer() {
  return (
    <footer className="pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Massive CTA */}
        <GlassCard className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-500/20 py-16 text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let’s Take the Complexity Out of Your Accounting</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join hundreds of forward-thinking businesses. Book your free strategy session today.
          </p>
          <Button className="btn-emerald h-14 px-10 text-lg">Book Free Consultation</Button>
        </GlassCard>
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-12">
          <div className="space-y-6">
            <span className="text-2xl font-bold text-white tracking-tighter">
              PRIDE<span className="text-emerald-500">ACCOUNTING</span>
            </span>
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
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Outsourced Accounting</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Tax Compliance</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Payroll Solutions</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Audit Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Locations</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>Mauritius (HQ)</li>
              <li>London, UK</li>
              <li>South Africa</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-emerald-500" /> contact@prideaccounting.mu</li>
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-emerald-500" /> +230 460 0000</li>
              <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-emerald-500" /> Ebene Cybercity, Mauritius</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">© 2024 Pride Accounting Services. All rights reserved.</p>
          <div className="flex gap-8 text-slate-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <p className="text-slate-500 text-[10px] text-center max-w-xs">
            *Note: While we utilize AI-driven efficiencies, request limits apply across all systems to maintain service stability.
          </p>
        </div>
      </div>
    </footer>
  );
}