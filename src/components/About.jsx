import React from 'react';
import { Cpu, Brain, Server } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: Brain,
      color: 'text-emerald-700',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      title: 'Generative AI & Machine Learning',
      desc: 'Building intelligent RAG-based systems, intent classifiers, and predictive models using Scikit-Learn, TensorFlow, and FastAPI. Experienced in handling extreme data imbalance with SMOTE.',
      tech: ['Scikit-Learn', 'TensorFlow', 'FastAPI', 'RAG', 'SMOTE', 'NLP'],
    },
    {
      icon: Server,
      color: 'text-amber-700',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      title: 'Full-Stack & Backend Systems',
      desc: 'Developing secure, role-based web applications with Spring Boot, Java, MySQL, Spring Security, JWT, and React.js for clean user interfaces and seamless operational workflows.',
      tech: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'JWT', 'REST APIs'],
    },
    {
      icon: Cpu,
      color: 'text-teal-700',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      title: 'Core Computer Science',
      desc: 'Strong foundation in Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, and Object-Oriented Programming with Java, Python, and SQL.',
      tech: ['DSA', 'DBMS', 'OS', 'Computer Networks', 'OOPs', 'Docker'],
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#eee9dc] relative border-t border-[#dcd8c9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-3 mb-14">
          <p className="text-xs font-mono font-bold tracking-widest text-emerald-800 uppercase">
            01 / APPROACH & FOCUS
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Engineering the <br />
            <span className="font-serif-italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600 font-normal">
              whole system.
            </span>
          </h2>
          <p className="text-slate-700 text-sm sm:text-base max-w-2xl font-medium">
            From raw data preprocessing to model evaluation, REST API design, and interactive frontend delivery.
          </p>
        </div>

        {/* 3 Core Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-[#dcd8c9] flex flex-col justify-between space-y-6 bg-white shadow-xs"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl ${pillar.bgColor} ${pillar.borderColor} border flex items-center justify-center`}>
                    <IconComponent className={`w-6 h-6 ${pillar.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">{pillar.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{pillar.desc}</p>
                </div>

                <div className="pt-4 border-t border-[#e8e4d8] flex flex-wrap gap-1.5">
                  {pillar.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-[#faf8f3] text-slate-800 text-xs font-mono border border-[#dcd8c9]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
