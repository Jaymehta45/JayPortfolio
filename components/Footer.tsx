import React from 'react';
import { Github } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/60 backdrop-blur-md border-t border-stone-100 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
           <h2 className="text-xl font-display font-bold text-stone-900">JM.</h2>
           <div className="text-stone-500 text-sm mt-1">
             © {currentYear} Jay Mehta. All rights reserved.
           </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <a 
            href="https://github.com/Jaymehta45" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Github" 
            className="p-2 text-stone-400 hover:text-stone-900 hover:bg-stone-50 rounded-full transition-all flex items-center gap-2 group"
          >
            <Github size={20} />
            <span className="text-sm font-medium hidden group-hover:inline-block text-stone-600">GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};