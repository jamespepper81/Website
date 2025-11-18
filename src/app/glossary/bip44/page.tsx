// src/app/glossary/bip44/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, FolderTree, Wallet, Shield } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { BackgroundBeams } from '@/components/ui/background-beams';

export default function BIP44GlossaryPage() {
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
              What Is BIP44 (Multi-Account Hierarchy)?
            </h1>
            <p className="text-lg text-muted-foreground font-normal">
              BIP44 (Bitcoin Improvement Proposal 44) extends <Link href="/glossary/bip32" className="text-primary hover:underline">BIP32</Link> by defining a standard hierarchical structure for organizing multiple accounts and cryptocurrencies within a single <Link href="/glossary/wallet" className="text-primary hover:underline">wallet</Link>. It provides a universal derivation path format that ensures compatibility across different wallet software.
            </p>

            <Card className="my-6 bg-secondary/30">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <FolderTree className="mr-2 h-6 w-6 text-primary" />
                    Standard Derivation Path
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    BIP44 uses the path structure: m / 44' / coin_type' / account' / change / address_index. For Bitcoin, this typically looks like m/44'/0'/0'/0/0, where each level serves a specific organizational purpose.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-gradient-title">
              Key Benefits
            </h2>

             <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Wallet className="mr-2 h-6 w-6 text-primary" />
                        Multiple Accounts
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      BIP44 lets you create separate accounts (like "savings", "spending", "business") all from one <Link href="/glossary/bip39" className="text-primary hover:underline">mnemonic phrase</Link>, each with its own set of <Link href="/glossary/address" className="text-primary hover:underline">addresses</Link>.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Shield className="mr-2 h-6 w-6 text-primary" />
                        Wallet Portability
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Since BIP44 is a widely adopted standard, you can restore your wallet in any BIP44-compatible software and it will automatically discover all your accounts and addresses using the same derivation paths.
                    </p>
                </div>
            </div>
            
            <p className="text-muted-foreground mt-8 font-normal">
             BIP44 works in harmony with <Link href="/glossary/bip32" className="text-primary hover:underline">BIP32</Link> and <Link href="/glossary/bip39" className="text-primary hover:underline">BIP39</Link> to provide a complete, standardized wallet system. Modern wallets like <Link href="/glossary/descriptor-wallet" className="text-primary hover:underline">descriptor wallets</Link> build upon these foundations with even more flexibility.
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
