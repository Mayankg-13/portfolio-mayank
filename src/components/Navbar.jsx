import React, { useState, useEffect } from 'react';
import { Command, FileText, Mail, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenCommand, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'leadership', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#f6f4ef]/90 backdrop-blur-md border-b border-[#e2dfd5] py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Wordmark Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 text-xl font-bold tracking-tight text-slate-900 focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-black text-sm shadow-sm shadow-emerald-600/20 group-hover:scale-105 transition-transform">
            MG
          </div>
          <span className="text-slate-900 font-extrabold tracking-wide">
            Mayank<span className="text-emerald-600 font-bold">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#eae6d9]/80 p-1.5 rounded-full border border-[#dcd8c9] backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-emerald-800 font-bold shadow-xs border border-[#dcd8c9]'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Utility Controls */}
        <div className="hidden md:flex items-center gap-3">
          {/* Command Palette Button */}
          <button
            onClick={onOpenCommand}
            className="flex items-center gap-2 text-xs text-slate-700 bg-[#eae6d9]/80 hover:bg-[#ded9c7] hover:text-slate-900 px-3 py-2 rounded-xl border border-[#dcd8c9] transition-colors"
            title="Open Quick Search (Ctrl+K)"
          >
            <Command className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-mono text-[11px] text-slate-500">⌘K</span>
          </button>

          {/* Resume Modal Trigger */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-800 bg-white hover:bg-slate-50 px-3.5 py-2 rounded-xl border border-[#dcd8c9] shadow-xs transition-all group"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-600 group-hover:scale-110 transition-transform" />
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-800 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </button>

          {/* Direct Contact Action */}
          <a
            href="mailto:mayankgomase@gmail.com"
            className="flex items-center gap-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-xl shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02]"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenCommand}
            className="p-2 text-slate-700 bg-[#eae6d9] rounded-lg border border-[#dcd8c9]"
            title="Search"
          >
            <Command className="w-4 h-4 text-emerald-600" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-800 bg-[#eae6d9] rounded-lg border border-[#dcd8c9]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f6f4ef]/98 backdrop-blur-xl border-b border-[#dcd8c9] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-semibold text-slate-800 hover:bg-white/80 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#dcd8c9] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 text-xs font-bold text-slate-800 bg-white py-2.5 rounded-lg border border-[#dcd8c9]"
            >
              <FileText className="w-4 h-4 text-emerald-600" />
              <span>View & Download Resume</span>
            </button>
            <a
              href="mailto:mayankgomase@gmail.com"
              className="w-full flex items-center justify-center gap-2 text-xs font-bold text-white bg-emerald-600 py-2.5 rounded-lg shadow-md"
            >
              <Mail className="w-4 h-4" />
              <span>mayankgomase@gmail.com</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
