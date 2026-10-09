import React, { useState } from 'react';
import { CheckCircle, Database, Layers, Activity, Users, Lock, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [activeFraudModel, setActiveFraudModel] = useState('random_forest');
  const [activeRole, setActiveRole] = useState('employee');
  const [activeRAGLanguage, setActiveRAGLanguage] = useState('English');

  return (
    <section id="projects" className="py-24 bg-[#eee9dc] relative border-t border-[#dcd8c9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-3 mb-16">
          <p className="text-xs font-mono font-bold tracking-widest text-emerald-800 uppercase">
            03 / FEATURED PROJECTS
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Built from <br />
            <span className="font-serif-italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600 font-normal">
              first principles.
            </span>
          </h2>
          <p className="text-slate-700 text-sm sm:text-base max-w-2xl font-medium">
            End-to-end applications connecting machine learning algorithms, Spring Boot backends, and RAG architectures.
          </p>
        </div>

        <div className="space-y-16">
          
          {/* ========================================================================= */}
          {/* PROJECT 01: Credit Card Fraud Detection */}
          {/* ========================================================================= */}
          <article className="glass-panel rounded-3xl p-6 sm:p-10 border border-[#dcd8c9] shadow-sm relative overflow-hidden bg-white space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e8e4d8] pb-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  01 / ML & DEEP LEARNING
                </span>
                <span className="text-xs font-mono text-slate-500 hidden sm:inline-block">
                  IMBALANCED CLASSIFICATION
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Mayankg-13"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-800 hover:text-emerald-700 bg-[#faf8f3] hover:bg-[#f6f4ef] px-3.5 py-1.5 rounded-lg border border-[#dcd8c9] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-slate-800" />
                  <span>GitHub Repository ↗</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Copy */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-mono text-amber-700 font-bold tracking-wider uppercase">
                    FEATURED ML PIPELINE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                    Credit Card Fraud Detection <br />
                    <span className="text-slate-500 font-normal text-lg sm:text-xl">
                      End-to-End LSTM & Random Forest
                    </span>
                  </h3>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  An end-to-end machine learning application built to identify real-time fraudulent transactions across highly imbalanced transaction streams (handling extreme 0.17% class imbalance using SMOTE and custom class weighting).
                </p>

                {/* Problem & Approach Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-[#faf8f3] border border-[#e8e4d8] space-y-1">
                    <span className="text-[10px] font-mono text-amber-700 uppercase tracking-wider font-bold">
                      CHALLENGE
                    </span>
                    <p className="text-xs text-slate-700">
                      Extreme 0.17% fraud class imbalance where standard classifiers fail without specialized sampling.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#faf8f3] border border-[#e8e4d8] space-y-1">
                    <span className="text-[10px] font-mono text-emerald-700 uppercase tracking-wider font-bold">
                      SOLUTION
                    </span>
                    <p className="text-xs text-slate-700">
                      SMOTE oversampling + class weighting, Random Forest vs LSTM evaluation on Precision, Recall & PR-AUC.
                    </p>
                  </div>
                </div>

                {/* Engineering Highlights */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-slate-500 font-bold uppercase">
                    Key Implementations
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Developed a FastAPI REST backend validated with Pydantic schemas for instant inference queries.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Built an interactive Streamlit dashboard allowing users to input parameters and receive real-time fraud alerts.</span>
                    </li>
                  </ul>
                </div>

                {/* Tech Stack List */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Python', 'Scikit-learn', 'TensorFlow', 'FastAPI', 'Streamlit', 'SMOTE', 'LSTM', 'Random Forest'].map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-mono border border-emerald-200 font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Simulator Widget */}
              <div className="lg:col-span-5 bg-[#faf8f3] rounded-2xl p-5 border border-[#dcd8c9] space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-600 pb-3 border-b border-[#e8e4d8]">
                  <span className="flex items-center gap-1.5 text-emerald-800 font-bold">
                    <Activity className="w-4 h-4 text-emerald-600" />
                    MODEL EVALUATION SIMULATOR
                  </span>
                  <span className="text-[10px] text-amber-800 bg-amber-100 px-2 py-0.5 rounded border border-amber-200 font-bold">
                    0.17% SMOTE
                  </span>
                </div>

                {/* Model Selector Tabs */}
                <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-white border border-[#dcd8c9] text-xs font-mono">
                  <button
                    onClick={() => setActiveFraudModel('random_forest')}
                    className={`py-2 px-3 rounded-lg transition-all ${
                      activeFraudModel === 'random_forest'
                        ? 'bg-emerald-600 text-white font-bold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Random Forest
                  </button>
                  <button
                    onClick={() => setActiveFraudModel('lstm')}
                    className={`py-2 px-3 rounded-lg transition-all ${
                      activeFraudModel === 'lstm'
                        ? 'bg-teal-600 text-white font-bold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    LSTM Neural Net
                  </button>
                </div>

                {/* Metrics Visual Box */}
                {activeFraudModel === 'random_forest' ? (
                  <div className="space-y-3 p-4 rounded-xl bg-white border border-emerald-200 text-slate-900">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="font-bold text-slate-900">Random Forest + SMOTE</span>
                      <span className="text-emerald-700 font-bold">High Precision</span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div>
                        <div className="flex justify-between text-[11px] font-mono text-slate-600 mb-1">
                          <span>PR-AUC Score</span>
                          <span className="text-emerald-700 font-bold">0.88</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-[#f6f4ef] overflow-hidden border border-[#dcd8c9]">
                          <div className="h-full bg-emerald-500 rounded-full w-[88%]" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[11px] font-mono text-slate-600 mb-1">
                          <span>Precision (Fraud Class)</span>
                          <span className="text-emerald-700 font-bold">92%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-[#f6f4ef] overflow-hidden border border-[#dcd8c9]">
                          <div className="h-full bg-emerald-500 rounded-full w-[92%]" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 p-4 rounded-xl bg-white border border-teal-200 text-slate-900">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="font-bold text-slate-900">LSTM Deep Network</span>
                      <span className="text-teal-700 font-bold">Sequential Recall</span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div>
                        <div className="flex justify-between text-[11px] font-mono text-slate-600 mb-1">
                          <span>Recall (Fraud Detection Rate)</span>
                          <span className="text-teal-700 font-bold">95%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-[#f6f4ef] overflow-hidden border border-[#dcd8c9]">
                          <div className="h-full bg-teal-500 rounded-full w-[95%]" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[11px] font-mono text-slate-600 mb-1">
                          <span>PR-AUC Score</span>
                          <span className="text-teal-700 font-bold">0.89</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-[#f6f4ef] overflow-hidden border border-[#dcd8c9]">
                          <div className="h-full bg-teal-500 rounded-full w-[89%]" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-3 rounded-xl bg-white border border-[#dcd8c9] text-xs text-slate-600 space-y-1">
                  <div className="text-[10px] font-mono text-emerald-700 uppercase font-bold">REST API Endpoint</div>
                  <code className="text-[11px] text-slate-900 font-mono block truncate">
                    POST /api/v1/predict_fraud
                  </code>
                </div>
              </div>
            </div>
          </article>


          {/* ========================================================================= */}
          {/* PROJECT 02: LeaveFlow Full-Stack Employee Leave Management */}
          {/* ========================================================================= */}
          <article className="glass-panel rounded-3xl p-6 sm:p-10 border border-[#dcd8c9] shadow-sm relative overflow-hidden bg-white space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e8e4d8] pb-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                  02 / FULL-STACK ENTERPRISE
                </span>
                <span className="text-xs font-mono text-slate-500 hidden sm:inline-block">
                  SPRING BOOT & REACT
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Mayankg-13"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-800 hover:text-teal-700 bg-[#faf8f3] hover:bg-[#f6f4ef] px-3.5 py-1.5 rounded-lg border border-[#dcd8c9] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-slate-800" />
                  <span>GitHub Repository ↗</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Copy */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-mono text-teal-700 font-bold tracking-wider uppercase">
                    ENTERPRISE APPLICATION
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                    LeaveFlow <br />
                    <span className="text-slate-500 font-normal text-lg sm:text-xl">
                      Full-Stack Employee Leave Management System
                    </span>
                  </h3>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  A full-stack enterprise leave management web platform automating leave request submissions, manager approval workflows, and audit tracking using Spring Boot REST APIs, React.js, and MySQL.
                </p>

                {/* Key Features List */}
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <Lock className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Spring Security & JWT:</strong> Role-based authorization isolating Employee, Manager, and Admin capabilities.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <Database className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Spring Data JPA / Hibernate:</strong> Scalable CRUD persistence layer with relational MySQL schema design.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <Layers className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Responsive React Dashboard:</strong> Intuitive interface for tracking remaining leave balances, pending requests, and approval histories.
                    </span>
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Java', 'Spring Boot', 'React.js', 'MySQL', 'Spring Security', 'JWT', 'Hibernate', 'REST APIs'].map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-teal-50 text-teal-800 text-xs font-mono border border-teal-200 font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Workflow Simulator */}
              <div className="lg:col-span-5 bg-[#faf8f3] rounded-2xl p-5 border border-[#dcd8c9] space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-600 pb-3 border-b border-[#e8e4d8]">
                  <span className="flex items-center gap-1.5 text-teal-800 font-bold">
                    <Users className="w-4 h-4 text-teal-600" />
                    ROLE-BASED WORKFLOW
                  </span>
                  <span className="text-[10px] text-teal-800 bg-teal-100 px-2 py-0.5 rounded border border-teal-200 font-bold">
                    JWT AUTH
                  </span>
                </div>

                {/* Role Switcher */}
                <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-white border border-[#dcd8c9] text-xs font-mono">
                  <button
                    onClick={() => setActiveRole('employee')}
                    className={`py-2 px-3 rounded-lg transition-all ${
                      activeRole === 'employee'
                        ? 'bg-teal-600 text-white font-bold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Employee View
                  </button>
                  <button
                    onClick={() => setActiveRole('admin')}
                    className={`py-2 px-3 rounded-lg transition-all ${
                      activeRole === 'admin'
                        ? 'bg-emerald-600 text-white font-bold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Admin / Manager
                  </button>
                </div>

                {/* Dynamic Role Display */}
                {activeRole === 'employee' ? (
                  <div className="space-y-2.5 p-4 rounded-xl bg-white border border-teal-200 text-xs">
                    <div className="flex justify-between items-center text-teal-800 font-mono font-bold">
                      <span>ROLE: ROLE_EMPLOYEE</span>
                      <span className="text-[10px] text-slate-500 font-normal">JWT Token Valid</span>
                    </div>
                    <ul className="space-y-1.5 text-slate-700 text-[11px]">
                      <li className="flex items-center gap-2">✓ Submit Casual / Sick Leave Request</li>
                      <li className="flex items-center gap-2">✓ Track Real-Time Application Status</li>
                      <li className="flex items-center gap-2">✓ View Remaining Leave Quotas</li>
                    </ul>
                  </div>
                ) : (
                  <div className="space-y-2.5 p-4 rounded-xl bg-white border border-emerald-200 text-xs">
                    <div className="flex justify-between items-center text-emerald-800 font-mono font-bold">
                      <span>ROLE: ROLE_ADMIN</span>
                      <span className="text-[10px] text-slate-500 font-normal">Full Access</span>
                    </div>
                    <ul className="space-y-1.5 text-slate-700 text-[11px]">
                      <li className="flex items-center gap-2">✓ Approve or Reject Team Leave Requests</li>
                      <li className="flex items-center gap-2">✓ Audit Log & Employee Master Record CRUD</li>
                      <li className="flex items-center gap-2">✓ Configure Department Quotas & Policies</li>
                    </ul>
                  </div>
                )}

                <div className="p-3 rounded-xl bg-white border border-[#dcd8c9] text-xs text-slate-600">
                  <div className="text-[10px] font-mono text-teal-700 font-bold uppercase">Architecture</div>
                  <p className="text-[11px] text-slate-900 mt-1 font-medium">
                    React Frontend → Spring Security JWT Middleware → Hibernate JPA → MySQL Database
                  </p>
                </div>
              </div>
            </div>
          </article>


          {/* ========================================================================= */}
          {/* PROJECT 03: HARMONY RAG AI Health Assistant */}
          {/* ========================================================================= */}
          <article className="glass-panel rounded-3xl p-6 sm:p-10 border border-[#dcd8c9] shadow-sm relative overflow-hidden bg-white space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e8e4d8] pb-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  03 / GENERATIVE AI & RAG
                </span>
                <span className="text-xs font-mono text-slate-500 hidden sm:inline-block">
                  MULTILINGUAL & DOCKER
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Mayankg-13"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-800 hover:text-amber-700 bg-[#faf8f3] hover:bg-[#f6f4ef] px-3.5 py-1.5 rounded-lg border border-[#dcd8c9] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-slate-800" />
                  <span>GitHub Repository ↗</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Copy */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-mono text-amber-700 font-bold tracking-wider uppercase">
                    HEALTHCARE CHATBOT
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                    HARMONY <br />
                    <span className="text-slate-500 font-normal text-lg sm:text-xl">
                      RAG-Based AI Health Assistant
                    </span>
                  </h3>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  A production-ready healthcare chatbot combining LLM intent understanding, structured medical advice response generation, and multilingual interaction across 4+ languages via NLP preprocessing.
                </p>

                {/* Key Features List */}
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">LLM & Intent Understanding:</strong> Contextual intent extraction coupled with grounded retrieval generation.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Multilingual NLP Support:</strong> Process queries in 4+ languages, breaking communication barriers for diverse user bases.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <Terminal className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Docker Containerization:</strong> Fully containerized inference pipeline ensuring reproducible, scalable multi-environment deployments.
                    </span>
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Python', 'FastAPI', 'RAG', 'NLP', 'Telegram Bot API', 'HTML/CSS/JS', 'Docker'].map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-amber-50 text-amber-900 text-xs font-mono border border-amber-200 font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right RAG Pipeline Visual Widget */}
              <div className="lg:col-span-5 bg-[#faf8f3] rounded-2xl p-5 border border-[#dcd8c9] space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-600 pb-3 border-b border-[#e8e4d8]">
                  <span className="flex items-center gap-1.5 text-amber-800 font-bold">
                    <Terminal className="w-4 h-4 text-amber-600" />
                    MULTILINGUAL RAG PIPELINE
                  </span>
                  <span className="text-[10px] text-amber-900 bg-amber-100 px-2 py-0.5 rounded border border-amber-200 font-bold">
                    DOCKER READY
                  </span>
                </div>

                {/* Language Picker */}
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span className="font-mono text-[11px]">Query Language:</span>
                  <div className="flex gap-1">
                    {['English', 'Hindi', 'Marathi', 'Spanish'].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setActiveRAGLanguage(lang)}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono transition-all ${
                          activeRAGLanguage === lang
                            ? 'bg-amber-600 text-white font-bold shadow-xs'
                            : 'bg-white text-slate-600 hover:text-slate-900 border border-[#dcd8c9]'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pipeline Flow Visual Box */}
                <div className="space-y-2">
                  <div className="p-2.5 rounded-xl bg-white border border-[#dcd8c9] text-xs flex items-center justify-between">
                    <span className="text-slate-600 font-mono">01 Input Query</span>
                    <span className="text-amber-700 font-bold">{activeRAGLanguage} NLP</span>
                  </div>
                  <div className="text-center text-slate-400 font-mono text-[10px]">↓</div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#dcd8c9] text-xs flex items-center justify-between">
                    <span className="text-slate-600 font-mono">02 Context Retrieval</span>
                    <span className="text-emerald-700 font-bold">Medical Vector DB</span>
                  </div>
                  <div className="text-center text-slate-400 font-mono text-[10px]">↓</div>
                  <div className="p-2.5 rounded-xl bg-white border border-amber-200 text-xs flex items-center justify-between">
                    <span className="text-slate-600 font-mono">03 LLM Inference</span>
                    <span className="text-amber-800 font-bold">Structured Advice</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-[#dcd8c9] text-xs text-slate-600 flex items-center justify-between">
                  <span className="font-mono text-[11px]">Telegram Bot Interface</span>
                  <span className="text-emerald-700 font-mono font-bold">Active Service</span>
                </div>
              </div>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
}
