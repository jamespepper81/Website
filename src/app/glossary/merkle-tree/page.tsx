// src/app/glossary/merkle-tree/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, GitBranch, Shield, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { BackgroundBeams } from '@/components/ui/background-beams';

export default function MerkleTreeGlossaryPage() {
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
              What Is a Merkle Tree?
            </h1>
            <p className="text-lg text-muted-foreground font-normal">
              A Merkle tree is a cryptographic data structure used in Bitcoin to efficiently summarize and verify all transactions in a <Link href="/glossary/block" className="text-primary hover:underline">block</Link>. It organizes transaction data into a tree of hashes, with the "Merkle root" at the top representing all transactions in the block.
            </p>

            <Card className="my-6 bg-secondary/30">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <GitBranch className="mr-2 h-6 w-6 text-primary" />
                    How It Works
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    Transactions are hashed in pairs repeatedly until a single hash remains - the Merkle root. This root is included in the block header, allowing anyone to verify that a specific transaction is included in a block without downloading all transaction data.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-gradient-title">
              Key Benefits
            </h2>

             <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Zap className="mr-2 h-6 w-6 text-primary" />
                        Efficient Verification
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Light clients can verify transactions using only the block headers and a small proof path, without needing to download the entire <Link href="/glossary/blockchain" className="text-primary hover:underline">blockchain</Link>. This is called Simplified Payment Verification (SPV).
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Shield className="mr-2 h-6 w-6 text-primary" />
                        Data Integrity
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Any change to a single transaction will completely alter the Merkle root, making tampering immediately detectable. This provides strong cryptographic proof of data integrity.
                    </p>
                </div>
            </div>
            
            <p className="text-muted-foreground mt-8 font-normal">
             Merkle trees are a fundamental component of Bitcoin's design, enabling efficient and secure transaction verification without requiring full nodes to share every detail with lightweight clients. This innovation allows Bitcoin to scale while maintaining security.
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
