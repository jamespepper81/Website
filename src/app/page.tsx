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

  const openPrivacyModal = () => {
    console.log('Opening privacy modal');
    setActiveModal('privacy');
  };
  
  const openTermsModal = () => {
    console.log('Opening terms modal');
    setActiveModal('terms');
  };
  
  // Handler for modal open/close changes
  const handlePrivacyChange = (open: boolean) => {
    console.log('Privacy modal change:', open);
    setActiveModal(open ? 'privacy' : null);
  };
  
  const handleTermsChange = (open: boolean) => {
    console.log('Terms modal change:', open);
    setActiveModal(open ? 'terms' : null);
  };

  console.log('Active modal:', activeModal);

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
