"use client";
import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Web Development",
    description: "Next.js, React, and headless CMS websites built for speed, SEO, and scale.",
    borderColor: "border-primary",
  },
  {
    id: "02",
    title: "UI/UX Design",
    description: "Beautiful, conversion-focused designs from wireframe to production-ready.",
    borderColor: "border-secondary",
  },
  {
    id: "03",
    title: "SEO & Performance",
    description: "Technical SEO, Core Web Vitals, and content strategy that ranks and converts.",
    borderColor: "border-tertiary",
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-bodyBg text-darkBg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block">Our Services</span>
          <h2 className="font-montserrat font-bold text-5xl md:text-6xl tracking-tight">What We Build</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className={`bg-white rounded-2xl p-8 shadow-sm border-t-4 ${service.borderColor} hover:-translate-y-2 transition-transform duration-300`}>
              <div className="text-gray-300 font-montserrat font-bold text-4xl mb-6">{service.id}</div>
              <h3 className="font-montserrat font-bold text-2xl mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
              <Link href="/services" className="text-primary font-medium hover:underline inline-flex items-center">
                Learn more &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
