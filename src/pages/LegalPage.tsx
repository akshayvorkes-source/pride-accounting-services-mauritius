import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import { AnimatedBackground } from '@/components/landing/AnimatedBackground';
interface LegalPageProps {
  title: string;
}
export function LegalPage({ title }: LegalPageProps) {
  const isPrivacy = title.toLowerCase().includes('privacy');
  return (
    <main className="relative min-h-screen bg-[#0B1120] text-slate-50 overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 relative z-10">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12 text-slate-300 leading-relaxed"
        >
          <header className="border-b border-white/10 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
            <p className="text-sm text-slate-500 italic">Last updated: May 2024</p>
          </header>
          <div className="space-y-10">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
              <p>
                Pride Accounting Services Mauritius ("we", "us", or "our") is committed to delivering excellence in international accounting. 
                {isPrivacy 
                  ? " This policy outlines our commitment to your privacy and the security of your financial data across our hubs in Mauritius, London, and South Africa."
                  : " These terms govern your use of our professional services and our digital platforms."
                }
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">{isPrivacy ? "2. Data Protection & GDPR" : "2. Service Engagement"}</h2>
              <p>
                {isPrivacy 
                  ? "In accordance with the Mauritius Data Protection Act 2017 and UK GDPR, we implement high-tier technical measures to secure your records. All data processing occurs on encrypted cloud environments with strict access controls."
                  : "Engagement with Pride Accounting constitutes an agreement to our professional standards. We provide specialized accounting, tax, and payroll solutions tailored to your specific jurisdiction's requirements."
                }
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">3. Professional Liability & Standards</h2>
              <p>
                Our services are performed to the highest international accounting standards (IFRS). We maintain professional indemnity insurance across all active jurisdictions including Mauritius, the UK, and South Africa. Clients retain responsibility for the primary documentation accuracy.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">4. Confidentiality</h2>
              <p>
                Confidentiality is fundamental to our practice. We maintain strict non-disclosure protocols. Information is only shared with regulatory bodies (MRA, HMRC, SARS) when legally mandated or specifically authorized by the client.
              </p>
            </section>
            <section className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-4">
              <h3 className="text-lg font-bold text-emerald-400">Jurisdictional Compliance Matrix</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="space-y-2">
                  <p className="font-bold text-white">Mauritius</p>
                  <p className="text-slate-400">41 Avenue Taher, Rose Hill. Compliance: Companies Act 2001.</p>
                </div>
                <div className="space-y-2">
                  <p className="font-bold text-white">United Kingdom</p>
                  <p className="text-slate-400">London Hub. Compliance: HMRC VAT & Corporation Tax protocols.</p>
                </div>
                <div className="space-y-2">
                  <p className="font-bold text-white">South Africa</p>
                  <p className="text-slate-400">Regional Operations. Compliance: SARS & CIPC regulations.</p>
                </div>
              </div>
            </section>
          </div>
        </motion.article>
      </div>
      <Footer />
    </main>
  );
}