import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { MapPin, CheckCircle2 } from 'lucide-react';
export function CompanySection() {
  const locations = [
    { city: 'Mauritius', detail: 'HQ & Strategic Hub', coordinates: 'Ebene Cybercity' },
    { city: 'London', detail: 'UK Compliance Center', coordinates: 'Canary Wharf' },
    { city: 'South Africa', detail: 'Regional Operations', coordinates: 'Cape Town' },
  ];
  const approachPoints = [
    'Real-time financial visibility through cloud accounting.',
    'Proactive tax advice tailored to your growth phase.',
    'Dedicated account managers who understand your industry.',
    'Seamless integration with your existing business tools.'
  ];
  return (
    <section className="py-24 space-y-32">
      {/* Our Approach */}
      <div id="approach" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">A Modern Approach to Traditional Excellence</h2>
            <div className="space-y-6">
              {approachPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0 mt-1" />
                  <p className="text-lg text-slate-300">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full" />
              <GlassCard className="relative p-0 overflow-hidden aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2022&auto=format&fit=crop" 
                  alt="Modern accounting office"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] to-transparent" />
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
      {/* Global Presence */}
      <div id="global" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard className="py-16 px-8 md:px-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full" />
          <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">International Presence</h2>
            <p className="text-slate-400">Strategically located to serve businesses across EMEA with local knowledge and global standards.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {locations.map((loc, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="text-center group"
              >
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="h-16 w-16 rounded-full bg-white/5 flex items-center justify-center relative border border-white/10 group-hover:border-emerald-500/50 transition-colors">
                    <MapPin className="h-8 w-8 text-emerald-400 group-hover:animate-bounce" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{loc.city}</h3>
                <p className="text-emerald-500/80 text-sm font-medium mb-1">{loc.detail}</p>
                <p className="text-slate-500 text-xs">{loc.coordinates}</p>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}