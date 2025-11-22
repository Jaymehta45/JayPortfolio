
import React from 'react';
import { Reveal } from './Reveal';
import { Mail, MapPin, Phone, MessageCircle, Github, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 border-t border-stone-200/50">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal className="text-center mb-12">
           <div className="inline-block bg-white/50 backdrop-blur-md px-6 py-2 rounded-full mb-4 border border-white/50">
             <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900">Let's Connect</h2>
          </div>
          <p className="text-stone-600 font-medium max-w-lg mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </Reveal>

        <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-8 md:p-12 border border-white/60">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-6">Contact Details</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-stone-600 group">
                    <div className="w-12 h-12 bg-blue-50/80 text-blue-600 rounded-full flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Mail size={20} />
                    </div>
                    <a href="mailto:jayy.mehta45@gmail.com" className="font-medium break-all hover:text-blue-600 transition-colors">jayy.mehta45@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-4 text-stone-600 group">
                    <div className="w-12 h-12 bg-stone-50/80 text-stone-500 rounded-full flex items-center justify-center shrink-0 group-hover:bg-stone-800 group-hover:text-white transition-colors">
                      <MapPin size={20} />
                    </div>
                    <span className="font-medium">Remote / Available Worldwide</span>
                  </div>
                  <div className="flex items-center gap-4 text-stone-600 group">
                    <div className="w-12 h-12 bg-stone-50/80 text-stone-500 rounded-full flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-colors">
                      <Github size={20} />
                    </div>
                    <a href="https://github.com/Jaymehta45" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-black transition-colors">github.com/Jaymehta45</a>
                  </div>
                  <div className="flex items-center gap-4 text-stone-600 group">
                    <div className="w-12 h-12 bg-blue-50/80 text-blue-600 rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#0077b5] group-hover:text-white transition-colors">
                      <Linkedin size={20} />
                    </div>
                    <a href="https://www.linkedin.com/in/jay-mehta-8116722a9/" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-[#0077b5] transition-colors">LinkedIn Profile</a>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-stone-50/60 rounded-xl border border-stone-100/50">
                <p className="text-sm text-stone-500 italic">
                  "I'm currently open for freelance projects and full-time opportunities."
                </p>
              </div>
            </div>

            {/* WhatsApp / Direct Connect */}
            <div className="flex flex-col justify-center space-y-6">
                <div className="bg-green-50/50 border border-green-100/50 p-8 rounded-2xl relative overflow-hidden">
                    {/* Decorative bg element */}
                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-green-200/20 rounded-full blur-2xl"></div>

                    <h3 className="text-xl font-bold text-stone-900 mb-2 relative z-10">Quick Chat</h3>
                    <p className="text-stone-600 mb-6 relative z-10 text-sm">
                        Prefer a direct conversation? You can reach me directly via WhatsApp or phone.
                    </p>

                    <a 
                       href="https://alvo.chat/6TGc$0" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-lg hover:shadow-green-200 relative z-10 mb-6"
                    >
                        <MessageCircle size={24} />
                        Chat on WhatsApp
                    </a>

                    <div className="flex items-center justify-center gap-3 text-stone-700 font-medium bg-white/60 py-3 rounded-lg border border-stone-100">
                        <Phone size={18} className="text-stone-400" />
                        <span>+91 9004770343</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
