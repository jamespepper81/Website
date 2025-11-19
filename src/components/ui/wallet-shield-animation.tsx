"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface WalletShieldAnimationProps {
  className?: string;
}

export function WalletShieldAnimation({ className }: WalletShieldAnimationProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevent SSR mismatch
  }

  return (
    <div className={cn("relative w-full h-full", className)}>
      <svg
        className="w-full h-full"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient for shield */}
          <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
          </linearGradient>

          {/* Gradient for lock */}
          <linearGradient id="lockGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="shield-glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Radial gradient for pulse effect */}
          <radialGradient id="pulseGradient">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Pulsing circles in background */}
        <g className="pulse-rings">
          {[1, 2, 3].map((i) => (
            <circle
              key={`pulse-${i}`}
              cx="200"
              cy="200"
              r="100"
              fill="none"
              stroke="url(#pulseGradient)"
              strokeWidth="2"
              opacity="0"
            >
              <animate
                attributeName="r"
                values="80;180"
                dur="3s"
                repeatCount="indefinite"
                begin={`${i * 1}s`}
              />
              <animate
                attributeName="opacity"
                values="0.6;0"
                dur="3s"
                repeatCount="indefinite"
                begin={`${i * 1}s`}
              />
            </circle>
          ))}
        </g>

        {/* Shield outline */}
        <path
          d="M 200 80 L 280 120 Q 290 200 280 260 Q 250 320 200 340 Q 150 320 120 260 Q 110 200 120 120 Z"
          fill="url(#shieldGradient)"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          filter="url(#shield-glow)"
          className="opacity-90"
        >
          <animate
            attributeName="opacity"
            values="0.7;1;0.7"
            dur="4s"
            repeatCount="indefinite"
          />
        </path>

        {/* Shield inner glow */}
        <path
          d="M 200 90 L 270 125 Q 280 200 270 255 Q 245 310 200 328 Q 155 310 130 255 Q 120 200 130 125 Z"
          fill="hsl(var(--primary))"
          opacity="0.2"
        />

        {/* Lock body */}
        <g className="lock-icon" transform="translate(200, 220)">
          {/* Lock shackle */}
          <path
            d="M -30 -30 L -30 -50 Q -30 -70 0 -70 Q 30 -70 30 -50 L 30 -30"
            fill="none"
            stroke="url(#lockGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            filter="url(#shield-glow)"
          >
            <animate
              attributeName="stroke-width"
              values="8;10;8"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>

          {/* Lock body rectangle */}
          <rect
            x="-35"
            y="-30"
            width="70"
            height="50"
            rx="5"
            fill="url(#lockGradient)"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            filter="url(#shield-glow)"
          />

          {/* Keyhole */}
          <circle
            cx="0"
            cy="-10"
            r="6"
            fill="hsl(var(--background))"
          />
          <rect
            x="-3"
            y="-10"
            width="6"
            height="15"
            fill="hsl(var(--background))"
          />
        </g>

        {/* Checkmark animation (appears periodically) */}
        <g className="checkmark" transform="translate(200, 200)">
          <circle
            cx="0"
            cy="0"
            r="35"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            opacity="0"
            filter="url(#shield-glow)"
          >
            <animate
              attributeName="opacity"
              values="0;0;0.8;0"
              dur="6s"
              repeatCount="indefinite"
            />
          </circle>
          <path
            d="M -15 0 L -5 10 L 15 -10"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0"
          >
            <animate
              attributeName="opacity"
              values="0;0;1;0"
              dur="6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-dasharray"
              values="0,40;40,0"
              dur="0.5s"
              begin="2s"
              repeatCount="indefinite"
            />
          </path>
        </g>

        {/* Orbital security particles */}
        <g className="security-particles">
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <circle
              key={`particle-${i}`}
              cx="200"
              cy="200"
              r="3"
              fill="hsl(var(--primary))"
              opacity="0.8"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={`${angle} 200 200`}
                to={`${angle + 360} 200 200`}
                dur="10s"
                repeatCount="indefinite"
              />
              <animateMotion
                path={`M 0 0 Q ${80 + Math.random() * 40} 0 ${130 + Math.random() * 20} 0`}
                dur="10s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.3;0.8;0.3"
                dur={`${3 + i * 0.5}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>

        {/* Bitcoin symbol (₿) in center */}
        <g transform="translate(200, 150)" opacity="0.4">
          <text
            x="0"
            y="0"
            fontSize="40"
            fontWeight="bold"
            fill="hsl(var(--primary))"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="Arial, sans-serif"
          >
            ₿
          </text>
        </g>
      </svg>
    </div>
  );
}
