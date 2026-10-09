import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const internshipProjects = [
    {
      title: 'Income Classification',
      desc: 'Predictive machine learning pipeline for demography-based income tier classification using supervised feature engineering.',
      stack: ['Python', 'Scikit-Learn', 'Pandas'],
    },
    {
      title: 'Face Recognition System',
      desc: 'Deep learning Computer Vision model for facial feature extraction and identity verification.',
      stack: ['TensorFlow', 'OpenCV', 'Deep Learning'],
    },
    {
      title: 'Cancer Classification',
      desc: 'High-accuracy medical diagnostic classification model analyzing cell nucleus features.',
      stack: ['Scikit-Learn', 'Feature Scaling', 'Evaluation Metrics'],
    },
    {
      title: 'Sentiment Analysis',
      desc: 'Natural Language Processing (NLP) text processing pipeline for classifying user feedback and review sentiment.',
      stack: ['NLP', 'Python', 'Scikit-Learn'],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-[#f6f4ef] relative border-t border-[#dcd8c9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-3 mb-14">
          <p className="text-xs font-mono font-bold tracking-widest text-emerald-800 uppercase">
            02 / EXPERIENCE
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Industry training & <br />
            <span className="font-serif-italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 font-normal">
              applied AI engineering.
            </span>
          </h2>
          <p className="text-slate-700 text-sm sm:text-base max-w-2xl font-medium">
            Hands-on machine learning model development, Computer Vision, NLP, and evaluation pipelines.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="space-y-8">
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-[#dcd8c9] shadow-sm relative overflow-hidden bg-white">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Timeline & Metadata */}
              <div className="lg:col-span-4 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold">
                  <Briefcase className="w-3.5 h-3.5" />
                  INTERNSHIP / 01
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">AI/ML Intern</h3>
                  <p className="text-lg font-bold text-emerald-700 mt-0.5">MPOnline Limited</p>
                </div>

                <div className="space-y-2 text-xs font-mono text-slate-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    <span>June 2026 — July 2026 (2 Months)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-teal-600" />
                    <span>Bhopal / Online, MP, India</span>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="p-3.5 rounded-xl bg-[#faf8f3] border border-[#e8e4d8] text-xs text-slate-700 space-y-1">
                    <div className="font-bold text-slate-900 font-mono text-[11px] uppercase tracking-wider text-emerald-700">
                      Core Domain Focus
                    </div>
                    <p className="font-medium">Machine Learning, Deep Learning, NLP & Computer Vision</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Accomplishments & Projects */}
              <div className="lg:col-span-8 space-y-6">
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                    Key Accomplishments & Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        Completed a hands-on AI/ML Internship featuring real-world model creation in Python across Machine Learning, Deep Learning, NLP, and Computer Vision.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        Gained practical experience in data preprocessing, feature engineering, model training, hyperparameter tuning, evaluation & deployment using <strong className="text-slate-900 font-semibold">Scikit-learn</strong> and <strong className="text-slate-900 font-semibold">TensorFlow</strong>.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        Built and benchmarked 4 distinct machine learning projects: <strong className="text-emerald-800 font-semibold">Income Classification</strong>, <strong className="text-emerald-800 font-semibold">Face Recognition System</strong>, <strong className="text-emerald-800 font-semibold">Cancer Classification</strong>, and <strong className="text-emerald-800 font-semibold">Sentiment Analysis</strong>.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Sub-projects grid created during internship */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-bold">
                      Projects Delivered During Internship
                    </span>
                    <span className="text-[11px] font-mono text-emerald-800 font-bold">4 MODULES SHIPPED</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {internshipProjects.map((proj, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-[#faf8f3] border border-[#e8e4d8] hover:border-emerald-400 transition-colors space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <h5 className="text-sm font-bold text-slate-900">{proj.title}</h5>
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">{proj.desc}</p>
                        <div className="flex flex-wrap gap-1 pt-1">
                          {proj.stack.map((s) => (
                            <span key={s} className="px-2 py-0.5 rounded bg-white text-[10px] font-mono text-slate-700 border border-[#dcd8c9]">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
