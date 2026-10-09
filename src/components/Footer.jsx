import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#e5e1d3] border-t border-[#dcd8c9] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#dad5c3]">
          {/* Logo & Subtitle */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-black text-sm shadow-xs">
              MG
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 tracking-tight">Mayank Gomase</h4>
              <p className="text-xs text-slate-600 font-mono">B.Tech CSE (AIML) @ VIT Bhopal · CGPA 8.52</p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-700">
            <a href="#about" className="hover:text-emerald-700 transition-colors">About</a>
            <a href="#experience" className="hover:text-emerald-700 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-emerald-700 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-emerald-700 transition-colors">Skills</a>
            <a href="#education" className="hover:text-emerald-700 transition-colors">Education</a>
            <a href="#leadership" className="hover:text-emerald-700 transition-colors">Leadership</a>
            <a href="#contact" className="hover:text-emerald-700 transition-colors">Contact</a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-white hover:bg-[#faf8f3] text-slate-800 border border-[#dad5c3] transition-colors flex items-center gap-2 text-xs font-mono font-bold"
            title="Scroll to Top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-emerald-600" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-mono">
          <p>© 2026 Mayank Gomase. Built with AI/ML intention & modern full-stack web standards.</p>
          
          <div className="flex items-center gap-4 font-semibold">
            <a href="https://github.com/Mayankg-13" target="_blank" rel="noreferrer" className="hover:text-slate-900">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/mayank-gomase-58007628a/" target="_blank" rel="noreferrer" className="hover:text-slate-900">
              LinkedIn
            </a>
            <button onClick={onOpenResume} className="hover:text-emerald-700">
              Resume PDF
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
