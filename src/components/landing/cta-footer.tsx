import Link from "next/link";
import Image from "next/image";
import { cacheLife } from "next/cache";

const footerGroups = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Enterprise", href: "#enterprise" },
      { label: "Contact", href: "mailto:hello@elevatelabs.dev" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "AI Practice", href: "#solutions" },
      { label: "Roleplay", href: "#solutions" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Features", href: "#features" },
    ],
  },
  {
    title: "Use Cases",
    links: [
      { label: "Employee Training", href: "#use-cases" },
      { label: "Onboarding", href: "#use-cases" },
      { label: "Sales Training", href: "#use-cases" },
      { label: "Skills Development", href: "#use-cases" },
    ],
  },
];

/* =========================================
   ANIMATED WAVE GRAPHIC
========================================= */

function WaveGraphic() {
  return (
    <svg
      className="usus-wave"
      viewBox="0 0 700 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Wave Lines */}

      <g className="usus-wave-lines">
        {Array.from({ length: 24 }).map((_, i) => (
          <path
            key={i}
            className="usus-wave-line"
            d={`M 0 ${145 + i * 3} C 120 ${20 + i * 5}, 160 ${
              290 - i * 4
            }, 300 ${155 + i * 2} S 520 ${20 + i * 5}, 700 ${
              90 + i * 4
            }`}
            stroke="currentColor"
            strokeWidth="0.8"
            opacity={0.12 + (i % 5) * 0.035}
          />
        ))}
      </g>

      {/* Floating Plus Signs */}

      {Array.from({ length: 30 }).map((_, i) => (
        <g
          key={`cross-${i}`}
          transform={`translate(${350 + ((i * 83) % 330)}, ${
            (i * 47) % 320
          })`}
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.35"
        >
          <g
            className="usus-plus"
            style={{
              animationDelay: `${(i % 10) * 0.35}s`,
            }}
          >
            <path d="M-4 0H4M0 -4V4" />
          </g>
        </g>
      ))}
    </svg>
  );
}

/* =========================================
   LANDING CTA
========================================= */

export function LandingCTA() {
  const appUrl = (process.env.NEXT_PUBLIC_APP_URL || "").replace(/\/$/, "");

  return (
    <section className="usus-cta" id="contact">
      <div className="usus-cta-inner">
        {/* CTA Content */}

        <div className="usus-cta-content">
          <span className="usus-cta-eyebrow">
            READY TO GET STARTED?
          </span>

          <h2>
            TURN PRACTICE
            <br />
            INTO PERFORMANCE.
          </h2>

          <p>
            Give your people the opportunity to practise, improve and build
            confidence through realistic AI-powered experiences.
          </p>

          <div className="usus-cta-actions">
            {/* Contact Button */}

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@elevatelabs.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="usus-cta-button primary uppercase"
            >
              Contact Us Now
              <span aria-hidden="true">→</span>
            </a>

            {/* Get Started Button */}

            <Link
              href={`${appUrl}/onboarding`}
              target="_blank"
              rel="noopener noreferrer"
              className="usus-cta-button secondary uppercase"
            >
              Get Started
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Animated Wave Visual */}

        <div className="usus-cta-visual">
          <WaveGraphic />
        </div>
      </div>
    </section>
  );
}

/* =========================================
   FOOTER DATA
========================================= */

async function getCurrentYear() {
  "use cache";
  cacheLife("days");

  return new Date().getFullYear();
}

/* =========================================
   LANDING FOOTER
========================================= */

export async function LandingFooter() {
  const year = await getCurrentYear();

  return (
    <footer className="usus-footer">
      <div className="usus-footer-inner">
        {/* Brand */}

        <div className="usus-footer-brand">
          <Link
            href="/"
            aria-label="USUS home"
            className="flex shrink-0 items-center"
          >
            <Image
              src="/brand/logos/Usus-black.svg"
              alt="USUS"
              width={150}
              height={40}
              priority
              className="usus-logo-light h-auto w-[120px] md:w-[145px]"
            />

            <Image
              src="/brand/logos/Usus-white.svg"
              alt="USUS"
              width={150}
              height={40}
              priority
              className="usus-logo-dark h-auto w-[120px] md:w-[145px]"
            />
          </Link>

          <p>Try Roleplay with USUS</p>
        </div>

        {/* Footer Links */}

        {footerGroups.map((group) => (
          <div className="usus-footer-column" key={group.title}>
            <h3>{group.title}</h3>

            {group.links.map((link) => (
              <Link href={link.href} key={link.label}>
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      {/* Footer Bottom */}

      <div className="usus-footer-bottom">
        <span>&copy; {year} USUS. All rights reserved.</span>

        <div>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}