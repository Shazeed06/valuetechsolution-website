import type { Metadata } from "next";
import { ShieldCheck, Lock, KeyRound, EyeOff, Server, FileCheck } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import MediaDivider from "@/components/MediaDivider";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Security",
  description:
    "How Value Tech Solution secures client systems, code, and data. Infrastructure, access control, and incident response.",
  alternates: { canonical: "https://valuetechsolution.com/security" },
};

const pillars = [
  {
    icon: Server,
    title: "Infrastructure",
    body: "Hosted on Vercel, AWS, and GCP. TLS in transit, AES-256 encryption at rest. Daily backups. Region-pinned data residency available on request.",
  },
  {
    icon: Lock,
    title: "Access control",
    body: "MFA enforced on every internal account. Just-in-time, least-privilege access to client systems. Access reviewed quarterly. Offboarding revokes within 24 hours.",
  },
  {
    icon: KeyRound,
    title: "Secrets management",
    body: "Client credentials stored in 1Password Business with audit logs. No secrets in repos. Production keys rotated on schedule and on personnel changes.",
  },
  {
    icon: EyeOff,
    title: "Privacy by default",
    body: "We collect the minimum data needed. PII is never logged. Sample datasets used in development are synthetic or hashed.",
  },
  {
    icon: FileCheck,
    title: "Code review",
    body: "Every change is peer-reviewed. CI runs typecheck, tests, and dependency vulnerability scans before merge. Production deploys pass through an additional reviewer.",
  },
  {
    icon: ShieldCheck,
    title: "Incident response",
    body: "Documented runbook, severity matrix, and on-call rotation. Affected clients notified within 24 hours. Post-mortems shared within 7 days.",
  },
];

const certifications = [
  { label: "SOC 2 Type II", status: "in progress · Q3 2026", note: "Type I issued; Type II report due Q3" },
  { label: "ISO 27001", status: "scoping", note: "Gap analysis underway" },
  { label: "HIPAA aware", status: "operational", note: "BAA available for healthcare engagements" },
  { label: "GDPR / DPDP", status: "compliant", note: "DPA signed with all sub-processors" },
];

export default function SecurityPage() {
  return (
    <>
      <PageHeader
        eyebrow="(security)"
        title={
          <>
            How we protect your{" "}
            <span className="italic-accent text-carbon-500">systems.</span>
          </>
        }
        description="A short summary of how Value Tech Solution handles infrastructure, access, secrets, code, and incidents. Detailed security questionnaires and DPAs available on request."
      />

      <section className="section pt-0">
        <div className="container-x">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-carbon-950/[0.08] bg-carbon-950/[0.08] sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="flex flex-col bg-[rgb(252,251,249)] p-7 transition-colors hover:bg-white sm:p-9"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full border border-carbon-950/15 bg-white text-carbon-950">
                  <p.icon size={16} />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold tracking-[-0.025em] text-carbon-950">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-carbon-500">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MediaDivider
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2200&q=80"
        alt="Server room infrastructure"
        caption="(infrastructure · hardened)"
        headline={
          <>
            TLS everywhere.{" "}
            <span className="italic-accent text-white/70">
              Encrypted at rest.
            </span>
          </>
        }
        meta={
          <>
            MFA · least-priv
            <br />
            access reviews
          </>
        }
        aspect="cine"
      />

      <section className="section">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="eyebrow">
                <span className="h-px w-8 bg-carbon-500" />
                Compliance posture
              </span>
              <h2 className="heading-md gap-eyebrow-heading">
                Certifications &{" "}
                <span className="italic-accent text-carbon-500">stance.</span>
              </h2>
              <p className="mt-6 max-w-md text-carbon-500">
                We&apos;re a young studio. Here&apos;s exactly where we are
                on the standard set of certifications — no spin.
              </p>
            </div>
            <ul className="lg:col-span-8 lg:mt-3">
              {certifications.map((c, i) => (
                <li
                  key={c.label}
                  className={`grid grid-cols-12 items-baseline gap-4 py-6 ${
                    i !== 0 ? "border-t border-carbon-950/[0.08]" : ""
                  }`}
                >
                  <span className="col-span-12 sm:col-span-4 font-display text-xl font-bold tracking-[-0.02em] text-carbon-950">
                    {c.label}
                  </span>
                  <span className="col-span-12 sm:col-span-3 font-mono text-[10px] uppercase tracking-[0.24em] text-carbon-500">
                    {c.status}
                  </span>
                  <span className="col-span-12 sm:col-span-5 text-sm text-carbon-500">
                    {c.note}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          <div className="rounded-3xl border border-carbon-950 bg-carbon-950 p-8 text-white sm:p-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/55">
              (security questionnaires)
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
              Need a SIG, CAIQ, or custom questionnaire?
            </h2>
            <p className="mt-4 max-w-2xl text-white/65">
              Email{" "}
              <a
                className="underline underline-offset-4"
                href="mailto:admin@valuetechsolution.com"
              >
                admin@valuetechsolution.com
              </a>{" "}
              and we&apos;ll get a draft back to you inside 3 business days.
              We&apos;re happy to sign your DPA and BAA where applicable.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
