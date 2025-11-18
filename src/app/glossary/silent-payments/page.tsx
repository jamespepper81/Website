// src/app/glossary/silent-payments/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Eye, Shield, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { BackgroundBeams } from '@/components/ui/background-beams';

export default function SilentPaymentsGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 py-12 md:py-20 lg:py-24 relative overflow-hidden">
        <BackgroundBeams intensity="subtle" />
        <div className="container max-w-4xl mx-auto px-4 md:px-6 relative z-10">
           <Button variant="ghost" asChild className="mb-8">
            <Link href="/glossary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Glossary
            </Link>
          </Button>
          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-4 text-gradient-title">
              What Are Silent Payments?
            </h1>
            <p className="text-lg text-muted-foreground font-normal">
              Silent Payments (BIP 352) is a protocol that allows users to publish a single, static <Link href="/glossary/address" className="text-primary hover:underline">address</Link> that can receive unlimited payments, with each payment going to a unique on-chain address. This dramatically improves <Link href="/glossary/transaction-privacy" className="text-primary hover:underline">privacy</Link> without requiring interactive communication.
            </p>

            <Card className="my-6 bg-secondary/30">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <Eye className="mr-2 h-6 w-6 text-primary" />
                    Reusable Without Compromise
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    Unlike traditional addresses which should never be reused, a silent payment address can be shared publicly (in a profile, on a website) without linking transactions together on the <Link href="/glossary/blockchain" className="text-primary hover:underline">blockchain</Link>. Each sender generates a unique destination address using the recipient's static identifier.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-gradient-title">
              Key Benefits
            </h2>

             <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Shield className="mr-2 h-6 w-6 text-primary" />
                        Enhanced Privacy
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Silent payments eliminate address reuse privacy issues while requiring no sender-recipient interaction. Observers cannot link payments to the same recipient unless they control the recipient's keys.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Sparkles className="mr-2 h-6 w-6 text-primary" />
                        User-Friendly
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Recipients can share one identifier for all payments, simplifying donation buttons, public profiles, and recurring payments while maintaining strong privacy guarantees. No need to generate new addresses for each payment.
                    </p>
                </div>
            </div>
            
            <p className="text-muted-foreground mt-8 font-normal">
             Silent payments work with <Link href="/glossary/taproot" className="text-primary hover:underline">Taproot</Link> and are designed to be <Link href="/glossary/wallet" className="text-primary hover:underline">wallet</Link>-compatible with minimal changes. While still gaining adoption, they represent a significant advancement in making Bitcoin privacy more accessible and practical for everyday users.
            </p>
          </article>
        </div>
      </main>
      <Footer onPrivacyClick={openPrivacyModal} onTermsClick={openTermsModal} />
      <PrivacyPolicyModal isOpen={activeModal === 'privacy'} onOpenChange={closeModal} />
      <TermsOfServiceModal 
        isOpen={activeModal === 'terms'} 
        onOpenChange={closeModal}
        onPrivacyClick={openPrivacyModal} 
      />
    </div>
  );
}
