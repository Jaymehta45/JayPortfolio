
import React from 'react';
import { Reveal } from './Reveal';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
  isDesktopOnly?: boolean;
}

export const WebProjects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Cubiq Recruitment",
      description: "Corporate website for a professional recruitment agency. Features clear service offerings and candidate portals.",
      tags: ["Corporate", "Recruitment", "Web Design"],
      link: "https://www.cubiqrecruitment.com/",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop", // Modern Office
    },
    {
      title: "Primal Movement",
      description: "Fitness and movement coaching platform. Dynamic design focusing on human motion and training programs.",
      tags: ["Fitness", "Coaching", "Web Development"],
      link: "https://primalmovement.in",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop", // Gym/Fitness
    },
    {
      title: "FitLife Dashboard",
      description: "Comprehensive fitness tracking application prototype. Features data visualization and activity logging.",
      tags: ["Web App", "Dashboard", "React"],
      link: "https://fitlife-jtyn.vercel.app",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", // Analytics/Dashboard
      isDesktopOnly: true
    },
    {
      title: "Ente.io",
      description: "A secure, end-to-end encrypted photo storage platform. Focused on privacy and a clean, reassuring user experience.",
      tags: ["SaaS", "Privacy", "Product Design"],
      link: "https://ente.io",
      image: "https://images.unsplash.com/photo-1614064641938-3e821efd8536?q=80&w=800&auto=format&fit=crop", // Digital Security/Lock
    }
  ];

  return (
    <section id="web-projects" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <Reveal>
            <div className="inline-block bg-white/50 backdrop-blur-md px-4 py-1 rounded-lg mb-2">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900">Web Projects</h2>
            </div>
            <p className="text-stone-600 font-medium">Selected live works demonstrating development and design capabilities.</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Reveal key={index} delay={index * 150} variant="scale" className="h-full">
              <div className="group block h-full bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl overflow-hidden hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
                {/* Image Container with Link behavior */}
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="h-64 w-full flex items-center justify-center relative overflow-hidden cursor-pointer">
                   <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-stone-900/0 transition-colors z-10" />
                   <img 
                     src={project.image} 
                     alt={project.title} 
                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-stone-900/20 backdrop-blur-[2px]">
                      <div className="bg-white/90 rounded-full p-3 shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <ExternalLink className="text-stone-900" size={24} />
                      </div>
                   </div>
                </a>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-stone-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-stone-600 text-base mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-3 py-1.5 bg-stone-50 text-stone-600 font-medium rounded-full border border-stone-100/50">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-stone-100/50 flex items-center justify-between">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-base font-semibold text-stone-900 hover:text-blue-600 transition-colors">
                      Visit Site <ExternalLink size={16} className="ml-2" />
                    </a>
                    {project.isDesktopOnly && (
                        <span className="text-xs text-amber-600 font-medium bg-amber-50 px-2 py-1 rounded border border-amber-100 hidden sm:inline-block">
                            Desktop View Recommended
                        </span>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
