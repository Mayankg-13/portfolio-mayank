import React from 'react';

export default function Leadership() {
  const leadershipItems = [
    {
      num: '01',
      role: 'Discipline Lead',
      org: 'Marathi Club, VIT Bhopal',
      impact: 'Managed a 15-member team and led event operations for 500+ participants.',
      desc: 'Coordinated cultural events and discipline operations across major campus gatherings, ensuring seamless crowd flow, safety compliance, and team alignment.',
      tags: ['Team Management', '500+ Participants', 'Event Operations'],
    },
    {
      num: '02',
      role: 'Event Management Team',
      org: "WinterFest '24, VIT Bhopal",
      impact: 'Large-scale festival logistics & operational execution.',
      desc: 'Contributed to end-to-end planning and on-ground execution of the university’s signature cultural fest, managing vendor relations, stage logistics, and audience engagement.',
      tags: ['Logistics', 'Operations', 'WinterFest 2024'],
    },
  ];

  return (
    <section id="leadership" className="py-24 bg-[#f6f4ef] relative border-t border-[#dcd8c9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-3 mb-16">
          <p className="text-xs font-mono font-bold tracking-widest text-emerald-800 uppercase">
            06 / LEADERSHIP & ACTIVITIES
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Beyond the <br />
            <span className="font-serif-italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600 font-normal">
              code.
            </span>
          </h2>
          <p className="text-slate-700 text-sm sm:text-base max-w-2xl font-medium">
            Team leadership, event organization, and campus involvement at VIT Bhopal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipItems.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 border border-[#dcd8c9] bg-white shadow-xs flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">
                    LEADERSHIP / {item.num}
                  </span>
                  <span className="text-slate-500 font-bold">VIT BHOPAL</span>
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">{item.role}</h3>
                  <p className="text-sm font-bold text-emerald-700 mt-0.5">{item.org}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#faf8f3] border border-[#e8e4d8] text-xs text-slate-700 font-mono">
                  <span className="text-emerald-800 font-bold">KEY IMPACT: </span>
                  {item.impact}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono border border-[#dcd8c9]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
