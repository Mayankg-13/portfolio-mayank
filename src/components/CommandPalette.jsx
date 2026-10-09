import React, { useState, useEffect } from 'react';
import { Search, ArrowRight, FileText, Mail, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function CommandPalette({ isOpen, onClose, onOpenResume }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const items = [
    { type: 'section', label: 'About & Technical Focus', href: '#about', icon: ArrowRight },
    { type: 'section', label: 'AI/ML Internship & Training', href: '#experience', icon: ArrowRight },
    { type: 'project', label: 'Credit Card Fraud Detection (LSTM & Random Forest)', href: '#projects', icon: ArrowRight },
    { type: 'project', label: 'LeaveFlow (Spring Boot & React Leave Management)', href: '#projects', icon: ArrowRight },
    { type: 'project', label: 'HARMONY (Multilingual RAG Health Assistant)', href: '#projects', icon: ArrowRight },
    { type: 'section', label: 'Skills & Toolkit', href: '#skills', icon: ArrowRight },
    { type: 'section', label: 'Education (VIT Bhopal CGPA 8.52/10)', href: '#education', icon: ArrowRight },
    { type: 'certification', label: 'Oracle Cloud Infrastructure Certified AI Foundations Associate', href: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=2841404E6F6A15819DB8CC885F53A931C759E50F88BC5C8462AECF2484975BB6', external: true, icon: Award },
    { type: 'certification', label: 'Applied Machine Learning (Coursera Verified)', href: 'https://www.coursera.org/account/accomplishments/verify/VLGENQFOP204', external: true, icon: Award },
    { type: 'section', label: 'Leadership & Activities', href: '#leadership', icon: ArrowRight },
    { type: 'section', label: 'Contact & Hire Mayank', href: '#contact', icon: Mail },
    { type: 'action', label: 'View & Download Resume PDF', action: () => { onClose(); onOpenResume(); }, icon: FileText },
    { type: 'link', label: 'GitHub Profile (Mayankg-13)', href: 'https://github.com/Mayankg-13', external: true, icon: GithubIcon },
    { type: 'link', label: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/mayank-gomase-58007628a/', external: true, icon: LinkedinIcon },
  ];

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item) => {
    onClose();
    if (item.action) {
      item.action();
    } else if (item.href) {
      if (item.external) {
        window.open(item.href, '_blank');
      } else {
        window.location.href = item.href;
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/40 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop click close */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-white border border-[#dcd8c9] rounded-2xl shadow-2xl overflow-hidden z-10 space-y-0">
        {/* Search Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100 gap-3">
          <Search className="w-4 h-4 text-emerald-600 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Type a section, project, or command..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="px-2 py-1 rounded bg-[#f6f4ef] text-[11px] font-mono text-slate-500 hover:text-slate-900"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredItems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <button
                key={idx}
                onClick={() => handleSelect(item)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-[#faf8f3] text-left transition-colors text-xs group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <IconComp className="w-4 h-4 text-slate-500 group-hover:text-emerald-700 transition-colors shrink-0" />
                  <span className="text-slate-800 group-hover:text-slate-900 font-semibold truncate">
                    {item.label}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 group-hover:text-slate-700 uppercase px-2 py-0.5 rounded bg-[#f6f4ef] border border-[#dcd8c9] shrink-0">
                  {item.type}
                </span>
              </button>
            );
          })}

          {filteredItems.length === 0 && (
            <div className="p-8 text-center text-xs text-slate-500 font-mono">
              No matching commands found.
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-[#f6f4ef] border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>Quick Search Navigation</span>
          <span>Mayank Gomase Portfolio</span>
        </div>
      </div>
    </div>
  );
}
