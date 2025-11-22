import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { WebProjects } from './components/WebProjects';
import { GraphicDesign } from './components/GraphicDesign';
import { Highlights } from './components/Highlights';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Global Background Video */}
      <div className="fixed inset-0 w-full h-full z-[-50] overflow-hidden">
         {/* Video Overlay */}
         <div className="absolute inset-0 bg-white/60 z-10 backdrop-blur-[1px]"></div>
         
         {/* Video Element with slight parallax via scaling/translation */}
         <div 
           className="absolute inset-0 w-full h-[120%] top-[-10%] will-change-transform"
           style={{ transform: `translateY(${offset * 0.1}px)` }}
         >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-40 grayscale" 
            >
              <source src="https://videos.pexels.com/video-files/3130182/3130182-hd_1920_1080_30fps.mp4" type="video/mp4" />
            </video>
         </div>
      </div>

      <Navbar />
      <main className="flex-grow">
        <Hero />
        <WebProjects />
        <GraphicDesign />
        <About />
        <Skills />
        <Highlights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;