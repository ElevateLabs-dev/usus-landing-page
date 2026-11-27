"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    id: "scenarios",
    label: "Scenario Practice",
    title: "Practise real workplace situations.",
    description:
      "Give employees the opportunity to explore realistic workplace challenges, make decisions and develop practical confidence.",
    image:
      "https://placehold.co/1400x850/f1f5ed/252624?text=USUS+Scenario+Practice+Screenshot",
    alt: "USUS scenario practice interface",
    background: "var(--usus-primary-soft)",
    accent: "rgba(38,58,67,0.10)",
  },
  {
    id: "roleplay",
    label: "AI Roleplay",
    title: "Learn through interactive conversations.",
    description:
      "Create opportunities for employees to practise workplace conversations and develop their communication skills.",
    image:
      "https://placehold.co/1400x850/f1f1ed/252624?text=USUS+AI+Roleplay+Screenshot",
    alt: "USUS AI roleplay interface",
    background: "var(--usus-surface-soft)",
    accent: "rgba(38,58,67,0.08)",
  },
  {
    id: "knowledge",
    label: "Knowledge",
    title: "Make workplace knowledge accessible.",
    description:
      "Help employees understand organisational information, procedures and the knowledge required to perform their roles.",
    image:
      "https://placehold.co/1400x850/eef2e7/252624?text=USUS+Knowledge+Screenshot",
    alt: "USUS workplace knowledge interface",
    background: "var(--usus-primary-soft)",
    accent: "rgba(38,58,67,0.14)",
  },
  {
    id: "feedback",
    label: "Feedback",
    title: "Turn practice into improvement.",
    description:
      "Give employees meaningful feedback that helps them understand their performance and identify opportunities to improve.",
    image:
      "https://placehold.co/1400x850/f3f0e9/252624?text=USUS+Feedback+Screenshot",
    alt: "USUS feedback interface",
    background: "var(--usus-surface-soft)",
    accent: "rgba(200,148,50,0.09)",
  },
  {
    id: "evaluation",
    label: "Evaluation",
    title: "Understand learning and development.",
    description:
      "Bring learning outcomes and performance insights together to help organisations understand employee development.",
    image:
      "https://placehold.co/1400x850/edf1e8/252624?text=USUS+Evaluation+Screenshot",
    alt: "USUS evaluation interface",
    background: "var(--usus-primary-soft)",
    accent: "rgba(38,58,67,0.11)",
  },
];

type Feature = (typeof features)[number];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <path
        d="M4 10h12M10 4l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProductShowcase({ feature }: { feature: Feature }) {
  return (
    <div
      key={feature.id}
      className="usus-image-enter relative mx-auto w-full max-w-[1100px]"
    >
      <div className="overflow-hidden rounded-lg border border-[var(--usus-border)] bg-[var(--usus-surface)] shadow-[0_12px_40px_rgba(0,0,0,0.08)] sm:rounded-xl sm:shadow-[0_18px_55px_rgba(0,0,0,0.12)]">
        <Image
          src={feature.image}
          alt={feature.alt}
          width={1400}
          height={850}
          sizes="(max-width: 640px) 94vw, (max-width: 1024px) 90vw, 1100px"
          unoptimized
          loading="lazy"
          className="block h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}

export function AIPoweredTraining() {
  const [activeFeature, setActiveFeature] = useState("scenarios");

  const selectedFeature =
    features.find((feature) => feature.id === activeFeature) ?? features[0];

  return (
    <section
      id="ai-training"
      className="relative overflow-hidden border-b border-[var(--usus-border-soft)] bg-[var(--usus-background)] py-16 sm:py-20 lg:py-28"
    >
      <style>{`
        @keyframes ususImageEnter {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .usus-image-enter {
          animation: ususImageEnter 450ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
        }

        @media (prefers-reduced-motion: reduce) {
          .usus-image-enter {
            animation: none;
          }
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section heading */}
        <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-[760px]">
            <span className="mb-5 inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--usus-primary)] sm:text-xs">
              AI-POWERED WORKPLACE TRAINING
            </span>

            <h2 className="max-w-[760px] text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-[var(--usus-text)] sm:text-4xl lg:text-[54px]">
              Move beyond traditional
              <br className="hidden sm:block" />
              training
            </h2>

            <p className="mt-5 max-w-[650px] text-sm leading-7 text-[var(--usus-text-muted)] sm:text-base">
              With AI-powered workplace simulations, employees practise,
              receive feedback and develop practical confidence.
            </p>
          </div>

          <div className="lg:pb-1">
            <Link
              href="#solutions"
              className="inline-flex h-11 items-center justify-center gap-3 bg-[var(--usus-primary)] px-6 text-[10px] font-semibold uppercase tracking-wider text-[#F7F6F1] transition-colors hover:bg-[var(--usus-primary-hover)]"
            >
              Learn More
              <ArrowIcon />
            </Link>
          </div>
        </div>

        {/* Feature navigation */}
        <div className="relative mt-8 sm:mt-10">
          <div
            role="tablist"
            aria-label="USUS training capabilities"
            className="flex gap-2 overflow-x-auto overscroll-x-contain pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {features.map((feature) => {
              const isActive = activeFeature === feature.id;

              return (
                <button
                  key={feature.id}
                  id={`usus-tab-${feature.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="usus-product-preview"
                  onClick={() => setActiveFeature(feature.id)}
                  className={`
                    min-h-11 shrink-0 whitespace-nowrap border px-4 py-3
                    text-[11px] font-medium transition-all duration-300
                    focus-visible:outline focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-[var(--usus-primary)]
                    sm:px-5
                    ${
                      isActive
                        ? "border-[var(--usus-primary)] bg-[var(--usus-primary-soft)] text-[var(--usus-text)]"
                        : "border-[var(--usus-border-soft)] bg-[var(--usus-surface)] text-[var(--usus-text-muted)] hover:border-[var(--usus-primary)] hover:text-[var(--usus-text)]"
                    }
                  `}
                >
                  {feature.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Image showcase */}
        <div className="relative mt-5 sm:mt-8">
          {/* Dynamic background */}
          <div
            className="absolute inset-x-0 top-5 bottom-0 overflow-hidden rounded-xl border border-[var(--usus-border)] transition-colors duration-700 sm:top-8 sm:rounded-2xl"
            style={{
              backgroundColor: selectedFeature.background,
            }}
          >
            {/* Subtle grid */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage: `
                  linear-gradient(var(--usus-grid) 1px, transparent 1px),
                  linear-gradient(90deg, var(--usus-grid) 1px, transparent 1px)
                `,
                backgroundSize: "56px 56px",
              }}
            />

            {/* Decorative glow */}
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-48 w-48 rounded-full blur-3xl transition-colors duration-700 sm:h-80 sm:w-80"
              style={{
                backgroundColor: selectedFeature.accent,
              }}
            />
          </div>

          {/* Product screenshot */}
          <div
            id="usus-product-preview"
            role="tabpanel"
            aria-labelledby={`usus-tab-${activeFeature}`}
            className="relative z-10 px-2 pt-0 sm:px-4 sm:pt-2 lg:px-8"
          >
            <ProductShowcase feature={selectedFeature} />
          </div>
        </div>
      </div>
    </section>
  );
}