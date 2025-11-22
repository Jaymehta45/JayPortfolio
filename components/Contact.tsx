import React, { useState } from 'react';
import { Reveal } from './Reveal';
import { Mail, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for reaching out! This is a demo form.");
  };

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-6">Contact Details</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-stone-600 group">
                    <div className="w-12 h-12 bg-blue-50/80 text-blue-600 rounded-full flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Mail size={20} />
                    </div>
                    <a href="mailto:jay.mehta45@gmail.com" className="font-medium break-all hover:text-blue-600 transition-colors">jay.mehta45@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-4 text-stone-600 group">
                    <div className="w-12 h-12 bg-stone-50/80 text-stone-500 rounded-full flex items-center justify-center shrink-0 group-hover:bg-stone-800 group-hover:text-white transition-colors">
                      <MapPin size={20} />
                    </div>
                    <span className="font-medium">Remote / Available Worldwide</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-stone-50/60 rounded-xl border border-stone-100/50">
                <p className="text-sm text-stone-500 italic">
                  "I'm currently open for freelance projects and full-time opportunities."
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white/80 focus:bg-white"
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white/80 focus:bg-white"
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white/80 focus:bg-white resize-none"
                  placeholder="How can I help you?"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-stone-900 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};