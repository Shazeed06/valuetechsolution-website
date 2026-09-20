"use client";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We learn your goals, audience, and competitors",
  },
  {
    num: "02",
    title: "Design",
    desc: "Wireframes, UI mockups, and design system",
  },
  {
    num: "03",
    title: "Develop",
    desc: "Next.js build, CMS integration, SEO setup",
  },
  {
    num: "04",
    title: "Launch",
    desc: "Deploy, test, go live. Support included.",
  },
];

export default function EngagementProcess() {
  return (
    <section className="py-24 bg-darkBg text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block">Our Process</span>
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight">From Idea to Launch in 4 Weeks</h2>
        </div>

        <div className="relative">
          {/* Connecting Line (desktop only) */}
          <div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-gray-800 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                <div className="w-12 h-12 bg-darkBg border-2 border-primary text-primary rounded-full flex items-center justify-center font-bold text-xl mb-6 mx-auto md:mx-0">
                  {step.num}
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
