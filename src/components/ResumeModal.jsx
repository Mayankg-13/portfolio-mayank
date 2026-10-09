import React from 'react';
import { ExternalLink, Download, X, Award, Briefcase, GraduationCap } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const resumeDriveUrl = "https://drive.google.com/file/d/1sSsx1SsIIimAHHPtGRzT0qN_tINjtyvl/view?usp=sharing";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-white border border-[#dcd8c9] rounded-3xl shadow-2xl overflow-hidden z-10 space-y-0">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-[#faf8f3]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-bold text-xs font-mono flex items-center justify-center shadow-xs">
              PDF
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Mayank Gomase — Official Resume</h3>
              <p className="text-[11px] text-slate-500 font-mono">B.Tech CSE (AIML) · VIT Bhopal · CGPA 8.52</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={resumeDriveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs"
            >
              <span>Open Google Drive PDF</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-[#eae6d9] text-slate-700 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Resume Summary Digest */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          
          {/* Header Summary */}
          <div className="p-4 rounded-2xl bg-[#faf8f3] border border-[#dcd8c9] space-y-2">
            <h4 className="text-base font-bold text-slate-900">Professional Summary</h4>
            <p className="text-xs text-slate-700 leading-relaxed font-sans font-normal">
              B.Tech CSE (AIML) student at VIT Bhopal (CGPA 8.52/10) specializing in machine learning and deep learning. Built and evaluated models for fraud detection, face recognition, cancer classification, and sentiment analysis using Scikit-learn and TensorFlow, including an AI/ML internship. Developed a multilingual RAG-based health chatbot with FastAPI and Docker, and can ship full-stack products with React, Spring Boot, and the MERN stack. Strong foundation in DSA, DBMS, OS, and Computer Networks, with Python, Java, and SQL as primary languages.
            </p>
          </div>

          {/* Quick Resume Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Education & Experience */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white border border-[#dcd8c9] space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700">
                  <GraduationCap className="w-4 h-4" />
                  <span>EDUCATION</span>
                </div>
                <h5 className="text-sm font-bold text-slate-900">VIT Bhopal University</h5>
                <p className="text-xs text-slate-600">B.Tech in CSE (AIML) | 2023 — Present</p>
                <span className="inline-block px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[11px] font-mono border border-emerald-200 font-bold">
                  CGPA: 8.52 / 10
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#dcd8c9] space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-teal-700">
                  <Briefcase className="w-4 h-4" />
                  <span>EXPERIENCE</span>
                </div>
                <h5 className="text-sm font-bold text-slate-900">AI/ML Intern</h5>
                <p className="text-xs text-slate-500 font-mono">June 2026 — July 2026</p>
                <p className="text-xs text-slate-600">
                  Hands-on ML, DL, NLP, and CV training using Scikit-learn & TensorFlow. Built Income, Face, Cancer & Sentiment models.
                </p>
              </div>
            </div>

            {/* Core Technical Stack & Certifications */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white border border-[#dcd8c9] space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-700">
                  <Award className="w-4 h-4" />
                  <span>TECHNICAL SKILLS</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Python', 'Java', 'SQL', 'Spring Boot', 'React.js', 'FastAPI', 'RAG', 'TensorFlow', 'Scikit-learn', 'Docker', 'DBMS', 'OS', 'Networks', 'SMOTE'].map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded bg-[#faf8f3] text-slate-800 text-[10px] font-mono border border-[#dcd8c9]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#dcd8c9] space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700">
                  <Award className="w-4 h-4" />
                  <span>CERTIFICATIONS & LEADERSHIP</span>
                </div>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• Applied Machine Learning — Coursera</li>
                  <li>• Cloud Computing — NPTEL, IIT Kharagpur</li>
                  <li>• Discipline Lead — Marathi Club (15 team, 500+ participants)</li>
                  <li>• Event Management Team — WinterFest '24</li>
                </ul>
              </div>
            </div>

          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
            <span className="text-xs font-mono text-slate-500">
              Direct Drive Link: <a href={resumeDriveUrl} target="_blank" rel="noreferrer" className="text-emerald-700 underline font-semibold">drive.google.com/file/d/1sSsx1...</a>
            </span>
            <a
              href={resumeDriveUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-transform hover:scale-[1.02]"
            >
              <Download className="w-4 h-4" />
              <span>Download Full Resume PDF</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
