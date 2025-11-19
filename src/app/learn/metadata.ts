// src/app/learn/metadata.ts
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bitcoin Educational Learning Hub | How Bitcoin Works | BitSleuth',
  description: 'Learn how Bitcoin works through comprehensive educational content, visual guides, and detailed explanations. Understand blockchain technology, mining, transactions, and cryptocurrency fundamentals.',
  keywords: [
    'bitcoin education',
    'how bitcoin works',
    'bitcoin learning',
    'blockchain explained',
    'bitcoin tutorial',
    'cryptocurrency education',
    'bitcoin fundamentals',
    'learn bitcoin',
    'bitcoin guide',
    'bitcoin whitepaper',
    'bitcoin technology',
    'peer-to-peer cash',
    'bitcoin basics',
    'bitcoin for beginners'
  ],
  openGraph: {
    title: 'Bitcoin Educational Learning Hub | How Bitcoin Works',
    description: 'Learn how Bitcoin works through comprehensive educational content, visual guides, and detailed explanations of blockchain technology.',
    url: 'https://www.bitsleuth.ai/learn',
    type: 'website',
    siteName: 'BitSleuth',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bitcoin Educational Learning Hub | How Bitcoin Works',
    description: 'Learn how Bitcoin works through comprehensive educational content, visual guides, and detailed explanations of blockchain technology.',
  },
  alternates: {
    canonical: 'https://www.bitsleuth.ai/learn',
  },
};

export const learnStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.bitsleuth.ai/learn",
      "url": "https://www.bitsleuth.ai/learn",
      "name": "Bitcoin Educational Learning Hub | How Bitcoin Works",
      "description": "Learn how Bitcoin works through comprehensive educational content, visual guides, and detailed explanations of blockchain technology.",
      "isPartOf": {
        "@id": "https://www.bitsleuth.ai/#website"
      },
      "about": {
        "@type": "Thing",
        "name": "Bitcoin Education",
        "sameAs": "https://en.wikipedia.org/wiki/Bitcoin"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.bitsleuth.ai/images/og-image.png"
      },
      "datePublished": "2025-01-19",
      "dateModified": "2025-01-19",
    },
    {
      "@type": "LearningResource",
      "name": "Bitcoin Educational Learning Hub",
      "description": "Comprehensive educational resource for learning how Bitcoin works, covering blockchain technology, mining, transactions, and cryptography.",
      "url": "https://www.bitsleuth.ai/learn",
      "educationalLevel": "Beginner to Advanced",
      "learningResourceType": "Educational Module",
      "about": [
        {
          "@type": "Thing",
          "name": "Bitcoin",
          "sameAs": "https://en.wikipedia.org/wiki/Bitcoin"
        },
        {
          "@type": "Thing",
          "name": "Blockchain",
          "sameAs": "https://en.wikipedia.org/wiki/Blockchain"
        },
        {
          "@type": "Thing",
          "name": "Cryptocurrency",
          "sameAs": "https://en.wikipedia.org/wiki/Cryptocurrency"
        }
      ],
      "teaches": [
        "Bitcoin fundamentals and history",
        "Blockchain technology and structure",
        "Cryptocurrency transactions and UTXO model",
        "Mining and proof-of-work consensus",
        "Cryptographic security principles",
        "Decentralized network architecture",
        "Digital wallet management"
      ],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Bitcoin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bitcoin is a decentralized digital currency that enables peer-to-peer transactions without a central authority. It operates on a blockchain—a public ledger maintained by a distributed network of computers worldwide."
          }
        },
        {
          "@type": "Question",
          "name": "How does Bitcoin work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bitcoin works through a combination of cryptography, peer-to-peer networking, and a consensus mechanism called proof-of-work. Transactions are verified by network nodes through mining and recorded in a public distributed ledger called the blockchain."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Bitcoin whitepaper?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Bitcoin whitepaper, titled 'Bitcoin: A Peer-to-Peer Electronic Cash System,' was published by Satoshi Nakamoto in 2008. It outlines the technical foundation and vision for Bitcoin as a decentralized digital currency."
          }
        }
      ]
    }
  ]
};
