import React from 'react';
import { GlassCard } from '@/components/ui/glass-card';
import { LineChart, FileCheck, Wallet, ShieldCheck, Zap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
export function ServicesSection() {
  const services = [
    {
      title: 'Outsourced Accounting',
      description: 'Comprehensive financial reporting and bookkeeping tailored to international standards. Focus on your growth while we manage the numbers.',
      icon: LineChart,
      delay: 0.1
    },
    {
      title: 'Tax Compliance',
      description: 'Strategic tax planning and filing across multiple jurisdictions. We ensure your business remains compliant while optimizing tax efficiency.',
      icon: FileCheck,
      delay: 0.2
    },
    {
      title: 'Payroll Management',
      description: 'Scalable payroll solutions for global teams. Accuracy, punctuality, and compliance with local labor laws guaranteed.',
      icon: Wallet,
      delay: 0.3
    }
  ];
  const features = [
    { title: 'Global Expertise', icon: Globe, text: 'Serving clients in Mauritius, UK, and Africa.' },
    { title: 'Security First', icon: ShieldCheck, text: 'Bank-grade encryption and data protection.' },
    { title: 'Efficiency', icon: Zap, text: 'Automated workflows for faster reporting.' },
  ];
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold text-emerald-400 tracking-widest uppercase mb-3"
          >
            Our Core Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Specialized Solutions for Global Scale
          </motion.h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {services.map((service, idx) => (
            <GlassCard key={idx} delay={service.delay}>
              <div className="h-14 w-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <service.icon className="h-7 w-7 text-emerald-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </GlassCard>
          ))}
        </div>
        <div className="border-t border-white/10 pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Pride Accounting?</h3>
              <p className="text-lg text-slate-400 mb-8">
                We combine deep technical expertise with a modern, technology-driven approach to provide accounting services that are not just accurate, but actionable.
              </p>
              <div className="space-y-6">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                      <f.icon className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <h5 className="text-white font-semibold">{f.title}</h5>
                      <p className="text-slate-400 text-sm">{f.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <GlassCard className="h-48 flex flex-col justify-center text-center">
                  <p className="text-3xl font-bold text-emerald-400">15+</p>
                  <p className="text-slate-400 text-sm">Years Experience</p>
                </GlassCard>
                <GlassCard className="h-64 flex flex-col justify-center text-center">
                  <p className="text-3xl font-bold text-emerald-400">500+</p>
                  <p className="text-slate-400 text-sm">Clients Globally</p>
                </GlassCard>
              </div>
              <div className="space-y-4">
                <GlassCard className="h-64 flex flex-col justify-center text-center">
                  <p className="text-3xl font-bold text-emerald-400">3</p>
                  <p className="text-slate-400 text-sm">Global Offices</p>
                </GlassCard>
                <GlassCard className="h-48 flex flex-col justify-center text-center">
                  <p className="text-3xl font-bold text-emerald-400">99%</p>
                  <p className="text-slate-400 text-sm">Client Retention</p>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}