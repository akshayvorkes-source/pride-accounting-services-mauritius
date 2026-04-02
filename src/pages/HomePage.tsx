import React from 'react';
import { AnimatedBackground } from '@/components/landing/AnimatedBackground';
import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { ServicesSection } from '@/components/landing/ServicesSection';
import { CompanySection } from '@/components/landing/CompanySection';
import { Footer } from '@/components/landing/Footer';
import { Toaster } from '@/components/ui/sonner';
export function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#0B1120] text-slate-50 overflow-x-hidden selection:bg-emerald-500 selection:text-white">
      {/* Fixed Ambient Background */}
      <AnimatedBackground />
      {/* Navigation */}
      <Navbar />
      {/* Page Content */}
      <div className="relative z-10">
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <ServicesSection />
           <CompanySection />
        </div>
        <Footer />
      </div>
      <Toaster position="bottom-right" richColors />
    </main>
  );
}