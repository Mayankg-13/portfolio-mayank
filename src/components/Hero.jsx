import React from 'react';
import { Mail, ArrowDownRight, Cpu, FileText, CheckCircle2, Code2, Brain, Server } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern bg-[#f6f4ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill & College Tag */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold tracking-wide shadow-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 status-dot-pulse" />
                AVAILABLE FOR AI/ML & FULL-STACK ROLES
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#dcd8c9] text-slate-700 text-xs font-semibold shadow-xs">
                <span className="text-slate-500 font-mono">CGPA:</span>
                <span className="text-emerald-700 font-extrabold">8.52 / 10</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Mayank <br />
                <span className="font-serif-italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600">
                  Gomase
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-bold text-emerald-700 flex items-center gap-2">
                <span>AI/ML Engineer</span>
                <span className="text-slate-300">·</span>
                <span className="text-teal-700">Full-Stack Developer</span>
              </p>
            </div>

            {/* Intro Paragraph */}
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              B.Tech Computer Science (AIML) undergraduate at <strong className="text-slate-900 font-bold">VIT Bhopal University</strong>.
              I engineer intelligent software systems end-to-end — connecting machine learning algorithms, deep learning models, and RAG pipelines with scalable <strong className="text-slate-900 font-semibold">Spring Boot</strong> and <strong className="text-slate-900 font-semibold">React</strong> web applications.
            </p>

            {/* Quick Education Badge */}
            <div className="p-4 rounded-2xl bg-white border border-[#dcd8c9] shadow-xs text-xs sm:text-sm text-slate-700 flex flex-wrap items-center gap-x-4 gap-y-2.5">
              <span className="flex items-center gap-1.5 text-slate-900 font-bold">
                <Cpu className="w-4 h-4 text-emerald-600" />
                VIT Bhopal University
              </span>
              <span className="text-slate-300">|</span>
              <span className="font-semibold">B.Tech CSE (AIML)</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500 font-mono">2023 — Present</span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all hover:scale-[1.02]"
              >
                <span>Explore Projects</span>
                <ArrowDownRight className="w-4 h-4 text-slate-300" />
              </a>

              <a
                href="https://github.com/Mayankg-13"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4.5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-slate-900 border border-[#dcd8c9] shadow-xs text-sm font-semibold transition-all"
              >
                <GithubIcon className="w-4 h-4 text-slate-700" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/mayank-gomase-58007628a/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4.5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-slate-900 border border-[#dcd8c9] shadow-xs text-sm font-semibold transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-700" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4.5 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-sm font-bold transition-all"
              >
                <FileText className="w-4 h-4 text-emerald-600" />
                <span>Resume PDF</span>
              </button>
            </div>

          </div>

          {/* Right Column: Clean Tech Stack Capabilities Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel rounded-3xl p-6 border border-[#dcd8c9] bg-white shadow-sm space-y-5">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-emerald-600" />
                  TECHNICAL FOCUS
                </span>
                <span className="text-[10px] font-mono text-slate-600 bg-[#eae6d9] px-2.5 py-1 rounded-full border border-[#dcd8c9]">
                  VIT BHOPAL CSE AIML
                </span>
              </div>

              {/* 3 Core Skill Pillars Preview */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#faf8f3] border border-[#e8e4d8] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <Brain className="w-4 h-4 text-emerald-700" />
                      AI & Machine Learning
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">PyTorch · Scikit-Learn</span>
                  </div>
                  <p className="text-xs text-slate-600">Model evaluation, SMOTE class imbalance, Random Forest & LSTM networks.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#faf8f3] border border-[#e8e4d8] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <Server className="w-4 h-4 text-amber-700" />
                      Generative AI & RAG
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">FastAPI · Docker</span>
                  </div>
                  <p className="text-xs text-slate-600">Multilingual healthcare chatbot, RAG context retrieval & Docker pipelines.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#faf8f3] border border-[#e8e4d8] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <Cpu className="w-4 h-4 text-teal-700" />
                      Full-Stack Web Systems
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">Spring Boot · React</span>
                  </div>
                  <p className="text-xs text-slate-600">LeaveFlow management system with Spring Security, JWT auth, MySQL & JPA.</p>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Primary Stack: Java, Python & SQL</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
