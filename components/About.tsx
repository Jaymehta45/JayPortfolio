import React from 'react';
import { Reveal } from './Reveal';
import { User, Terminal, Palette, Coffee } from 'lucide-react';

export const About: React.FC = () => {
  const facts = [
    { icon: <User size={16} />, text: "Freelance landing page specialist", color: "bg-blue-50/80 text-blue-700 border-blue-100" },
    { icon: <Palette size={16} />, text: "Poster & social media creative", color: "bg-rose-50/80 text-rose-700 border-rose-100" },
    { icon: <Terminal size={16} />, text: "Hackathon / open-source enthusiast", color: "bg-emerald-50/80 text-emerald-700 border-emerald-100" },
    { icon: <Coffee size={16} />, text: "Exploring AI design tools", color: "bg-amber-50/80 text-amber-700 border-amber-100" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-sm border border-white/50">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
              {/* Text Content */}
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-stone-100/80 text-stone-500 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
                  About Me
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-stone-900 mb-8">
                  A versatile creative who speaks <span className="text-blue-600 underline decoration-blue-200 decoration-4 underline-offset-4">code</span> and <span className="text-rose-500 underline decoration-rose-200 decoration-4 underline-offset-4">design</span>.
                </h2>
                <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
                  <p>
                    I’m Jay Mehta, a passionate designer and developer. I thrive in the intersection of aesthetics and functionality. 
                    My journey involves designing clean UI/UX interfaces and bringing them to life with modern frontend technologies.
                  </p>
                  <p>
                    Whether I'm ensuring brand consistency in a graphic design project or solving complex logic problems in Python and C++, 
                    I am driven by the desire to build things that look good and work even better.
                  </p>
                </div>

                {/* Fact Chips */}
                <div className="mt-10 flex flex-wrap gap-3">
                  {facts.map((fact, index) => (
                    <div 
                      key={index}
                      className={`flex items-center gap-2 px-4 py-2.5 border rounded-full text-sm font-medium transition-transform hover:scale-105 ${fact.color}`}
                    >
                      {fact.icon}
                      {fact.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};