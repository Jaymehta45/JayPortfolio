import React, { useEffect, useState } from 'react';
import { Reveal } from './Reveal';
import { Compass, Cpu, PenTool, Search, Image } from 'lucide-react';

export const Highlights: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let requestRunning: number | null = null;
    const handleScroll = () => {
      if (requestRunning === null) {
        requestRunning = window.requestAnimationFrame(() => {
          setOffset(window.scrollY);
          requestRunning = null;
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const highlights = [
    {
      icon: <Search size={24} />,
      text: "I reverse-engineer existing website layouts for practice.",
      bg: "bg-blue-50",
      color: "text-blue-600"
    },
    {
      icon: <Image size={24} />,
      text: "I experiment with color grading and photo editing for social posts.",
      bg: "bg-amber-50",
      color: "text-amber-600"
    },
    {
      icon: <PenTool size={24} />,
      text: "I like turning boring PDFs into aesthetic layouts.",
      bg: "bg-emerald-50",
      color: "text-emerald-600"
    },
    {
      icon: <Cpu size={24} />,
      text: "I explore automation scripts in Python for small tasks.",
      bg: "bg-stone-100",
      color: "text-stone-700"
    },
    {
      icon: <Compass size={24} />,
      text: "Interested in blending AI tools with design workflows.",
      bg: "bg-rose-50",
      color: "text-rose-600"
    }
  ];

  return (
    <section id="highlights" className="py-20 relative overflow-hidden">
      {/* Subtle Parallax Decoration */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-white/30 rounded-full blur-3xl pointer-events-none will-change-transform"
        style={{ transform: `translate(20%, ${offset * -0.1}px)` }}
      ></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <Reveal className="text-center mb-16">
          <div className="inline-block bg-white/50 backdrop-blur-md px-6 py-2 rounded-full mb-4 border border-white/50">
             <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900">Beyond Code & Design</h2>
          </div>
          <p className="text-stone-600 font-medium">
            I'm not just a developer or designer. I'm a curious creative who loves to explore.
          </p>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-6">
          {highlights.map((item, index) => (
            <Reveal key={index} delay={index * 50}>
              <div className="flex items-start gap-4 p-6 rounded-xl border border-white/60 bg-white/80 backdrop-blur-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 max-w-sm w-full group z-10 relative">
                <div className={`p-3 rounded-lg ${item.bg} ${item.color} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <p className="text-stone-700 font-medium leading-snug pt-1">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};