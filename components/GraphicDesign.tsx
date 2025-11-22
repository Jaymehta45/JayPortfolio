
import React, { useState } from 'react';
import { Reveal } from './Reveal';
import { X, ExternalLink, Maximize2, Palette } from 'lucide-react';

interface DesignItem {
  title: string;
  link: string;
  imageUrl: string;
}

export const GraphicDesign: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // The specific links provided
  const designItems: DesignItem[] = [
    {
      title: "Menu Front Cover",
      link: "https://ibb.co/DNQf1sD",
      imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Menu Back Cover",
      link: "https://ibb.co/Nd9CHvz7",
      imageUrl: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Inner Page Layout",
      link: "https://ibb.co/p6kqDzZ9",
      imageUrl: "https://images.unsplash.com/photo-1595538154519-bc102513219e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Beverage Section",
      link: "https://ibb.co/mrDZb4pP",
      imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Special Offers",
      link: "https://ibb.co/GX1LF2J",
      imageUrl: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <section id="graphic-design" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="mb-12 text-center md:text-left">
           <div className="inline-block bg-white/50 backdrop-blur-md px-4 py-1 rounded-lg mb-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900">Graphic Design</h2>
          </div>
          <p className="text-stone-600 font-medium">Featured branding and print composition work.</p>
        </Reveal>

        {/* Single Large Project Card */}
        <Reveal variant="scale">
          <div 
            onClick={() => setIsModalOpen(true)}
            className="group relative w-full max-w-4xl mx-auto h-[500px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer border border-white/50"
          >
            {/* Cover Image Background */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${designItems[0].imageUrl})` }}
            >
              <div className="absolute inset-0 bg-stone-900/40 group-hover:bg-stone-900/30 transition-colors duration-500" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
               <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                 <div className="inline-flex items-center gap-2 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    <Palette size={12} />
                    BRANDING & PRINT
                 </div>
                 <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                   Jimi's Burger Menu
                 </h3>
                 <p className="text-stone-200 text-lg max-w-xl mb-6 drop-shadow-md">
                   A complete menu design overhaul featuring modern typography, appetizing layouts, and a cohesive brand identity.
                 </p>
                 
                 <div className="inline-flex items-center gap-2 text-white font-semibold border-b-2 border-white/50 pb-1 group-hover:border-white transition-all">
                   View Full Gallery <Maximize2 size={18} />
                 </div>
               </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Full Screen Modal Gallery */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-stone-900/90 backdrop-blur-xl"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative w-full max-w-3xl bg-stone-900/80 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden flex flex-col shadow-2xl">
            
            {/* Header */}
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-white/10 bg-stone-900/50">
              <div>
                <h3 className="text-2xl font-bold text-white">Jimi's Burger Menu</h3>
                <p className="text-stone-400 text-sm">Select a page to view design</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Links List */}
            <div className="overflow-y-auto flex-1 p-6 md:p-8">
              <div className="grid grid-cols-1 gap-4">
                {designItems.map((item, index) => (
                  <a 
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 hover:scale-[1.01] transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white font-bold font-display group-hover:bg-blue-600 transition-colors text-lg">
                        {index + 1}
                      </div>
                      <div className="text-left">
                         <div className="text-blue-400 text-xs uppercase tracking-wider font-bold mb-0.5">Page {index + 1}</div>
                         <div className="text-white font-medium text-lg md:text-xl">{item.title}</div>
                      </div>
                    </div>
                    <ExternalLink className="text-stone-500 group-hover:text-white transition-colors" size={22} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
