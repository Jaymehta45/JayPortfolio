import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
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
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (requestRunning) window.cancelAnimationFrame(requestRunning);
    };
  }, []);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('web-projects');
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden"
    >
      {/* Background Decorative Blobs (Parallax Layers) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {/* Layer 1: Deep Background (Moves slowest) */}
        <div 
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl opacity-60 will-change-transform mix-blend-multiply"
          style={{ transform: `translateY(${offset * 0.5}px)` }}
        ></div>
        
        {/* Layer 2: Mid Background (Moves slightly faster) */}
        <div 
          className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-amber-100/40 rounded-full blur-3xl opacity-60 animate-[pulse_8s_ease-in-out_infinite] will-change-transform mix-blend-multiply"
          style={{ transform: `translateY(${offset * 0.3}px)` }}
        ></div>
        
        {/* Layer 3: Foreground Accent (Moves fastest among background elements) */}
        <div 
          className="absolute top-[40%] left-[20%] w-[200px] h-[200px] bg-rose-100/30 rounded-full blur-3xl opacity-40 will-change-transform mix-blend-multiply"
          style={{ transform: `translateY(${offset * 0.2}px)` }}
        ></div>
      </div>

      {/* Main Content (Slight parallax to separate from background) */}
      <div 
        className="relative z-10 max-w-5xl mx-auto space-y-8 will-change-transform"
        style={{ transform: `translateY(${offset * 0.1}px)` }}
      >
        <div className="space-y-4 opacity-0 animate-[fadeInDown_1s_ease-out_forwards]">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-extrabold text-black tracking-tight leading-[1.1]">
            Jay <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600 relative inline-block">
              Mehta
              <svg className="absolute w-full h-4 -bottom-2 left-0 text-blue-200/50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>
        </div>

        <div className="opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
          <h2 className="text-xl md:text-2xl text-stone-700 font-semibold">
            Website Designer <span className="text-blue-500 mx-2">•</span> Full Stack Developer <span className="text-rose-500 mx-2">•</span> Graphic Designer
          </h2>
        </div>

        <p className="text-stone-800 font-medium max-w-2xl mx-auto text-lg md:text-xl leading-relaxed opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards]">
          Crafting pixel-perfect, responsive websites and visual identities that bridge the gap between <span className="font-bold text-black bg-blue-100/50 px-1 rounded">logic</span> and <span className="font-bold text-black bg-rose-100/50 px-1 rounded">creativity</span>.
        </p>

        <div className="pt-4 opacity-0 animate-[fadeInUp_1s_ease-out_0.8s_forwards]">
          <a
            href="#web-projects"
            onClick={handleScrollToProjects}
            className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white font-medium rounded-full hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 hover:scale-105"
          >
            View My Work
            <ArrowDown size={18} />
          </a>
        </div>
      </div>

      {/* CSS Keyframes */}
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};