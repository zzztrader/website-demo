import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe2, GraduationCap, Sparkles, Handshake, Lightbulb, Network, Eye, BookOpen, MapPin, Phone, Mail, Check } from "lucide-react";
import heroImg from "@/assets/hero-handshake.jpg";
import communityImg from "@/assets/community.jpg";
import teamAboveImg from "@/assets/team-above.jpg";
import groupClapImg from "@/assets/group-clap.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LEBA — Luxembourg Eurasia Business Association" },
      { name: "description", content: "Luxembourg Eurasia Business Association is a Luxembourg-based non-profit strengthening entrepreneurship, cross-border cooperation, and inclusive economic participation between Luxembourg, Europe and Eurasia." },
      { property: "og:title", content: "LEBA — Luxembourg Eurasia Business Association" },
      { property: "og:description", content: "Mentoring, networking, and capacity-building for entrepreneurs across Luxembourg, Eurasia and Europe." },
    ],
  }),
  component: Home,
});

const nav = [
  { label: "About", href: "#about" },
  { label: "Membership", href: "#membership" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

const whatWeDo = [
  { icon: GraduationCap, title: "Mentoring & Entrepreneurial Guidance", text: "We support aspiring and existing entrepreneurs through structured mentoring, practical advice, and peer learning to help them launch and grow sustainable businesses." },
  { icon: Network, title: "Networking & Cooperation Platforms", text: "We create platforms that connect entrepreneurs across Luxembourg, the Eurasian region, and the broader European business ecosystem." },
  { icon: Sparkles, title: "Skills & Capacity Building", text: "Through workshops, non-formal education, and learning activities, we strengthen entrepreneurial, digital, and business competences." },
  { icon: Lightbulb, title: "Access to Opportunities", text: "We help members navigate financial incentives, innovation opportunities, and business support systems." },
];

const memberBenefits = [
  { icon: Network, title: "Networking & Cooperation", text: "Access networking events and cooperation platforms across Europe and Eurasia." },
  { icon: GraduationCap, title: "Mentoring & Learning", text: "Priority access to mentoring and capacity-building activities." },
  { icon: Handshake, title: "Cross-Border Collaboration", text: "Opportunities to partner and collaborate with international entrepreneurs." },
  { icon: Eye, title: "Network Visibility", text: "Raise your profile within the LEBA community and partner ecosystem." },
  { icon: BookOpen, title: "Shared Knowledge", text: "Access curated insights and peer learning from fellow entrepreneurs." },
];

const audiences = [
  "Aspiring entrepreneurs (18+)",
  "Early-stage & growing businesses",
  "Youth & migrant backgrounds",
  "Cross-border entrepreneurs",
  "Institutions & organizations",
];

const projects = [
  {
    tag: "Flagship",
    title: "LEBA Mentoring Track",
    text: "A structured mentoring programme for aspiring entrepreneurs and early-stage businesses. Participants receive guidance, peer support, and practical tools to shape and launch sustainable business ideas.",
    bullets: ["1:1 mentoring with experienced business practitioners", "Action plans focused on measurable next steps"],
  },
  {
    tag: "Collaboration",
    title: "Cross-Border Cooperation Lab",
    text: "A networking and cooperation platform that connects entrepreneurs from Luxembourg and the Eurasian region with European partners for partnership building and market exploration.",
    bullets: ["Matchmaking between founders and partner organizations", "Thematic sessions on EU market opportunities", "Regional cooperation roundtables"],
  },
  {
    tag: "Inclusion",
    title: "Inclusive Entrepreneurship Workshops",
    text: "Non-formal learning activities aimed at strengthening entrepreneurial and digital competences among youth and adults, especially people from migrant backgrounds facing structural barriers.",
    bullets: ["Open workshops & peer-led sessions", "Digital and business skill tracks"],
  },
];

const team = [
  { name: "Jasurbek Ayupov", role: "Co-Founder" },
  { name: "Dilmurat Nurakhmetov", role: "Co-Founder" },
];

const resources = [
  { title: "Business Development", text: "Guidance and frameworks to help grow and structure your business." },
  { title: "Support & Incentives", text: "Information on available services, grants, and incentive programmes." },
  { title: "Educational Materials", text: "Curated learning resources for entrepreneurs at every stage." },
  { title: "Events & Insights", text: "Summaries and key takeaways from LEBA events and sessions." },
];

const partners = ["Luxinnovation", "House of Entrepreneurship", "Chamber of Commerce", "Silicon Luxembourg", "Eurasia Hub", "LuxDev", "Nyuko", "Open Borders"];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="bg-accent text-accent-foreground">
        <div className="container-app flex items-center justify-center gap-2 py-2.5 text-sm font-medium">
          <span>Cross-border cooperation starts with one conversation.</span>
          <a href="#contact" className="inline-flex items-center gap-1 underline underline-offset-4 hover:no-underline">
            Get in touch <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="container-app flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-card">
              <Globe2 className="h-5 w-5" />
            </span>
            <span className="font-display text-base font-extrabold leading-tight">
              <span className="block text-xs tracking-[0.2em] text-muted-foreground">LUXEMBOURG</span>
              <span className="block">Eurasia Business Association</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5">
            Contact <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Two business professionals shaking hands" className="h-full w-full object-cover" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="container-app relative grid min-h-[640px] items-center py-20 text-primary-foreground md:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Home
            </span>
            <h1 className="mt-6 text-balance font-display text-5xl font-extrabold leading-[1.05] md:text-7xl">
              Connecting Entrepreneurs From <span className="text-accent">Luxembourg to Eurasia</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/85 md:text-xl">
              Luxembourg Eurasia Business Association (LEBA) is a Luxembourg-based non-profit dedicated to strengthening entrepreneurship, cross-border cooperation, and inclusive economic participation at the heart of Europe.
            </p>
            <p className="mt-4 max-w-2xl text-base text-white/70">
              We believe inclusive entrepreneurship, intercultural dialogue, and ethical business practices are key drivers of sustainable economic growth.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#membership" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-semibold text-accent-foreground shadow-elevated transition-transform hover:-translate-y-0.5">
                Become a Member <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10">
                Join Our Programs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-pad">
        <div className="container-app">
          <div className="max-w-2xl">
            <span className="eyebrow">What We Do</span>
            <h2 className="mt-3 text-balance text-4xl font-extrabold md:text-5xl">
              Practical pathways for entrepreneurs to <span className="text-primary">build, connect, and grow.</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {whatWeDo.map(({ icon: Icon, title, text }) => (
              <article key={title} className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About / Who We Are */}
      <section id="about" className="bg-surface section-pad">
        <div className="container-app grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img src={communityImg} alt="EUBA community members" className="rounded-3xl object-cover shadow-elevated" width={1280} height={960} loading="lazy" />
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-accent px-5 py-4 text-accent-foreground shadow-elevated md:block">
              <div className="font-display text-3xl font-extrabold leading-none">2026</div>
              <div className="text-xs font-semibold uppercase tracking-widest">Founded in Luxembourg</div>
            </div>
          </div>
          <div>
            <span className="eyebrow">Who We Are</span>
            <h2 className="mt-3 text-balance text-4xl font-extrabold md:text-5xl">A non-profit bridge between business worlds.</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Luxembourg Eurasia Business Association (LEBA) is a non-profit based in Esch-sur-Alzette, Luxembourg. We develop and coordinate networks of entrepreneurs from Luxembourg and the Eurasian region, strengthening cooperation with European business ecosystems and promoting inclusive entrepreneurship.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
                <span className="eyebrow !text-accent-foreground !text-foreground">Mission</span>
                <p className="mt-2 text-sm text-muted-foreground">
                  Strengthen entrepreneurship and inclusive growth by connecting people, opportunities, and ecosystems across Europe and Eurasia.
                </p>
              </div>
              <div className="rounded-2xl bg-gradient-primary p-5 text-primary-foreground shadow-card">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">Vision</span>
                <p className="mt-2 text-sm text-primary-foreground/85">
                  Open, ethical, and sustainable business that overcomes stereotypes and deepens cross-cultural dialogue.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Objectives */}
        <div className="container-app mt-20 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">Objectives</span>
            <h3 className="mt-3 text-3xl font-extrabold md:text-4xl">Empowering Entrepreneurs</h3>
            <ul className="mt-6 space-y-3">
              {[
                "Support entrepreneurs in accessing financial incentives and development opportunities.",
                "Build a network of diverse entrepreneurs with real impact on the economy.",
                "Facilitate integration into the European business world.",
                "Create platforms for cooperation, innovation, and ethical business growth.",
                "Promote innovation and friendly, ethical, sustainable business.",
                "Strengthen European–Eurasian integration and cross-cultural dialogue.",
                "Overcome stereotypes and deepen Luxembourg–Eurasian relations.",
                "Support educational, cultural, and business exchange initiatives.",
              ].map((o) => (
                <li key={o} className="flex gap-3 text-muted-foreground">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={teamAboveImg} alt="Team collaborating" className="aspect-[4/5] rounded-2xl object-cover shadow-card" width={1280} height={960} loading="lazy" />
            <img src={groupClapImg} alt="Audience applauding" className="mt-12 aspect-[4/5] rounded-2xl object-cover shadow-card" width={1280} height={960} loading="lazy" />
          </div>
        </div>
      </section>

      {/* Membership */}
      <section id="membership" className="section-pad">
        <div className="container-app">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="eyebrow">Membership</span>
              <h2 className="mt-3 text-balance text-4xl font-extrabold md:text-5xl">Why Join LEBA?</h2>
              <p className="mt-4 text-lg text-muted-foreground">Unlock opportunities to grow, connect, and make an impact across borders.</p>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5">
              Apply for Membership <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {memberBenefits.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/30 text-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-bold">{title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
            <div className="rounded-2xl bg-gradient-primary p-6 text-primary-foreground shadow-elevated">
              <h3 className="font-display text-xl font-bold">Who We Support</h3>
              <p className="mt-2 text-sm text-primary-foreground/80">Our programs are designed for diverse entrepreneurs and communities ready to grow.</p>
              <ul className="mt-4 space-y-2 text-sm">
                {audiences.map((a) => (
                  <li key={a} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" />{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-surface section-pad">
        <div className="container-app">
          <div className="max-w-2xl">
            <span className="eyebrow">Projects</span>
            <h2 className="mt-3 text-balance text-4xl font-extrabold md:text-5xl">Programs Built For Real Progress</h2>
            <p className="mt-4 text-lg text-muted-foreground">Each project combines practical support, cross-border collaboration, and inclusive participation to help entrepreneurs move from idea to impact.</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((p, i) => (
              <article key={p.title} className={`flex flex-col rounded-3xl border border-border p-7 shadow-card ${i === 0 ? "bg-foreground text-background" : "bg-card"}`}>
                <span className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest ${i === 0 ? "bg-accent text-accent-foreground" : "bg-primary-soft text-primary"}`}>
                  {p.tag}
                </span>
                <h3 className="mt-5 text-2xl font-extrabold">{p.title}</h3>
                <p className={`mt-3 text-sm ${i === 0 ? "text-background/75" : "text-muted-foreground"}`}>{p.text}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${i === 0 ? "bg-accent" : "bg-primary"}`} />
                      <span className={i === 0 ? "text-background/85" : ""}>{b}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`mt-7 inline-flex items-center gap-2 text-sm font-semibold ${i === 0 ? "text-accent" : "text-primary"}`}>
                  Learn more <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="section-pad">
        <div className="container-app">
          <div className="max-w-2xl">
            <span className="eyebrow">Our Team</span>
            <h2 className="mt-3 text-balance text-4xl font-extrabold md:text-5xl">Practitioners advancing entrepreneurship & cooperation.</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {team.map((m) => (
              <div key={m.name} className="rounded-2xl border border-border bg-card p-5 text-center shadow-card transition-transform hover:-translate-y-1">
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-primary text-2xl font-extrabold text-primary-foreground shadow-card">
                  {m.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <h3 className="mt-4 font-bold">{m.name}</h3>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="bg-surface section-pad">
        <div className="container-app">
          <div className="max-w-2xl">
            <span className="eyebrow">Resources</span>
            <h2 className="mt-3 text-balance text-4xl font-extrabold md:text-5xl">Tools for Your Growth</h2>
            <p className="mt-4 text-lg text-muted-foreground">Practical information and tools to make entrepreneurship more accessible and inclusive.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {resources.map((r, i) => (
              <div key={r.title} className="group rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="font-display text-3xl font-extrabold text-accent">0{i + 1}</div>
                <h3 className="mt-3 font-bold">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="section-pad">
        <div className="container-app">
          <div className="max-w-2xl">
            <span className="eyebrow">Partners</span>
            <h2 className="mt-3 text-balance text-4xl font-extrabold md:text-5xl">Trusted Partners & Collaborators</h2>
            <p className="mt-4 text-lg text-muted-foreground">We cooperate with business networks, civil society organisations, educational institutions, and innovation ecosystems across Europe and Eurasia.</p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {partners.map((p) => (
              <div key={p} className="grid h-24 place-items-center rounded-2xl border border-border bg-card font-display text-lg font-bold text-muted-foreground shadow-card transition-colors hover:text-foreground">
                {p}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-gradient-primary p-8 text-primary-foreground shadow-elevated">
            <p className="max-w-xl text-lg">We are open to new partnerships that strengthen European-Eurasian economic dialogue and sustainable business development.</p>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground">
              Become a Partner <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-surface section-pad">
        <div className="container-app grid gap-10 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Contact Us</span>
            <h2 className="mt-3 text-balance text-4xl font-extrabold md:text-5xl">Get in Touch With Us</h2>
            <p className="mt-4 text-lg text-muted-foreground">We are here to connect and assist you. Reach us through the form, email, or phone.</p>

            <div className="mt-8 space-y-5">
              {[
              { icon: MapPin, title: "Our Location", text: "14, Rue du Commerce, L-4067 Esch-sur-Alzette, Grand Duchy of Luxembourg" },
                { icon: Phone, title: "Phone Number", text: "+352 27 86 12 34" },
              { icon: Mail, title: "Email Address", text: "info@leba.lu" },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground"><Icon className="h-5 w-5" /></span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{title}</div>
                    <div className="mt-1 font-semibold">{text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="rounded-3xl border border-border bg-card p-7 shadow-elevated" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Name</span>
                <input className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="Your name" />
              </label>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Email</span>
                <input type="email" className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="you@example.com" />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Subject</span>
              <input className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="How can we help?" />
            </label>
            <label className="mt-4 block">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Message</span>
              <textarea rows={5} className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="Tell us a bit about your project or question..." />
            </label>
            <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 font-semibold text-background transition-transform hover:-translate-y-0.5">
              Send Message <ArrowRight className="h-4 w-4" />
            </button>
          </form>
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


