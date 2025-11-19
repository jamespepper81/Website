// src/app/learn/page.tsx
"use client";

import { useState } from 'react';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  ArrowRight, 
  Network, 
  Lock, 
  Users, 
  Coins, 
  TrendingUp, 
  Shield,
  FileText,
  ExternalLink,
  BookOpen,
  GitBranch,
  Database,
  Zap
} from 'lucide-react';

export default function LearnPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "BitSleuth Bitcoin Educational Learning Hub",
            "description": "Learn how Bitcoin works through comprehensive educational content, visual guides, and detailed explanations of blockchain technology.",
            "url": "https://www.bitsleuth.ai/learn",
            "about": {
              "@type": "Thing",
              "name": "Bitcoin",
              "description": "Decentralized digital currency and peer-to-peer payment network"
            },
            "educationalLevel": "Beginner to Advanced",
            "teaches": [
              "Bitcoin fundamentals",
              "Blockchain technology",
              "Cryptocurrency transactions",
              "Bitcoin security",
              "Digital wallet management"
            ]
          })
        }}
      />
      
      <div className="flex flex-col min-h-dvh bg-background">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="edge-to-edge-section py-16 md:py-20 lg:py-24 bg-gradient-to-br from-background to-muted dark:to-black text-foreground relative overflow-hidden">
            <BackgroundBeams />
            <div className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10">
              <div className="space-y-6 text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                  <BookOpen className="mr-2 h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Educational Learning Hub</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gradient-title pb-2">
                  How Bitcoin Works
                </h1>
                <p className="text-xl text-muted-foreground md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto">
                  Understand the revolutionary technology behind the world's first decentralized digital currency
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button size="lg" asChild>
                    <Link href="#basics">
                      Start Learning
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/documents/bitcoin.pdf" target="_blank" rel="noopener noreferrer">
                      <FileText className="mr-2 h-5 w-5" />
                      Read the Whitepaper
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Bitcoin Basics Section */}
          <section id="basics" className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
            <BackgroundBeams intensity="subtle" />
            <div className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-gradient-title">
                  What Is Bitcoin?
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Bitcoin is a revolutionary <Link href="/glossary/p2p" className="text-primary hover:underline font-semibold">peer-to-peer</Link> electronic cash system that operates without a central authority.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="bg-gradient-to-br from-background to-secondary/20 border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Network className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">The Network</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Bitcoin (with capital 'B') refers to the entire network and protocol. It's a decentralized system running on thousands of computers worldwide.
                    </p>
                    <p className="text-muted-foreground">
                      The <Link href="/glossary/blockchain" className="text-primary hover:underline">blockchain</Link> serves as a public ledger, recording every transaction in an immutable chain of blocks.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-background to-secondary/20 border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Coins className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">The Currency</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      bitcoin (with lowercase 'b') refers to the digital currency units. Each <Link href="/glossary/btc" className="text-primary hover:underline">BTC</Link> can be divided into 100 million smaller units called satoshis.
                    </p>
                    <p className="text-muted-foreground">
                      With a fixed supply cap of 21 million bitcoins, it's designed to be scarce and deflationary by nature.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <FileText className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">The Original Vision</h3>
                      <p className="text-muted-foreground mb-4">
                        In 2008, an individual or group using the pseudonym <span className="font-semibold text-foreground">Satoshi Nakamoto</span> published the Bitcoin whitepaper titled <span className="italic">"Bitcoin: A Peer-to-Peer Electronic Cash System"</span>.
                      </p>
                      <Button variant="outline" asChild>
                        <a href="/documents/bitcoin.pdf" target="_blank" rel="noopener noreferrer">
                          Read the Whitepaper
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-muted/50 to-background relative overflow-hidden">
            <BackgroundBeams intensity="subtle" />
            <div className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-gradient-title">
                  How Bitcoin Works
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Understanding the core mechanisms that make Bitcoin secure, decentralized, and revolutionary
                </p>
              </div>

              <div className="space-y-8">
                {/* Transactions */}
                <Card className="bg-background border-primary/20">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-[auto,1fr] gap-6 items-start">
                      <div className="p-4 rounded-xl bg-primary/10">
                        <Zap className="h-12 w-12 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-4">Transactions</h3>
                        <p className="text-muted-foreground mb-4">
                          When you send bitcoin, you're creating a transaction that transfers ownership from your <Link href="/glossary/wallet" className="text-primary hover:underline">wallet</Link> to another. Each transaction is digitally signed using your <Link href="/glossary/private-key" className="text-primary hover:underline">private key</Link>, proving you own the funds.
                        </p>
                        <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Database className="h-5 w-5 text-primary" />
                            Transaction Anatomy
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span><strong>Inputs:</strong> References to previous transactions (your <Link href="/glossary/utxo" className="text-primary hover:underline">UTXOs</Link>)</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span><strong>Outputs:</strong> New UTXOs created for recipients</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span><strong>Signature:</strong> Cryptographic proof of ownership using your <Link href="/glossary/signature" className="text-primary hover:underline">digital signature</Link></span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Mining and Consensus */}
                <Card className="bg-background border-primary/20">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-[auto,1fr] gap-6 items-start">
                      <div className="p-4 rounded-xl bg-primary/10">
                        <Shield className="h-12 w-12 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-4">Mining & Security</h3>
                        <p className="text-muted-foreground mb-4">
                          <Link href="/glossary/mining" className="text-primary hover:underline">Mining</Link> is the process of adding new transactions to the blockchain. Miners compete to solve complex mathematical puzzles, and the winner gets to add the next <Link href="/glossary/block" className="text-primary hover:underline">block</Link> of transactions.
                        </p>
                        <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-primary" />
                            Proof-of-Work
                          </h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            This computational work requires significant energy, making it extremely expensive to attack the network. The more <Link href="/glossary/hash-rate" className="text-primary hover:underline">hash rate</Link> (computing power) on the network, the more secure Bitcoin becomes.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Each block contains a reference to the previous block, creating an immutable chain. Changing historical data would require redoing all the computational work since that block—practically impossible.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Decentralization */}
                <Card className="bg-background border-primary/20">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-[auto,1fr] gap-6 items-start">
                      <div className="p-4 rounded-xl bg-primary/10">
                        <GitBranch className="h-12 w-12 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-4">Decentralization</h3>
                        <p className="text-muted-foreground mb-4">
                          Bitcoin operates on a <Link href="/glossary/p2p" className="text-primary hover:underline">peer-to-peer network</Link> of thousands of nodes (computers) worldwide. No single entity controls the network, making it censorship-resistant and resilient.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                            <h4 className="font-semibold mb-2">Full Nodes</h4>
                            <p className="text-sm text-muted-foreground">
                              Independently verify all transactions and blocks, ensuring network rules are followed.
                            </p>
                          </div>
                          <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                            <h4 className="font-semibold mb-2">No Central Authority</h4>
                            <p className="text-sm text-muted-foreground">
                              Consensus is reached through the proof-of-work mechanism, not by any governing body.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Cryptography */}
                <Card className="bg-background border-primary/20">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-[auto,1fr] gap-6 items-start">
                      <div className="p-4 rounded-xl bg-primary/10">
                        <Lock className="h-12 w-12 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-4">Cryptography</h3>
                        <p className="text-muted-foreground mb-4">
                          <Link href="/glossary/cryptography" className="text-primary hover:underline">Cryptography</Link> is fundamental to Bitcoin's security. It enables:
                        </p>
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            <span><strong className="text-foreground">Ownership verification</strong> through public-key cryptography without revealing private keys</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            <span><strong className="text-foreground">Transaction integrity</strong> via cryptographic hashes that make tampering evident</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            <span><strong className="text-foreground">Address generation</strong> from public keys, providing privacy and security</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Key Concepts Section */}
          <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
            <BackgroundBeams intensity="subtle" />
            <div className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-gradient-title">
                  Key Bitcoin Concepts
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Essential terminology to deepen your understanding of the Bitcoin ecosystem
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    term: 'Blockchain',
                    description: 'The immutable public ledger recording all Bitcoin transactions',
                    icon: Database,
                    slug: 'blockchain'
                  },
                  {
                    term: 'Private Key',
                    description: 'Your secret code that proves ownership and allows spending',
                    icon: Lock,
                    slug: 'private-key'
                  },
                  {
                    term: 'Wallet',
                    description: 'Software managing your keys and enabling Bitcoin transactions',
                    icon: Shield,
                    slug: 'wallet'
                  },
                  {
                    term: 'Transaction',
                    description: 'Transfer of bitcoin value between addresses on the network',
                    icon: Zap,
                    slug: 'utxo'
                  },
                  {
                    term: 'Mining',
                    description: 'Process of validating transactions and securing the network',
                    icon: TrendingUp,
                    slug: 'mining'
                  },
                  {
                    term: 'Peer-to-Peer',
                    description: 'Decentralized network where participants interact directly',
                    icon: Users,
                    slug: 'p2p'
                  },
                ].map((concept) => (
                  <Link key={concept.slug} href={`/glossary/${concept.slug}`} className="group">
                    <Card className="h-full hover:border-primary/50 hover:bg-secondary/20 transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <concept.icon className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {concept.term}
                          </h3>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {concept.description}
                        </p>
                        <div className="mt-4 flex items-center text-sm text-primary group-hover:underline">
                          Learn more
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button size="lg" asChild>
                  <Link href="/glossary">
                    Explore Full Glossary
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Getting Started Section */}
          <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary/5 to-background relative overflow-hidden">
            <BackgroundBeams intensity="subtle" />
            <div className="container max-w-4xl mx-auto px-4 md:px-6 relative z-10">
              <Card className="bg-background border-primary/30">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center space-y-6">
                    <h2 className="text-3xl font-bold sm:text-4xl text-gradient-title">
                      Ready to Get Started?
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Explore our tools to analyze Bitcoin wallets and manage your own with privacy-first solutions
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                      <Button size="lg" asChild>
                        <Link href="/analyzer">
                          <Shield className="mr-2 h-5 w-5" />
                          Wallet Analyzer
                        </Link>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                        <Link href="/wallet">
                          <Lock className="mr-2 h-5 w-5" />
                          Privacy Wallet
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
        
        <Footer onPrivacyClick={openPrivacyModal} onTermsClick={openTermsModal} />
        <PrivacyPolicyModal isOpen={activeModal === 'privacy'} onOpenChange={closeModal} />
        <TermsOfServiceModal 
          isOpen={activeModal === 'terms'} 
          onOpenChange={closeModal}
          onPrivacyClick={openPrivacyModal} 
        />
      </div>
    </>
  );
}
