import React, { useState } from 'react';
import { Mail, Phone, FileText, Send, Copy, Check, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function Contact({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mayankgomase@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+918983409622');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-[#eee9dc] relative border-t border-[#dcd8c9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="space-y-3 mb-16 text-center max-w-3xl mx-auto">
          <p className="text-xs font-mono font-bold tracking-widest text-emerald-800 uppercase">
            07 / GET IN TOUCH
          </p>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
            Let’s Connect & <br />
            <span className="font-serif-italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600 font-normal">
              Collaborate.
            </span>
          </h2>
          <p className="text-slate-700 text-base sm:text-lg">
            Open to software engineering, machine learning, Generative AI, and full-stack development roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Direct Connect Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-[#dcd8c9] space-y-6 shadow-md bg-white">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">Direct Channels</h3>
                <p className="text-xs text-slate-500">Reach out directly via email, call, or social profiles.</p>
              </div>

              <div className="space-y-3">
                {/* Email Item */}
                <div className="p-3.5 rounded-xl bg-[#faf8f3] border border-[#e8e4d8] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">EMAIL ADDRESS</div>
                      <a href="mailto:mayankgomase@gmail.com" className="text-xs font-bold text-slate-900 hover:text-emerald-700 transition-colors truncate block">
                        mayankgomase@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white border border-[#dcd8c9] hover:bg-slate-100 text-slate-700 transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-3.5 rounded-xl bg-[#faf8f3] border border-[#e8e4d8] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">PHONE NUMBER</div>
                      <a href="tel:+918983409622" className="text-xs font-bold text-slate-900 hover:text-amber-700 transition-colors truncate block">
                        +91 8983409622
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-white border border-[#dcd8c9] hover:bg-slate-100 text-slate-700 transition-colors shrink-0"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-amber-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Social & Resume Buttons */}
              <div className="pt-2 grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/Mayankg-13"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-[#dcd8c9] text-xs font-semibold text-slate-800 transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-slate-700" />
                  <span>GitHub ↗</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/mayank-gomase-58007628a/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-[#dcd8c9] text-xs font-semibold text-slate-800 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-700" />
                  <span>LinkedIn ↗</span>
                </a>
              </div>

              <button
                onClick={onOpenResume}
                className="w-full flex items-center justify-center gap-2 p-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold text-emerald-800 transition-all shadow-xs"
              >
                <FileText className="w-4 h-4 text-emerald-600" />
                <span>View & Download Official Resume PDF</span>
              </button>
            </div>
          </div>

          {/* Right Direct Message Form */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-[#dcd8c9] shadow-md bg-white">
            <div className="space-y-2 mb-6">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                <span>Send a Quick Message</span>
              </h3>
              <p className="text-xs text-slate-500">Have a project proposal, job role, or question? Send a message directly.</p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h4 className="text-lg font-bold text-slate-900">Message Sent Successfully!</h4>
                <p className="text-xs text-slate-700 max-w-md mx-auto">
                  Thank you for reaching out, {formData.name || 'friend'}! Mayank will respond to <strong className="text-emerald-800">{formData.email || 'your email'}</strong> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-slate-600 uppercase font-bold">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-[#dcd8c9] text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-slate-600 uppercase font-bold">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-[#dcd8c9] text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-600 uppercase font-bold">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. AI/ML Engineering Role"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-[#dcd8c9] text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-600 uppercase font-bold">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Share the details of your opportunity or project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-[#dcd8c9] text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
