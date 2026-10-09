import React, { useState } from 'react';
import { Search, Code2, Brain, Server, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const skillGroups = [
    {
      category: 'ai_ml',
      categoryLabel: 'Generative AI & ML',
      icon: Brain,
      color: 'text-emerald-700',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      skills: [
        { name: 'Machine Learning', desc: 'Classification, Regression, Clustering, Scikit-Learn' },
        { name: 'Deep Learning', desc: 'Neural Networks, LSTM, TensorFlow, Computer Vision' },
        { name: 'RAG (Retrieval-Augmented Gen)', desc: 'Multilingual vector retrieval & context grounding' },
        { name: 'Prompt Engineering', desc: 'LLM instruction tuning & structured output generation' },
        { name: 'AI Agents', desc: 'Autonomous tool calling & intent-driven workflows' },
        { name: 'SMOTE & Class Imbalance', desc: 'Oversampling & precision/recall optimization' },
      ],
    },
    {
      category: 'web_dev',
      categoryLabel: 'Languages & Frameworks',
      icon: Code2,
      color: 'text-amber-700',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      skills: [
        { name: 'Java', desc: 'Core OOP, Collections, Multi-threading, Spring Ecosystem' },
        { name: 'Python', desc: 'Data structures, NumPy, Pandas, Scikit-learn, FastAPI' },
        { name: 'SQL', desc: 'Relational query design, JOINs, indexing, MySQL schema' },
        { name: 'Spring Boot', desc: 'Enterprise REST APIs, Spring Security, JWT, JPA/Hibernate' },
        { name: 'React.js', desc: 'Component architecture, hooks, state, responsive UI' },
        { name: 'FastAPI', desc: 'Asynchronous Python REST API development with Pydantic' },
      ],
    },
    {
      category: 'core_cs',
      categoryLabel: 'Core CS & Tools',
      icon: Server,
      color: 'text-teal-700',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      skills: [
        { name: 'DBMS', desc: 'Relational Database Management Systems, Normalization, ACID' },
        { name: 'Operating Systems', desc: 'Process scheduling, memory management, concurrency' },
        { name: 'Computer Networks', desc: 'TCP/IP model, HTTP/S protocols, REST architectural style' },
        { name: 'OOPs', desc: 'Object-Oriented Design principles, Abstraction, Polymorphism' },
        { name: 'Docker', desc: 'Containerization of full inference & backend pipelines' },
        { name: 'Git & GitHub', desc: 'Version control, branch workflows, collaborative commits' },
      ],
    },
  ];

  const filteredGroups = skillGroups
    .map((group) => {
      const matchCategory = filterCategory === 'all' || group.category === filterCategory;
      const matchedSkills = group.skills.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.desc.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return {
        ...group,
        matchCategory,
        skills: matchedSkills,
      };
    })
    .filter((group) => group.matchCategory && group.skills.length > 0);

  return (
    <section id="skills" className="py-24 bg-[#f6f4ef] relative border-t border-[#dcd8c9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-3 mb-12">
          <p className="text-xs font-mono font-bold tracking-widest text-emerald-800 uppercase">
            04 / TOOLKIT
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tools for the <br />
            <span className="font-serif-italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 font-normal">
              entire stack.
            </span>
          </h2>
          <p className="text-slate-700 text-sm sm:text-base max-w-2xl font-medium">
            A practical toolkit spanning Artificial Intelligence, Machine Learning, Full-Stack Engineering, and Core Computer Science.
          </p>
        </div>

        {/* Filter Chips & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-[#eae6d9]/80 p-1.5 rounded-2xl border border-[#dcd8c9]">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-4 py-2 text-xs font-mono rounded-xl transition-all ${
                filterCategory === 'all'
                  ? 'bg-white text-emerald-800 border border-emerald-300 font-bold shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setFilterCategory('ai_ml')}
              className={`px-4 py-2 text-xs font-mono rounded-xl transition-all ${
                filterCategory === 'ai_ml'
                  ? 'bg-white text-emerald-800 border border-emerald-300 font-bold shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              AI & ML
            </button>
            <button
              onClick={() => setFilterCategory('web_dev')}
              className={`px-4 py-2 text-xs font-mono rounded-xl transition-all ${
                filterCategory === 'web_dev'
                  ? 'bg-white text-amber-800 border border-amber-300 font-bold shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Languages & Web
            </button>
            <button
              onClick={() => setFilterCategory('core_cs')}
              className={`px-4 py-2 text-xs font-mono rounded-xl transition-all ${
                filterCategory === 'core_cs'
                  ? 'bg-white text-teal-800 border border-teal-300 font-bold shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Core CS & Tools
            </button>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. RAG, Java)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-[#dcd8c9] text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="space-y-8">
          {filteredGroups.map((group, gIdx) => {
            const GroupIcon = group.icon;
            return (
              <div key={gIdx} className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-mono font-bold text-slate-900">
                  <div className={`w-7 h-7 rounded-lg ${group.bgColor} ${group.borderColor} border flex items-center justify-center`}>
                    <GroupIcon className={`w-4 h-4 ${group.color}`} />
                  </div>
                  <span>{group.categoryLabel}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="glass-panel glass-panel-hover rounded-xl p-4 border border-[#dcd8c9] bg-white space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-slate-900">{skill.name}</h4>
                        <CheckCircle2 className={`w-4 h-4 ${group.color}`} />
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans">{skill.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {filteredGroups.length === 0 && (
            <div className="text-center py-12 glass-panel rounded-2xl border border-[#dcd8c9] bg-white">
              <p className="text-sm text-slate-500 font-mono">No skills matched "{searchQuery}".</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
