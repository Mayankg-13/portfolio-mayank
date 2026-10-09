import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

export default function Credentials() {
  const certifications = [
    {
      title: 'Applied Machine Learning',
      issuer: 'Coursera',
      desc: 'Hands-on supervised & unsupervised learning, model diagnostics, feature engineering, and regularization techniques.',
      badge: 'COURSERA VERIFIED',
      color: 'border-emerald-200 text-emerald-800 bg-emerald-50',
    },
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL · IIT Kharagpur',
      desc: 'Distributed systems, cloud virtualization, infrastructure models, container orchestration, and cloud architecture.',
      badge: 'IIT KHARAGPUR',
      color: 'border-amber-200 text-amber-800 bg-amber-50',
    },
  ];

  return (
    <section id="education" className="py-24 bg-[#eee9dc] relative border-t border-[#dcd8c9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-3 mb-16">
          <p className="text-xs font-mono font-bold tracking-widest text-emerald-800 uppercase">
            05 / BACKGROUND & CERTIFICATIONS
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Grounded in <br />
            <span className="font-serif-italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600 font-normal">
              the fundamentals.
            </span>
          </h2>
          <p className="text-slate-700 text-sm sm:text-base max-w-2xl font-medium">
            Formal computer science education and verified industry specialization certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Education Card */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-[#dcd8c9] shadow-sm relative overflow-hidden bg-white lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 font-bold">
                <GraduationCap className="w-4 h-4" />
                <span>UNDERGRADUATE DEGREE</span>
              </div>
              <span className="text-xs font-mono text-slate-500">2023 — PRESENT</span>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">VIT Bhopal University</h3>
              <p className="text-lg font-bold text-emerald-700 mt-1">
                B.Tech in Computer Science and Engineering (AIML)
              </p>
            </div>

            {/* CGPA Highlight Box */}
            <div className="p-4 rounded-2xl bg-[#faf8f3] border border-emerald-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-slate-600 uppercase tracking-wider font-bold">Cumulative Grade Point Average</span>
                <div className="text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
                  8.52 <span className="text-base text-slate-500 font-normal">/ 10</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white font-extrabold text-xl flex items-center justify-center shadow-xs">
                ★
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-700 leading-relaxed font-sans font-normal">
              <p>
                Specialized coursework in Machine Learning, Deep Learning, Natural Language Processing, Data Structures & Algorithms, Operating Systems, Database Management Systems, and Computer Networks.
              </p>
            </div>
          </div>

          {/* Right Certifications List */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-700 uppercase tracking-wider pb-2">
              <Award className="w-4 h-4 text-emerald-700" />
              <span>VERIFIED CERTIFICATIONS</span>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover rounded-2xl p-5 border border-[#dcd8c9] bg-white space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-base font-bold text-slate-900">{cert.title}</h4>
                      <p className="text-xs text-emerald-700 font-bold font-mono mt-0.5">{cert.issuer}</p>
                    </div>
                    <span className={`px-2.5 py-1 rounded font-mono text-[10px] uppercase font-bold border ${cert.color}`}>
                      {cert.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
