// src/app/glossary/bip39/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, FileText, Shield, Eye, BookOpen, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { generateCombinedGlossarySchema } from '@/lib/structured-data';
import { getGlossaryMeta } from '@/lib/glossary-metadata';

export default function BIP39GlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);

  // Add structured data for AEO optimization
  useEffect(() => {
    const meta = getGlossaryMeta('bip39');
    if (!meta) return;

    const structuredData = generateCombinedGlossarySchema('bip39', meta);
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    script.id = 'bip39-structured-data';
    document.head.appendChild(script);

    // Add meta tags dynamically for client component
    const updateMetaTags = () => {
      document.title = `${meta.title} | Bitcoin Glossary | BitSleuth`;
      
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', meta.description);

      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', meta.keywords.join(', '));
    };

    updateMetaTags();

    return () => {
      const existingScript = document.getElementById('bip39-structured-data');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 py-12 md:py-20 lg:py-24 relative overflow-hidden">
        <BackgroundBeams intensity="subtle" />
        <div className="container max-w-4xl mx-auto px-4 md:px-6 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li>
                <Link href="/glossary" className="hover:text-foreground transition-colors">
                  Bitcoin Glossary
                </Link>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li className="text-foreground font-medium">BIP39</li>
            </ol>
          </nav>

          <Button variant="ghost" asChild className="mb-8">
            <Link href="/glossary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Glossary
            </Link>
          </Button>

          <article itemScope itemType="https://schema.org/Article" className="prose prose-invert max-w-none">
            {/* Category Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4 not-prose">
              <BookOpen className="mr-2 h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Wallet Standards</span>
            </div>

            <h1 itemProp="headline" className="text-4xl font-bold mb-4 text-gradient-title">
              What Is BIP39 (Mnemonic Phrases)?
            </h1>
            <p className="text-lg text-muted-foreground font-normal">
              BIP39 (Bitcoin Improvement Proposal 39) is the standard for converting a random seed into a human-readable list of words, known as a mnemonic phrase or <Link href="/glossary/passphrase" className="text-primary hover:underline">passphrase</Link>. These 12, 18, or 24 words represent your entire <Link href="/glossary/wallet" className="text-primary hover:underline">wallet</Link> and can restore all your bitcoin.
            </p>

            <Card className="my-6 bg-secondary/30">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <FileText className="mr-2 h-6 w-6 text-primary" />
                    Example Mnemonic Phrase
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    "witch collapse practice feed shame open despair creek road again ice least" - These 12 words, selected from a standardized 2,048-word dictionary, encode enough entropy to securely generate all your keys.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-gradient-title">
              Key Characteristics
            </h2>

             <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Eye className="mr-2 h-6 w-6 text-primary" />
                        Human-Friendly Backup
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Instead of backing up complex hexadecimal strings, BIP39 lets you write down common English words. This makes backup and recovery far more accessible and less error-prone for everyday users.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Shield className="mr-2 h-6 w-6 text-primary" />
                        Strong Security
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      A 12-word phrase provides 128 bits of entropy, while a 24-word phrase provides 256 bits - both offering cryptographic security strong enough to protect your bitcoin indefinitely when stored properly.
                    </p>
                </div>
            </div>
            
            <p className="text-muted-foreground mt-8 font-normal">
             BIP39 works seamlessly with <Link href="/glossary/bip32" className="text-primary hover:underline">BIP32</Link> (HD wallets) to create a complete wallet recovery system. Your mnemonic phrase is converted into the master seed that generates all your <Link href="/glossary/private-key" className="text-primary hover:underline">private keys</Link> via BIP32's hierarchical derivation.
            </p>

            {/* Quick Facts Section */}
            <Card className="my-8 bg-primary/5 border-primary/20 not-prose">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold flex items-center mb-4 text-foreground">
                  <FileText className="mr-2 h-6 w-6 text-primary" />
                  Quick Facts
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span className="text-muted-foreground">Uses a standardized list of 2,048 words</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span className="text-muted-foreground">12 words provide 128 bits of entropy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span className="text-muted-foreground">24 words provide 256 bits of entropy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span className="text-muted-foreground">The final word includes a checksum for error detection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Related Terms Section */}
            <section className="mt-12 not-prose">
              <h3 className="text-2xl font-bold mb-6 flex items-center text-foreground">
                <LinkIcon className="mr-2 h-6 w-6 text-primary" />
                Related Terms
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/glossary/bip32" className="group">
                  <Card className="hover:border-primary/50 hover:bg-secondary/20 transition-colors">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-primary group-hover:underline">BIP32</h4>
                      <p className="text-sm text-muted-foreground mt-1">Hierarchical Deterministic Wallets</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/glossary/bip44" className="group">
                  <Card className="hover:border-primary/50 hover:bg-secondary/20 transition-colors">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-primary group-hover:underline">BIP44</h4>
                      <p className="text-sm text-muted-foreground mt-1">Multi-Account Hierarchy</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/glossary/passphrase" className="group">
                  <Card className="hover:border-primary/50 hover:bg-secondary/20 transition-colors">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-primary group-hover:underline">Passphrase</h4>
                      <p className="text-sm text-muted-foreground mt-1">Wallet Recovery Phrase</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/glossary/wallet" className="group">
                  <Card className="hover:border-primary/50 hover:bg-secondary/20 transition-colors">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-primary group-hover:underline">Wallet</h4>
                      <p className="text-sm text-muted-foreground mt-1">Bitcoin Wallet Basics</p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </section>
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
