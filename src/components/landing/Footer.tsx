import Link from 'next/link';
import Image from 'next/image';
import { ValueBadge } from '@/components/ui/value-badge';
import { Bitcoin, Heart } from 'lucide-react';

interface FooterProps {
  onTermsClick: () => void;
  onPrivacyClick: () => void;
}

export function Footer({ onTermsClick, onPrivacyClick }: FooterProps) {
  return (
    <footer className="edge-to-edge-section flex flex-col gap-3 py-4 shrink-0 border-t bg-muted/60 text-foreground relative z-10 mt-auto w-full" style={{
      paddingBottom: 'max(1rem, env(safe-area-inset-bottom))',
      paddingLeft: 'max(1rem, env(safe-area-inset-left))',
      paddingRight: 'max(1rem, env(safe-area-inset-right))'
    }}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Image src="/images/logo-icon.jpg" alt="BitSleuth Logo" width={32} height={32} className="rounded-lg grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" />
            <span className="font-bold text-base sm:text-lg text-muted-foreground">BitSleuth</span>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <ValueBadge icon={Bitcoin} text="Built for Bitcoin" variant="primary" />
            <ValueBadge icon={Heart} text="Made with ♥ by Bitcoiners" variant="primary" />
          </div>
        </div>

        <div className="border-t border-border/60 pt-4 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <p className="text-xs sm:text-sm text-muted-foreground font-normal text-center sm:text-left">&copy; {new Date().getFullYear()} BitSleuth. All rights reserved.</p>

          <nav className="flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-end text-center">
            <Link
              href="/glossary"
              className="text-xs sm:text-sm hover:text-primary hover:underline underline-offset-4 text-muted-foreground font-medium transition-colors"
              prefetch={false}
            >
              Glossary
            </Link>
            <a
              href="https://primal.net/p/nprofile1qqs9lrs07tqjg4vkvdh0sn4dkv8v38xddmz87tm2c2rkx7s8jsr426gdz006n"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm hover:text-primary hover:underline underline-offset-4 text-muted-foreground font-medium transition-colors"
            >
              Nostr
            </a>
            <button 
              onClick={onTermsClick} 
              type="button"
              className="text-xs sm:text-sm hover:text-primary hover:underline underline-offset-4 text-muted-foreground font-medium transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button 
              onClick={onPrivacyClick} 
              type="button"
              className="text-xs sm:text-sm hover:text-primary hover:underline underline-offset-4 text-muted-foreground font-medium transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <Link
              href="/company-information"
              className="text-xs sm:text-sm hover:text-primary hover:underline underline-offset-4 text-muted-foreground font-medium transition-colors"
              prefetch={false}
            >
              Company Information
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
