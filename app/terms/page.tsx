import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import MediaDivider from "@/components/MediaDivider";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The basic rules under which Value Tech Solution provides services through valuetechsolution.com.",
  alternates: { canonical: "https://valuetechsolution.com/terms" },
};

const updated = "2026-05-10";

const sections = [
  {
    id: "acceptance",
    title: "1 · Acceptance",
    body: (
      <p>
        By accessing this website or engaging Value Tech Solution for any
        service, you accept these terms. If you don&apos;t accept them, please
        don&apos;t use the site or engage us. These terms apply to visitors,
        prospects, and clients alike.
      </p>
    ),
  },
  {
    id: "scope",
    title: "2 · Scope of work",
    body: (
      <>
        <p>
          Engagements are governed by a written Statement of Work (SOW) that
          includes scope, deliverables, timeline, price, and assumptions.
          Anything not in the SOW is not in scope. Change requests are
          quoted in writing and added to the SOW before work proceeds.
        </p>
      </>
    ),
  },
  {
    id: "fees",
    title: "3 · Fees and payment",
    body: (
      <>
        <p>
          Most engagements are fixed-price, billed in three milestones —
          50% on signing, 30% mid-project, 20% on delivery — unless the SOW
          says otherwise. Retainers are billed monthly in advance. Invoices
          are due within 14 days of issue; overdue amounts accrue 1.5%
          monthly interest.
        </p>
      </>
    ),
  },
  {
    id: "ip",
    title: "4 · Intellectual property",
    body: (
      <>
        <p>
          You own the deliverables we produce for you under the SOW once
          all fees are paid in full. We retain rights to our pre-existing
          tooling, frameworks, internal libraries, and to publish anonymised
          case-study material unless the SOW says otherwise.
        </p>
      </>
    ),
  },
  {
    id: "warranty",
    title: "5 · Warranty",
    body: (
      <>
        <p>
          We warrant that deliverables will conform to the SOW and be free
          of material defects for 30 days after delivery. The site and
          services are otherwise provided &quot;as is&quot; without other
          warranties, express or implied.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "6 · Limitation of liability",
    body: (
      <>
        <p>
          Our aggregate liability for any claim arising out of an
          engagement is limited to the fees you paid us for that specific
          engagement in the 12 months preceding the claim. We are not liable
          for indirect, consequential, or punitive damages.
        </p>
      </>
    ),
  },
  {
    id: "confidential",
    title: "7 · Confidentiality",
    body: (
      <p>
        We keep your business information, credentials, and project details
        confidential. You agree to do the same with any non-public
        materials we share. NDAs available on request.
      </p>
    ),
  },
  {
    id: "termination",
    title: "8 · Termination",
    body: (
      <p>
        Either party may terminate an engagement with 14 days written
        notice. Fees for work completed up to the termination date are
        payable. Retainers terminate at the end of the current paid month.
      </p>
    ),
  },
  {
    id: "law",
    title: "9 · Governing law",
    body: (
      <p>
        These terms are governed by the laws of the jurisdiction set in the
        SOW (default: India). Disputes go to the courts of that
        jurisdiction unless we agree to arbitration.
      </p>
    ),
  },
  {
    id: "changes",
    title: "10 · Changes",
    body: (
      <p>
        We may update these terms occasionally. The &quot;last updated&quot;
        date at the top reflects the most recent change. Material changes
        will be flagged on the home page for 14 days.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="(legal)"
        title={<>Terms of service.</>}
        description={`The basic rules of the road for using this site and engaging us. Last updated ${updated}.`}
      />

      <MediaDivider
        src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=2200&q=80"
        alt="Studio workspace at low light"
        caption="(rules · in writing)"
        headline={
          <>
            Scope written down.{" "}
            <span className="italic-accent text-white/70">
              Tradeoffs written down.
            </span>
          </>
        }
        meta={
          <>
            fixed price
            <br />
            no surprises
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

          <div className="lg:col-span-9">
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
