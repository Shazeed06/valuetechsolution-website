"use client";
import { useEffect, useRef, useState } from "react";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      const start = performance.now();
      const dur = 1500;
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / dur);
        setVal(Math.round((1 - Math.pow(1 - p, 3)) * to));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      io.disconnect();
    }, { threshold: 0.5 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);
  
  return <span ref={ref}>{val}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-24 bg-darkBg text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">
          <div>
            <div className="font-montserrat font-bold text-5xl md:text-6xl lg:text-7xl text-primary mb-2">
              <Counter to={50} suffix="+" />
            </div>
            <div className="text-gray-400 font-medium">Projects Delivered</div>
          </div>
          <div>
            <div className="font-montserrat font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-2">
              <Counter to={95} suffix="+" />
            </div>
            <div className="text-gray-400 font-medium">Avg. Lighthouse Score</div>
          </div>
          <div>
            <div className="font-montserrat font-bold text-5xl md:text-6xl lg:text-7xl text-primary mb-2">
              <Counter to={4} suffix="" />
            </div>
            <div className="text-gray-400 font-medium">Weeks Avg. Timeline</div>
          </div>
          <div>
            <div className="font-montserrat font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-2">
              <Counter to={100} suffix="%" />
            </div>
            <div className="text-gray-400 font-medium">Client Retention</div>
          </div>
        </div>
      </div>
    </section>
  );
}
