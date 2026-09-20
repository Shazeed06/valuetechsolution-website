"use client";
import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "E-commerce Platform",
    tags: ["Next.js", "Shopify", "SEO"],
    href: "/work/ecommerce",
  },
  {
    id: 2,
    name: "SaaS Dashboard",
    tags: ["React", "Design System", "API"],
    href: "/work/saas",
  },
  {
    id: 3,
    name: "Agency Website",
    tags: ["Next.js", "Animation", "CMS"],
    href: "/work/agency",
  },
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-bodyBg text-darkBg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block">Our Work</span>
          <h2 className="font-montserrat font-bold text-5xl md:text-6xl tracking-tight">Recent Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div key={project.id} className="group">
              <div className="aspect-[16/11] w-full rounded-2xl overflow-hidden relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1ab9a2]/20 to-[#141414] group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 text-white/80 text-sm font-medium z-10">{project.name}</div>
              </div>
              <h3 className="font-montserrat font-bold text-2xl mb-3">{project.name}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={project.href} className="text-primary font-medium hover:underline inline-flex items-center">
                View Project &rarr;
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/work" className="inline-flex items-center justify-center border border-darkBg text-darkBg px-8 py-4 rounded-full font-medium hover:bg-darkBg hover:text-white transition-all">
            See all projects &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
