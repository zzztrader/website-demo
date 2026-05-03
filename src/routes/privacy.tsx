import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe2, ArrowLeft, Shield, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy & GDPR — LEBA" },
      { name: "description", content: "Privacy Policy and GDPR information for the Luxembourg Eurasia Business Association (LEBA), explaining how we collect, use and protect your personal data." },
      { property: "og:title", content: "Privacy Policy & GDPR — LEBA" },
      { property: "og:description", content: "How LEBA collects, uses and protects personal data under the EU General Data Protection Regulation (GDPR)." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const lastUpdated = "1 May 2026";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
        <div className="container-app flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-elegant">
              <Globe2 className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <div className="font-display text-base font-bold">LEBA</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Luxembourg · Eurasia</div>
            </div>
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-accent">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-accent/30 to-background">
        <div className="container-app py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <Shield className="h-3.5 w-3.5" /> GDPR Compliant
            </div>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              This Privacy Policy explains how the Luxembourg Eurasia Business Association ("LEBA", "we", "us", "our") collects, uses, shares and protects your personal data in accordance with Regulation (EU) 2016/679 — the General Data Protection Regulation ("GDPR") — and applicable Luxembourg data protection law.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container-app">
          <article className="mx-auto max-w-3xl space-y-10 text-[15px] leading-relaxed text-foreground/90">

            <Block id="controller" title="1. Data Controller">
              <p>
                The data controller responsible for the processing of your personal data is:
              </p>
              <div className="mt-4 rounded-xl border border-border bg-card p-5 text-sm">
                <div className="font-semibold text-foreground">Luxembourg Eurasia Business Association (LEBA)</div>
                <div className="mt-2 flex items-start gap-2 text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  14, Rue du Commerce, L-4067 Esch-sur-Alzette, Grand Duchy of Luxembourg
                </div>
                <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4 shrink-0" />
                  <a className="hover:text-foreground" href="mailto:info@leba.lu">info@leba.lu</a>
                </div>
              </div>
            </Block>

            <Block id="data-we-collect" title="2. Personal Data We Collect">
              <p>We may collect and process the following categories of personal data:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li><strong>Identification data:</strong> name, surname, date of birth, nationality.</li>
                <li><strong>Contact data:</strong> email address, postal address, phone number.</li>
                <li><strong>Professional data:</strong> occupation, employer, role, business sector, CV.</li>
                <li><strong>Membership data:</strong> membership status, participation in events, mentoring records.</li>
                <li><strong>Communication data:</strong> messages, enquiries and correspondence with us.</li>
                <li><strong>Technical data:</strong> IP address, browser type, device, pages visited, cookies.</li>
              </ul>
            </Block>

            <Block id="purposes" title="3. Purposes & Legal Basis for Processing">
              <p>We process your personal data for the following purposes, based on the legal grounds provided by Article 6 GDPR:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li><strong>Membership administration</strong> — performance of a contract (Art. 6(1)(b)).</li>
                <li><strong>Organising events, mentoring and capacity-building activities</strong> — performance of a contract or legitimate interests (Art. 6(1)(b)/(f)).</li>
                <li><strong>Newsletters and communications</strong> — your consent (Art. 6(1)(a)), revocable at any time.</li>
                <li><strong>Compliance with legal obligations</strong> — accounting, reporting and statutory duties (Art. 6(1)(c)).</li>
                <li><strong>Website operation, security and analytics</strong> — our legitimate interests (Art. 6(1)(f)).</li>
              </ul>
            </Block>

            <Block id="recipients" title="4. Recipients & Sharing">
              <p>
                Your personal data is only accessible to authorised LEBA staff, board members and volunteers on a need-to-know basis. We may share data with:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Trusted service providers (IT hosting, email, payment, analytics) acting as processors under a Data Processing Agreement.</li>
                <li>Project partners, only when strictly necessary and with appropriate safeguards.</li>
                <li>Public authorities, where required by law.</li>
              </ul>
              <p className="mt-3">We do not sell your personal data.</p>
            </Block>

            <Block id="transfers" title="5. International Transfers">
              <p>
                Where personal data is transferred outside the European Economic Area (EEA), we ensure an adequate level of protection through European Commission adequacy decisions, Standard Contractual Clauses, or other safeguards permitted by Chapter V of the GDPR.
              </p>
            </Block>

            <Block id="retention" title="6. Data Retention">
              <p>
                We retain personal data only for as long as necessary for the purposes described above and to comply with our legal obligations. Membership records are typically kept for the duration of the membership and for up to 10 years thereafter for legal and accounting purposes. Newsletter data is kept until you withdraw consent.
              </p>
            </Block>

            <Block id="rights" title="7. Your Rights under the GDPR">
              <p>You have the following rights regarding your personal data:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li><strong>Access</strong> (Art. 15) — obtain a copy of your data.</li>
                <li><strong>Rectification</strong> (Art. 16) — correct inaccurate or incomplete data.</li>
                <li><strong>Erasure</strong> (Art. 17) — request deletion ("right to be forgotten").</li>
                <li><strong>Restriction</strong> (Art. 18) — limit how we use your data.</li>
                <li><strong>Portability</strong> (Art. 20) — receive your data in a structured, machine-readable format.</li>
                <li><strong>Objection</strong> (Art. 21) — object to processing based on legitimate interests.</li>
                <li><strong>Withdraw consent</strong> at any time, without affecting the lawfulness of prior processing.</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, contact us at <a className="font-medium text-foreground underline underline-offset-4" href="mailto:info@leba.lu">info@leba.lu</a>. You also have the right to lodge a complaint with the Luxembourg supervisory authority — the <em>Commission nationale pour la protection des données</em> (CNPD), <a className="hover:text-foreground" href="https://cnpd.public.lu" target="_blank" rel="noreferrer">cnpd.public.lu</a>.
              </p>
            </Block>

            <Block id="cookies" title="8. Cookies & Analytics">
              <p>
                Our website uses strictly necessary cookies to function properly and, with your consent, analytics cookies to understand how visitors use our site. You can manage or withdraw your cookie preferences at any time through your browser settings.
              </p>
            </Block>

            <Block id="security" title="9. Data Security">
              <p>
                We implement appropriate technical and organisational measures — including encryption in transit, access controls and regular review — to protect your personal data against unauthorised access, loss, alteration or disclosure.
              </p>
            </Block>

            <Block id="children" title="10. Children's Data">
              <p>
                Our services are intended for individuals aged 18 and over. We do not knowingly collect personal data from children. If you believe a minor has provided us with personal data, please contact us so we can delete it.
              </p>
            </Block>

            <Block id="changes" title="11. Changes to this Policy">
              <p>
                We may update this Privacy Policy from time to time. The latest version will always be available on this page with the updated revision date. Material changes will be communicated to members where appropriate.
              </p>
            </Block>

            <Block id="contact" title="12. Contact Us">
              <p>
                For any question regarding this Privacy Policy or the processing of your personal data, please contact us at <a className="font-medium text-foreground underline underline-offset-4" href="mailto:info@leba.lu">info@leba.lu</a> or by post at the address listed above.
              </p>
            </Block>

          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="container-app flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-primary text-primary-foreground">
              <Globe2 className="h-4 w-4" />
            </span>
            <span className="font-display text-sm font-bold">Luxembourg Eurasia Business Association</span>
          </div>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} LEBA. Esch-sur-Alzette, Luxembourg. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link to="/privacy" hash="cookies" className="hover:text-foreground">Cookies</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Block({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">{title}</h2>
      <div className="mt-3 text-muted-foreground">{children}</div>
    </section>
  );
}
