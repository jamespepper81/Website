import Link from 'next/link';
import Image from 'next/image';
import { ValueBadge } from '@/components/ui/value-badge';
import { Bitcoin, Heart } from 'lucide-react';

interface FooterProps {
  onTermsClick: () => void;
  onPrivacyClick: () => void;
}

const footerLinkClassName =
  "text-sm text-muted-foreground hover:text-primary font-medium transition-colors duration-200 hover:underline underline-offset-4";

const productLinks = [
  { href: '/analyzer', label: 'Wallet Analyzer' },
  { href: '/wallet', label: 'Privacy Wallet' },
  { href: '/wallet/download', label: 'Download Wallet' },
];

const learnLinks = [
  { href: '/learn', label: 'Learning Hub' },
  { href: '/history', label: 'Bitcoin History' },
  { href: '/glossary', label: 'Glossary' },
];

export function Footer({ onTermsClick, onPrivacyClick }: FooterProps) {
  return (
    <footer className="edge-to-edge-section flex flex-col gap-3 pt-12 pb-4 shrink-0 border-t border-border/40 bg-muted/40 text-foreground relative z-10 mt-auto w-full" style={{
      paddingBottom: 'max(1rem, env(safe-area-inset-bottom))',
      paddingLeft: 'max(1rem, env(safe-area-inset-left))',
      paddingRight: 'max(1rem, env(safe-area-inset-right))'
    }}>
      <div className="container mx-auto">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-10">
          {/* Brand column */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="group inline-flex items-center gap-2 transition-all duration-200">
              <Image src="/images/logo-icon.jpg" alt="BitSleuth Logo" width={36} height={36} className="rounded-lg group-hover:shadow-md group-hover:shadow-primary/20 transition-all duration-300" />
              <span className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-200">BitSleuth</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Bitcoin transparency and sovereignty tools — an AI-powered wallet analyzer and a privacy-first, non-custodial wallet.
            </p>
            <div className="flex flex-wrap gap-2">
              <ValueBadge icon={Bitcoin} text="Built for Bitcoin" variant="primary" className="px-3 py-1.5" />
              <ValueBadge icon={Heart} text="Made by Bitcoiners" variant="primary" className="px-3 py-1.5" />
            </div>
          </div>

          {/* Products column */}
          <nav aria-label="Products" className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Products</h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={footerLinkClassName} prefetch={false}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Learn column */}
          <nav aria-label="Learn" className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Learn</h3>
            <ul className="space-y-2.5">
              {learnLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={footerLinkClassName} prefetch={false}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company column */}
          <nav aria-label="Company" className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Company</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/company-information" className={footerLinkClassName} prefetch={false}>
                  Company Information
                </Link>
              </li>
              <li>
                <button onClick={onTermsClick} type="button" className={`${footerLinkClassName} cursor-pointer active:scale-[0.98] text-left`}>
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={onPrivacyClick} type="button" className={`${footerLinkClassName} cursor-pointer active:scale-[0.98] text-left`}>
                  Privacy Policy
                </button>
              </li>
              <li>
                <a
                  href="https://primal.net/p/nprofile1qqs9lrs07tqjg4vkvdh0sn4dkv8v38xddmz87tm2c2rkx7s8jsr426gdz006n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={footerLinkClassName}
                >
                  Nostr
                </a>
              </li>
              <li>
                <a
                  href="https://www.pingara.io/status/bitsleuth"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Status (opens in new tab)"
                  className={footerLinkClassName}
                >
                  Status
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/40 pt-4 pb-2 flex flex-col sm:flex-row gap-2 items-center justify-between">
          <p className="text-xs sm:text-sm text-muted-foreground font-normal text-center sm:text-left">&copy; {new Date().getFullYear()} BitSleuth. All rights reserved.</p>
          <p className="text-xs text-muted-foreground/70 text-center sm:text-right">
            Non-custodial. Your keys, your Bitcoin.
          </p>
        </div>
      </div>
    </footer>
  );
}
