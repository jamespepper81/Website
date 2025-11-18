// src/app/glossary/psbt/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Users, Shield, Workflow } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { BackgroundBeams } from '@/components/ui/background-beams';

export default function PSBTGlossaryPage() {
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
              What Is a PSBT (Partially Signed Bitcoin Transaction)?
            </h1>
            <p className="text-lg text-muted-foreground font-normal">
              A PSBT (Partially Signed Bitcoin Transaction) is a standardized format (BIP 174) for Bitcoin transactions that allows multiple parties or devices to collaborate on creating and signing a transaction. It's particularly useful for multi-signature wallets, hardware wallets, and complex transaction workflows.
            </p>

            <Card className="my-6 bg-secondary/30">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <Workflow className="mr-2 h-6 w-6 text-primary" />
                    Transaction Workflow
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    A PSBT moves through stages: Creator (builds transaction structure), Updater (adds <Link href="/glossary/utxo" className="text-primary hover:underline">UTXO</Link> data), Signer (adds <Link href="/glossary/signature" className="text-primary hover:underline">signatures</Link>), and Finalizer (assembles complete transaction). Each role can be performed by different software or hardware.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-gradient-title">
              Key Use Cases
            </h2>

             <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Users className="mr-2 h-6 w-6 text-primary" />
                        Multi-Signature Coordination
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      PSBTs enable multiple signers to independently add their signatures to a transaction without needing to be online simultaneously. Each party can review and sign at their own pace.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Shield className="mr-2 h-6 w-6 text-primary" />
                        Hardware Wallet Integration
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Hardware wallets use PSBTs to safely sign transactions created by watch-only <Link href="/glossary/wallet" className="text-primary hover:underline">wallets</Link>. The unsigned PSBT is passed to the hardware device, signed offline, then returned for broadcast.
                    </p>
                </div>
            </div>
            
            <p className="text-muted-foreground mt-8 font-normal">
             PSBTs have become the standard for interoperability between Bitcoin wallets and signing devices. They work seamlessly with <Link href="/glossary/descriptor-wallet" className="text-primary hover:underline">descriptor wallets</Link> and support all address types including <Link href="/glossary/segwit" className="text-primary hover:underline">SegWit</Link> and <Link href="/glossary/taproot" className="text-primary hover:underline">Taproot</Link>.
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
