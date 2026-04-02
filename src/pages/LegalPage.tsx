import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import { AnimatedBackground } from '@/components/landing/AnimatedBackground';
interface LegalPageProps {
  title: string;
}
export function LegalPage({ title }: LegalPageProps) {
  return (
    <main className="relative min-h-screen bg-[#0B1120] text-slate-50 overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 relative z-10">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-invert prose-emerald max-w-none"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-12 border-b border-white/10 pb-8">{title}</h1>
          <div className="space-y-12 text-slate-300 leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
              <p>
                Pride Accounting Services Mauritius ("we", "us", or "our") is committed to protecting your privacy and providing professional accounting services. This document outlines our practices regarding data collection and usage across our global offices in Beau Bassin-Rose Hill (Mauritius), London (UK), and South Africa.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">2. Data Protection & GDPR</h2>
              <p>
                In accordance with the Mauritius Data Protection Act 2017 and the UK GDPR, we implement robust technical and organizational measures to ensure the security of your financial records. All data is processed on secure, encrypted cloud servers.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">3. Professional Liability</h2>
              <p>
                All accounting services are performed to the highest international standards. We maintain professional indemnity insurance across all jurisdictions we operate in. Clients are responsible for the accuracy of primary documentation provided for bookkeeping.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">4. Confidentiality</h2>
              <p>
                Confidentiality is the cornerstone of our practice. We never disclose client information to third parties unless required by law (e.g., MRA, HMRC audits) or authorized explicitly by the client.
              </p>
            </section>
            <section className="space-y-4 bg-white/5 p-6 rounded-xl border border-white/10">
              <h3 className="text-lg font-bold text-emerald-400">Jurisdiction Compliance</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Mauritius: Primary office at 41 Avenue Taher, Beau Bassin-Rose Hill. Compliance with Companies Act 2001.</li>
                <li>UK: Registered for HMRC VAT and Corporation Tax filings.</li>
                <li>South Africa: Compliance with SARS regulations and Companies Act.</li>
              </ul>
            </section>
          </div>
          <p className="mt-16 text-sm text-slate-500 italic">Last updated: May 2024</p>
        </motion.article>
      </div>
      <Footer />
    </main>
  );
}