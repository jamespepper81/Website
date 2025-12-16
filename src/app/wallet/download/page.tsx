"use client";

import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Apple, Smartphone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';

export default function DownloadPage() {
    const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

    const APP_STORE_LINK = "https://apps.apple.com/app/bitsleuth-wallet/id6753949588";
    const PLAY_STORE_LINK = "https://play.google.com/store/apps/details?id=ai.bitsleuth.wallet";

    const openPrivacyModal = () => setActiveModal('privacy');
    const openTermsModal = () => setActiveModal('terms');
    const closeModal = () => setActiveModal(null);

    useEffect(() => {
        // Smart redirection for mobile devices
        const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

        // iOS detection
        if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
            window.location.href = APP_STORE_LINK;
        }
        // Android detection
        else if (/android/i.test(userAgent)) {
            window.location.href = PLAY_STORE_LINK;
        }
    }, []);

    return (
        <div className="flex flex-col min-h-dvh bg-background">
            <Header basePath="/wallet" />

            <main className="flex-1 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
                            Download BitSleuth
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-xl mx-auto">
                            Your comprehensive Bitcoin privacy wallet. Available now on iOS and Android.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                        <Button
                            asChild
                            size="lg"
                            className="h-16 px-8 text-lg font-semibold bg-foreground hover:bg-foreground/90 text-background min-w-[240px] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                        >
                            <a href={APP_STORE_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                                <Apple className="h-8 w-8 mb-1" />
                                <div className="flex flex-col items-start text-left leading-none">
                                    <span className="text-xs font-medium opacity-80">Download on the</span>
                                    <span className="text-xl font-bold">App Store</span>
                                </div>
                            </a>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            className="h-16 px-8 text-lg font-semibold bg-foreground hover:bg-foreground/90 text-background min-w-[240px] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                        >
                            <a href={PLAY_STORE_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                                <Smartphone className="h-8 w-8 mb-1" />
                                <div className="flex flex-col items-start text-left leading-none">
                                    <span className="text-xs font-medium opacity-80">GET IT ON</span>
                                    <span className="text-xl font-bold">Google Play</span>
                                </div>
                            </a>
                        </Button>
                    </div>

                    <div className="pt-12 flex justify-center">
                        <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                            Return to Website <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                    </div>
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
