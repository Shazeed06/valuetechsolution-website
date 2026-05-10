import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import MediaDivider from "@/components/MediaDivider";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Value Tech Solution collects, uses, and protects information shared by visitors and clients.",
  alternates: { canonical: "https://valuetechsolution.com/privacy" },
  robots: { index: true, follow: true },
};

const updated = "2026-05-10";

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="(legal)"
        title={<>Privacy Policy.</>}
        description={`This page explains what we collect when you visit valuetechsolution.com or work with us, and what we do with it. Last updated ${updated}.`}
      />

      <MediaDivider
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2200&q=80"
        alt="Quiet open office"
        caption="(privacy · by default)"
        headline={
          <>
            Minimum data.{" "}
            <span className="italic-accent text-white/70">Maximum care.</span>
          </>
        }
        meta={
          <>
            GDPR · DPDP
            <br />
            CCPA-aligned
          </>
        }
        aspect="wide"
      />

      <article className="section pt-0">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <aside className="hidden lg:col-span-3 lg:block">
            <nav className="sticky top-32 space-y-2 text-sm">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block text-carbon-500 transition hover:text-carbon-950"
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="prose-vts lg:col-span-9">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="mb-12 scroll-mt-32">
                <h2 className="font-display text-2xl font-bold tracking-[-0.025em] text-carbon-950 sm:text-3xl">
                  {s.title}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-carbon-700">
                  {s.body}
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}

const sections = [
  {
    id: "who",
    title: "1 · Who we are",
    body: (
      <>
        <p>
          Value Tech Solution is a remote-first studio incorporated to deliver
          AI automation, web development, SEO, and design-system engagements
          to clients globally. Mailing and primary correspondence happens via{" "}
          <a className="underline" href="mailto:admin@valuetechsolution.com">
            admin@valuetechsolution.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "data",
    title: "2 · What we collect",
    body: (
      <>
        <p>
          We collect three categories of information:
        </p>
        <ul className="ml-5 list-disc space-y-2">
          <li>
            <strong>Information you give us</strong> — name, work email,
            company, project description when you submit a contact form or
            book a call.
          </li>
          <li>
            <strong>Information from analytics</strong> — page views, referrer,
            approximate location (country / region from IP), browser, device
            class, and aggregated session events. We use a privacy-respecting
            analytics provider that does not sell or resell data.
          </li>
          <li>
            <strong>Cookies and similar</strong> — only the cookies you
            consent to via the banner shown on first visit. Strictly necessary
            cookies are always set.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "use",
    title: "3 · How we use it",
    body: (
      <>
        <ul className="ml-5 list-disc space-y-2">
          <li>To respond to your enquiry and scope a project.</li>
          <li>To send the occasional newsletter you opted into.</li>
          <li>
            To improve the site — which pages get read, which CTAs work, where
            people drop off.
          </li>
          <li>To meet legal and accounting obligations once you become a client.</li>
        </ul>
      </>
    ),
  },
  {
    id: "share",
    title: "4 · Who we share with",
    body: (
      <>
        <p>
          We share data only with the small set of vendors required to run
          the business: our hosting provider (Vercel), email provider, CRM,
          analytics provider, and legal / accounting partners. Each vendor is
          bound by a Data Processing Agreement.
        </p>
        <p>
          We do not sell, rent, or trade your information. If we ever
          materially change this policy, we'll publish a notice and update the
          date at the top.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    title: "5 · Your rights",
    body: (
      <>
        <p>
          You can request access to, correction of, or deletion of any data
          we hold about you by emailing{" "}
          <a className="underline" href="mailto:admin@valuetechsolution.com">
            admin@valuetechsolution.com
          </a>
          . We respond within 30 days. Residents of the EU/UK have rights
          under the GDPR; residents of India under the DPDP Act 2023;
          residents of California under the CCPA. You can exercise any of
          these rights by emailing the same address.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "6 · How long we keep it",
    body: (
      <>
        <p>
          Contact-form submissions: 24 months (then deleted unless you
          became a client). Active client records: duration of the
          engagement plus 7 years for tax compliance. Analytics:
          aggregated, retained 14 months.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "7 · Security",
    body: (
      <>
        <p>
          We use TLS in transit, encrypted-at-rest databases, MFA on
          internal tools, and the principle of least privilege for client
          data. See our{" "}
          <a className="underline" href="/security">
            security page
          </a>{" "}
          for details on infrastructure, access control, and incident
          response.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "8 · Contact",
    body: (
      <>
        <p>
          Questions about this policy:{" "}
          <a className="underline" href="mailto:admin@valuetechsolution.com">
            admin@valuetechsolution.com
          </a>
          .
        </p>
      </>
    ),
  },
];
