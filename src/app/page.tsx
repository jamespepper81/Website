"use client";

import { useState } from 'react';
import { Header } from '@/components/landing/Header';
import { EnhancedHomeHeroSection } from '@/components/landing/EnhancedHomeHeroSection';
import { EducationalSection } from '@/components/landing/EducationalSection';
import { AboutSection } from '@/components/landing/AboutSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { Footer } from '@/components/landing/Footer';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';

export default function Home() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const handlePrivacyChange = (open: boolean) => setActiveModal(open ? 'privacy' : null);
  const handleTermsChange = (open: boolean) => setActiveModal(open ? 'terms' : null);

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <EnhancedHomeHeroSection />
        <EducationalSection />
        <TestimonialsSection />
        <AboutSection />
      </main>
      <Footer onPrivacyClick={openPrivacyModal} onTermsClick={openTermsModal} />
      <PrivacyPolicyModal isOpen={activeModal === 'privacy'} onOpenChange={handlePrivacyChange} />
      <TermsOfServiceModal
        isOpen={activeModal === 'terms'}
        onOpenChange={handleTermsChange}
        onPrivacyClick={openPrivacyModal}
      />
    </div>
  );
}
