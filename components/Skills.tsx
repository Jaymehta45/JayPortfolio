import React, { useEffect, useState } from 'react';
import { Reveal } from './Reveal';
import { Code2, Layout, Database, Smartphone } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  colorTheme: string;
  iconBg: string;
  iconColor: string;
}

export const Skills: React.FC = () => {
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

  const skillCategories: SkillCategory[] = [
    {
      title: "Web & Frontend",
      icon: <Layout size={24} />,
      skills: [
        "React.js", 
        "Next.js", 
        "TypeScript", 
        "Tailwind CSS", 
        "Framer Motion", 
        "Redux Toolkit",
        "HTML5 & CSS3",
        "Responsive Design"
      ],
      colorTheme: "hover:border-blue-200 hover:shadow-blue-100",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      title: "Backend & Database",
      icon: <Database size={24} />,
      skills: [
        "Node.js", 
        "Express.js", 
        "MongoDB", 
        "Mongoose", 
        "Firebase", 
        "RESTful APIs",
        "Authentication (JWT)"
      ],
      colorTheme: "hover:border-emerald-200 hover:shadow-emerald-100",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600"
    },
    {
      title: "Languages & Tools",
      icon: <Code2 size={24} />,
      skills: [
        "JavaScript (ES6+)", 
        "Python", 
        "C++", 
        "Git & GitHub", 
        "VS Code", 
        "Postman",
        "Vercel/Netlify"
      ],
      colorTheme: "hover:border-amber-200 hover:shadow-amber-100",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600"
    },
    {
      title: "Design & Creative",
      icon: <Smartphone size={24} />,
      skills: [
        "Figma", 
        "Adobe Photoshop", 
        "Canva", 
        "UI/UX Prototyping", 
        "Wireframing", 
        "Color Theory", 
        "Typography"
      ],
      colorTheme: "hover:border-rose-200 hover:shadow-rose-100",
      iconBg: "bg-rose-50",
      iconColor: "text-rose-600"
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
       {/* Parallax Background Elements */}
       <div className="absolute inset-0 pointer-events-none z-0">
        {/* Blue Blob - Moves fastest */}
        <div 
          className="absolute top-[0%] -left-[10%] w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-3xl will-change-transform"
          style={{ transform: `translateY(${offset * 0.2}px)` }}
        ></div>
        
        {/* Amber Blob - Moves medium speed */}
        <div 
          className="absolute top-[20%] -right-[15%] w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-3xl will-change-transform"
          style={{ transform: `translateY(${offset * 0.15}px)` }}
        ></div>
        
        {/* Rose Blob - Moves slowest */}
        <div 
          className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-rose-200/20 rounded-full blur-3xl will-change-transform"
          style={{ transform: `translateY(${offset * 0.08}px)` }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Reveal className="text-center mb-16">
          <div className="inline-block bg-white/50 backdrop-blur-md px-6 py-2 rounded-full mb-4 border border-white/50">
             <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900">Technical Proficiency</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Reveal key={index} delay={index * 100} variant="scale" className="h-full">
              <div className={`h-full bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-white/50 transition-all duration-300 ${category.colorTheme} hover:-translate-y-1 group`}>
                <div className={`w-14 h-14 ${category.iconBg} ${category.iconColor} rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-stone-50/80 text-stone-600 text-xs font-semibold rounded-md border border-stone-100/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};