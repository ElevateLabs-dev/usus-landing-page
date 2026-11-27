import Link from "next/link";

const appUrl = (process.env.NEXT_PUBLIC_APP_URL || "").replace(/\/$/, "");
const plans = [
  {
    name: "Standard",
    description: "Build practical skills through regular practice.",
    price: "$12",
    period: "per trainee / month",
    recommended: false,
    features: [
      "Unlimited text role-play",
      "Unlimited evaluations",
      "30 voice minutes per trainee / month",
      "History and progress tracking",
      "Team reports",
    ],
    button: "Get started",
    href: `${appUrl}/login`
  },
  {
    name: "Plus",
    description: "Give your team more opportunities to practise and improve.",
    price: "$20",
    period: "per trainee / month",
    recommended: true,
    features: [
      "Unlimited text role-play",
      "Unlimited evaluations",
      "75 voice minutes per trainee / month",
      "History and progress tracking",
      "Team reports",
    ],
    button: "Get started",
    href: `${appUrl}/login`,
  },
];

export function PricingSection() {
      const appUrl = (process.env.NEXT_PUBLIC_APP_URL!).replace(/\/$/, "");

  return (
    <section
      id="pricing"
      className="border-t border-[var(--usus-border)] bg-[var(--usus-background)] px-5 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--usus-primary)]">
            Pricing
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-[var(--usus-text)] sm:text-5xl">
            Invest in better
            <br />
            <span className="text-[var(--usus-text-muted)]">
              everyday performance.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--usus-text-muted)] sm:text-base">
            Practical learning should deliver measurable value. Choose a plan
            that gives your team the tools and opportunities to build
            confidence, strengthen skills and improve performance.
          </p>
        </div>

        {/* Three-column layout */}
        <div className="grid grid-cols-2 border border-[var(--usus-border)] md:grid-cols-3">
          {/* Introductory Card */}
          <article className="col-span-2 flex min-w-0 flex-col justify-between bg-[var(--usus-primary)] p-6 text-[#F7F6F1] sm:p-8 md:col-span-1">
            <div>
              <p className="mb-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#F7F6F1]/70">
                The USUS Approach
              </p>

              <h3 className="max-w-xs text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Learning that translates into action.
              </h3>

              <p className="mt-6 max-w-sm text-sm leading-7 text-[#F7F6F1]/80">
                Real growth comes from practice. USUS helps individuals and
                teams develop practical skills through realistic role-play,
                meaningful feedback and continuous improvement.
              </p>
            </div>

            <div className="mt-12">
              <div className="mb-5 h-px w-full bg-[#F7F6F1]/20" />

              <p className="text-sm leading-6 text-[#F7F6F1]/80">
                Less guesswork.
                <br />
                More confidence.
                <br />
                Better performance.
              </p>

              <Link
            href={`${appUrl}/onboarding`}
  target="_blank"
  rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#F7F6F1] transition-opacity hover:opacity-75"
              >
                Get started with USUS
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>

          {/* Pricing Cards */}
          {plans.map((plan, index) => (
            <article
              key={plan.name}
              className={`flex min-w-0 flex-col p-4 sm:p-8 ${
                index !== 0
                  ? "border-l border-[var(--usus-border)]"
                  : ""
              } border-t border-[var(--usus-border)] md:border-t-0 ${
                plan.recommended
                  ? "bg-[var(--usus-primary-soft)]"
                  : "bg-[var(--usus-surface)]"
              }`}
            >
              {/* Plan name */}
              <div className="min-h-[112px]">
                <div className="flex min-h-7 flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-[var(--usus-text)]">
                    {plan.name}
                  </h3>

                  {plan.recommended && (
                    <span className="bg-[var(--usus-primary)] px-2 py-1 text-[9px] font-semibold uppercase tracking-wide text-[#F7F6F1]">
                      Recommended
                    </span>
                  )}
                </div>

                <p className="mt-3 max-w-xs text-sm leading-6 text-[var(--usus-text-muted)]">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mt-7 min-h-[92px]">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-3xl font-semibold tracking-tight text-[var(--usus-text)] sm:text-4xl">
                    {plan.price}
                  </span>

                  <span className="text-xs text-[var(--usus-text-muted)]">
                    / month
                  </span>
                </div>

                <p className="mt-2 text-xs text-[var(--usus-text-muted)]">
                  {plan.period}
                </p>
              </div>

              {/* Button */}
              <Link
                href={plan.href}
                className={`mt-5 flex min-h-12 w-full items-center justify-center gap-2 px-2 text-center text-sm font-semibold transition-opacity hover:opacity-85 ${
                  plan.recommended
                    ? "bg-[var(--usus-primary)] text-[#F7F6F1]"
                    : "border border-[var(--usus-border)] bg-[var(--usus-background)] text-[var(--usus-text)]"
                }`}
              >
                {plan.button}
                <span aria-hidden="true">→</span>
              </Link>

              {/* Features */}
              <div className="mt-8 border-t border-[var(--usus-border)] pt-7">
                <p className="mb-5 text-xs font-semibold uppercase tracking-wider text-[var(--usus-text-muted)]">
                  What&apos;s included
                </p>

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm leading-6 text-[var(--usus-text)] sm:gap-3"
                    >
                      <span
                        className="shrink-0 text-[var(--usus-primary)]"
                        aria-hidden="true"
                      >
                        ✓
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Annual billing */}
        <p className="mt-6 text-xs text-[var(--usus-text-muted)]">
          Annual billing available. Get two months free.
        </p>
      </div>
    </section>
  );
}