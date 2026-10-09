import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Credentials from './components/Credentials';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-300 relative">
      {/* Top Navbar */}
      <Navbar
        onOpenCommand={() => setIsCommandOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Area */}
      <main id="main">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Credentials />
        <Leadership />
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Site Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Interactive Command Palette Modal (⌘K) */}
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Resume Preview & Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
