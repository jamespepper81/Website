"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface BlockchainAnimationProps {
  className?: string;
}

export function BlockchainAnimation({ className }: BlockchainAnimationProps) {
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
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient definitions */}
          <linearGradient id="blockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
          </linearGradient>
          
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>

          {/* Glow filter for blocks */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Blockchain blocks - connected chain */}
        <g className="blockchain-chain">
          {/* Block 1 */}
          <g className="animate-pulse" style={{ animationDelay: '0s', animationDuration: '3s' }}>
            <rect
              x="50"
              y="250"
              width="100"
              height="100"
              rx="8"
              fill="url(#blockGradient)"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              filter="url(#glow)"
              className="opacity-80"
            />
            {/* Block hash lines */}
            <line x1="70" y1="280" x2="130" y2="280" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.6" />
            <line x1="70" y1="300" x2="120" y2="300" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.6" />
            <line x1="70" y1="320" x2="130" y2="320" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.6" />
          </g>

          {/* Connection line 1 */}
          <line
            x1="150"
            y1="300"
            x2="250"
            y2="300"
            stroke="url(#connectionGradient)"
            strokeWidth="3"
            className="animate-[pulse_2s_ease-in-out_infinite]"
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,100;100,0"
              dur="2s"
              repeatCount="indefinite"
            />
          </line>

          {/* Block 2 */}
          <g className="animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '3s' }}>
            <rect
              x="250"
              y="250"
              width="100"
              height="100"
              rx="8"
              fill="url(#blockGradient)"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              filter="url(#glow)"
              className="opacity-80"
            />
            <line x1="270" y1="280" x2="330" y2="280" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.6" />
            <line x1="270" y1="300" x2="320" y2="300" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.6" />
            <line x1="270" y1="320" x2="330" y2="320" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.6" />
          </g>

          {/* Connection line 2 */}
          <line
            x1="350"
            y1="300"
            x2="450"
            y2="300"
            stroke="url(#connectionGradient)"
            strokeWidth="3"
            className="animate-[pulse_2s_ease-in-out_infinite]"
            style={{ animationDelay: '0.5s' }}
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,100;100,0"
              dur="2s"
              repeatCount="indefinite"
              begin="0.5s"
            />
          </line>

          {/* Block 3 */}
          <g className="animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }}>
            <rect
              x="450"
              y="250"
              width="100"
              height="100"
              rx="8"
              fill="url(#blockGradient)"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              filter="url(#glow)"
              className="opacity-80"
            />
            <line x1="470" y1="280" x2="530" y2="280" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.6" />
            <line x1="470" y1="300" x2="520" y2="300" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.6" />
            <line x1="470" y1="320" x2="530" y2="320" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.6" />
          </g>

          {/* Connection line 3 */}
          <line
            x1="550"
            y1="300"
            x2="650"
            y2="300"
            stroke="url(#connectionGradient)"
            strokeWidth="3"
            className="animate-[pulse_2s_ease-in-out_infinite]"
            style={{ animationDelay: '1s' }}
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,100;100,0"
              dur="2s"
              repeatCount="indefinite"
              begin="1s"
            />
          </line>

          {/* Block 4 (new block being added) */}
          <g className="animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '3s' }}>
            <rect
              x="650"
              y="250"
              width="100"
              height="100"
              rx="8"
              fill="url(#blockGradient)"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              filter="url(#glow)"
              className="opacity-80"
            >
              <animate
                attributeName="opacity"
                values="0;0.8"
                dur="2s"
                repeatCount="indefinite"
              />
            </rect>
            <line x1="670" y1="280" x2="730" y2="280" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.6" />
            <line x1="670" y1="300" x2="720" y2="300" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.6" />
            <line x1="670" y1="320" x2="730" y2="320" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.6" />
          </g>
        </g>

        {/* Transaction particles flowing through the chain */}
        <g className="transaction-particles">
          {[...Array(5)].map((_, i) => (
            <circle
              key={`particle-${i}`}
              r="4"
              fill="hsl(var(--primary))"
              opacity="0.8"
              filter="url(#glow)"
            >
              <animateMotion
                dur={`${4 + i}s`}
                repeatCount="indefinite"
                path="M 50,300 L 150,300 L 250,300 L 350,300 L 450,300 L 550,300 L 650,300 L 750,300"
                begin={`${i * 0.8}s`}
              />
              <animate
                attributeName="opacity"
                values="0;0.8;0"
                dur={`${4 + i}s`}
                repeatCount="indefinite"
                begin={`${i * 0.8}s`}
              />
            </circle>
          ))}
        </g>

        {/* Network nodes in background */}
        <g className="network-nodes" opacity="0.3">
          {[[100, 150], [300, 100], [500, 150], [700, 100], [200, 450], [400, 480], [600, 450]].map(
            ([x, y], i) => (
              <g key={`node-${i}`}>
                <circle
                  cx={x}
                  cy={y}
                  r="6"
                  fill="hsl(var(--primary))"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.3}s`, animationDuration: '4s' }}
                />
                {/* Connection lines between nodes */}
                {i < 6 && (
                  <line
                    x1={x}
                    y1={y}
                    x2={[300, 500, 700, 400, 600, 600][i]}
                    y2={[100, 150, 100, 480, 450, 450][i]}
                    stroke="hsl(var(--primary))"
                    strokeWidth="1"
                    opacity="0.2"
                  />
                )}
              </g>
            )
          )}
        </g>
      </svg>
    </div>
  );
}
