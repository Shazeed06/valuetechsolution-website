"use client";

const testimonials = [
  {
    id: 1,
    quote: "Value Tech delivered our website in 3 weeks. The performance scores blew us away — 98 on Lighthouse!",
    author: "Rahul M.",
    company: "Founder, StartupX",
  },
  {
    id: 2,
    quote: "They understood our brand instantly. The design is stunning and our leads doubled in the first month.",
    author: "Sarah K.",
    company: "CEO, London SaaS",
  },
  {
    id: 3,
    quote: "Best investment we made. Our Google rankings jumped within 60 days of launch.",
    author: "Amit P.",
    company: "CTO, Delhi PropTech",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-bodyBg text-darkBg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block">What Clients Say</span>
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight">Loved by Founders &amp; Startups</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white rounded-2xl p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-6 text-tertiary">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-gray-700 font-medium mb-8">"{t.quote}"</p>
              </div>
              <div>
                <div className="font-bold text-darkBg">{t.author}</div>
                <div className="text-sm text-gray-500">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
