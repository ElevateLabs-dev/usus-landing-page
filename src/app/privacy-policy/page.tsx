import { LandingCTA, LandingFooter } from "@/components/landing/cta-footer";
import "@/components/landing/cta-footer.css";
import { LandingNavigation } from "@/components/landing/navigation";
import Link from "next/link";
import type { ReactNode } from "react";

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "information", title: "2. Information We Collect" },
  { id: "use", title: "3. How We Use Your Information" },
  { id: "ai-processing", title: "4. AI-Powered Features" },
  { id: "sharing", title: "5. How We Share Information" },
  { id: "cookies", title: "6. Cookies and Similar Technologies" },
  { id: "retention", title: "7. Data Retention" },
  { id: "security", title: "8. Data Security" },
  { id: "rights", title: "9. Your Privacy Rights" },
  { id: "international", title: "10. International Data Transfers" },
  { id: "children", title: "11. Children's Privacy" },
  { id: "changes", title: "12. Changes to This Policy" },
  { id: "contact", title: "13. Contact Us" },
];

function PolicySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-[var(--usus-border-soft)] py-8 sm:py-10"
    >
      <h2 className="mb-4 text-xl font-semibold tracking-tight text-[var(--usus-text)] sm:text-2xl">
        {title}
      </h2>

      <div className="space-y-4 text-sm leading-7 text-[var(--usus-text-muted)] sm:text-base">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {

  return (
    <main className="min-h-screen bg-[var(--usus-background)] text-[var(--usus-text)]">

      {/* Header */}
      <header className="border-b border-[var(--usus-border-soft)]">
        <LandingNavigation/>
      </header>

      {/* Hero */}
      <section className="border-b border-[var(--usus-border-soft)] bg-[var(--usus-surface)] mt-8">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--usus-primary)]">
            Legal
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--usus-text-muted)] sm:text-lg">
            Your privacy matters to us. This policy explains how USUS collects,
            uses, stores and protects personal information when you use our
            website and services.
          </p>

          <p className="mt-6 text-sm text-[var(--usus-text-muted)]">
            Last updated: November 27, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-20 lg:px-12 lg:py-16">

        {/* Table of Contents */}
        <aside className="h-fit lg:sticky lg:top-8">
          <h2 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[var(--usus-text)]">
            On this page
          </h2>

          <nav aria-label="Privacy policy sections">
            <ul className="space-y-3">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm leading-6 text-[var(--usus-text-muted)] transition-colors hover:text-[var(--usus-primary)]"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Policy Body */}
        <article className="min-w-0 max-w-3xl">

          <PolicySection id="introduction" title="1. Introduction">
            <p>
              This Privacy Policy explains how USUS (&quot;we&quot;, &quot;our&quot;
              or &quot;us&quot;) collects, uses, processes, stores and protects
              personal information when you access or use our website,
              platform and related services (collectively, the
              &quot;Services&quot;).
            </p>

            <p>
              USUS provides AI-powered workplace learning and training
              experiences that help individuals and organisations practise
              workplace scenarios, develop skills and understand their
              performance.
            </p>

            <p>
              By using our Services, you acknowledge that you have read this
              Privacy Policy. Where consent is required by applicable law, we
              will seek it separately.
            </p>
          </PolicySection>

          <PolicySection id="information" title="2. Information We Collect">
            <p>
              The information we collect depends on how you interact with
              USUS, the features you use and your organisation&apos;s
              configuration.
            </p>

            <h3 className="font-semibold text-[var(--usus-text)]">
              Information you provide
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>Name and contact information, including email address.</li>
              <li>Account credentials and authentication information.</li>
              <li>Organisation, company and workplace information.</li>
              <li>Job title, role and team information where provided.</li>
              <li>Communications and support enquiries.</li>
            </ul>

            <h3 className="font-semibold text-[var(--usus-text)]">
              Training and platform information
            </h3>

            <p>
              When you use USUS training features, we may process information
              generated through your interactions, including role-play
              responses, submitted text, training progress, feedback,
              evaluation results and activity records.
            </p>

            <p>
              Where voice features are enabled, audio recordings, speech
              transcripts and related interaction data may also be processed.
              The information retained depends on the feature and applicable
              configuration.
            </p>

            <h3 className="font-semibold text-[var(--usus-text)]">
              Automatically collected information
            </h3>

            <p>
              We may collect technical and usage information such as IP
              address, browser type, device information, operating system,
              access times, pages visited and interactions with platform
              features.
            </p>
          </PolicySection>

          <PolicySection id="use" title="3. How We Use Your Information">
            <p>We may use personal information to:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Create, manage and authenticate user accounts.</li>
              <li>Provide access to training and learning features.</li>
              <li>Deliver AI-powered role-play and workplace simulations.</li>
              <li>Generate feedback, evaluations and learning insights.</li>
              <li>Track training progress and platform activity.</li>
              <li>Provide customer support and respond to enquiries.</li>
              <li>Maintain platform security and prevent misuse.</li>
              <li>Improve the reliability and performance of our Services.</li>
              <li>Meet legal, regulatory and contractual obligations.</li>
            </ul>
          </PolicySection>

          <PolicySection id="ai-processing" title="4. AI-Powered Features">
            <p>
              USUS uses artificial intelligence to support interactive
              training, workplace simulations, role-play conversations,
              feedback and evaluation features.
            </p>

            <p>
              Depending on the feature being used, information submitted by
              users may be processed by AI systems and technology providers
              to generate responses, analyse interactions or provide
              feedback.
            </p>

            <p>
              AI-generated feedback and evaluations are intended to support
              learning and development. They should not automatically be
              treated as definitive assessments of an individual&apos;s
              abilities or suitability for employment.
            </p>

            <p>
              We will describe the relevant AI providers and their data
              handling arrangements in our applicable service documentation
              and data processing agreements.
            </p>
          </PolicySection>

          <PolicySection id="sharing" title="5. How We Share Information">
            <p>
              We do not share personal information indiscriminately. We may
              disclose information where necessary to operate and provide
              our Services.
            </p>

            <p>This may include sharing information with:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-[var(--usus-text)]">
                  Your organisation:
                </strong>{" "}
                where your account is managed by an employer or organisation,
                authorised administrators may access relevant account,
                training and performance information.
              </li>

              <li>
                <strong className="text-[var(--usus-text)]">
                  Service providers:
                </strong>{" "}
                companies that support hosting, storage, authentication,
                analytics, communications and platform operations.
              </li>

              <li>
                <strong className="text-[var(--usus-text)]">
                  AI technology providers:
                </strong>{" "}
                providers that help us deliver AI-powered functionality.
              </li>

              <li>
                <strong className="text-[var(--usus-text)]">
                  Legal and regulatory authorities:
                </strong>{" "}
                where disclosure is required by law or necessary to protect
                legal rights and safety.
              </li>
            </ul>

            <p>
              We may also disclose information as part of a merger,
              acquisition, restructuring or transfer of business assets,
              subject to applicable legal requirements.
            </p>
          </PolicySection>

          <PolicySection
            id="cookies"
            title="6. Cookies and Similar Technologies"
          >
            <p>
              Our website and platform may use cookies and similar
              technologies to support essential functionality, remember
              preferences, understand usage and improve the user experience.
            </p>

            <p>
              You can manage cookies through your browser settings. Where
              required, we will request your consent before using
              non-essential cookies or tracking technologies.
            </p>
          </PolicySection>

          <PolicySection id="retention" title="7. Data Retention">
            <p>
              We retain personal information only for as long as reasonably
              necessary to fulfil the purposes described in this policy,
              provide our Services, meet contractual requirements and comply
              with applicable laws.
            </p>

            <p>
              Retention periods may vary depending on the type of information,
              the feature used and the agreement between USUS and the
              organisation using our Services.
            </p>

            <p>
              When information is no longer required, we will take appropriate
              steps to delete or anonymise it, subject to applicable legal
              obligations and legitimate retention requirements.
            </p>
          </PolicySection>

          <PolicySection id="security" title="8. Data Security">
            <p>
              We use appropriate technical and organisational measures
              designed to protect personal information against unauthorised
              access, loss, alteration, disclosure or destruction.
            </p>

            <p>
              These measures may include access controls, authentication,
              secure data transmission and other safeguards appropriate to
              the nature of the information we process.
            </p>

            <p>
              However, no method of electronic transmission or storage is
              completely secure. We cannot guarantee absolute security.
            </p>
          </PolicySection>

          <PolicySection id="rights" title="9. Your Privacy Rights">
            <p>
              Depending on your location and applicable data protection laws,
              you may have rights concerning your personal information.
              These may include the right to:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Request access to your personal information.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion of your personal information.</li>
              <li>Request restriction of certain processing activities.</li>
              <li>Object to certain uses of your information.</li>
              <li>Request a copy of information in a portable format.</li>
              <li>Withdraw consent where processing is based on consent.</li>
            </ul>

            <p>
              If your information is processed by USUS on behalf of your
              employer or organisation, that organisation may be responsible
              for responding to your privacy request. We will assist as
              required under our applicable agreements and legal obligations.
            </p>
          </PolicySection>

          <PolicySection
            id="international"
            title="10. International Data Transfers"
          >
            <p>
              Depending on where you and your organisation are located,
              personal information may be processed or stored in countries
              other than your country of residence.
            </p>

            <p>
              Where international transfers take place, we will use
              appropriate safeguards where required by applicable data
              protection laws.
            </p>
          </PolicySection>

          <PolicySection id="children" title="11. Children's Privacy">
            <p>
              USUS is designed for workplace learning and professional
              development. Our Services are not intended for children under
              the age of 18 unless an applicable arrangement expressly
              provides otherwise and the required legal safeguards are in
              place.
            </p>

            <p>
              If you believe that a child has provided personal information
              to us without the required authorisation, please contact us.
            </p>
          </PolicySection>

          <PolicySection id="changes" title="12. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our Services, business practices or legal
              obligations.
            </p>

            <p>
              When we make changes, we will update the date displayed at the
              top of this page. Where required, we will provide additional
              notice of significant changes.
            </p>
          </PolicySection>

          <PolicySection id="contact" title="13. Contact Us">
            <p>
              If you have questions about this Privacy Policy, how we process
              personal information or how to exercise your privacy rights,
              please contact our privacy team.
            </p>

            <div className="rounded-xl border border-[var(--usus-border)] bg-[var(--usus-surface)] p-5 sm:p-6">
              <p className="font-semibold text-[var(--usus-text)]">
                USUS Privacy Team
              </p>

              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:PRIVACY_EMAIL"
                  className="font-medium text-[var(--usus-primary)] underline underline-offset-4"
                >
                  PRIVACY_EMAIL
                </a>
              </p>

              <p className="mt-2">
                Website:{" "}
                <Link
                  href="/"
                  className="font-medium text-[var(--usus-primary)] underline underline-offset-4"
                >
                  USUS
                </Link>
              </p>
            </div>
          </PolicySection>

        </article>
      </div>

      {/* Footer */}
      <footer className="border-t border-[var(--usus-border-soft)] bg-[var(--usus-surface)]">
        <LandingCTA/>
        <LandingFooter/>
      </footer>

    </main>
  );
}