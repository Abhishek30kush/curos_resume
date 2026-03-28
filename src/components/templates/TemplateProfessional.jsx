import React from 'react';
import { Mail, Phone, MapPin, Globe, ShieldCheck } from 'lucide-react';

export const TemplateProfessional = ({ data }) => {
  const { personal, skills, education, experience } = data;

  return (
    <div className="bg-white text-slate-900 w-full min-h-[297mm] p-16 font-sans border-t-[20px] border-slate-900">
      <header className="flex justify-between items-start mb-12">
        <div className="max-w-[70%]">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight leading-none mb-2 uppercase">
            {personal.fullName}
          </h1>
          <p className="text-lg font-bold text-slate-500 mb-6 italic">{personal.title}</p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-[11px] font-bold text-slate-600">
            {personal.email && <p className="flex items-center gap-2"><Mail size={12} className="text-slate-300" /> {personal.email}</p>}
            {personal.phone && <p className="flex items-center gap-2"><Phone size={12} className="text-slate-300" /> {personal.phone}</p>}
            {personal.address && <p className="flex items-center gap-2"><MapPin size={12} className="text-slate-300" /> {personal.address}</p>}
            {personal.website && <p className="flex items-center gap-2"><Globe size={12} className="text-slate-300" /> {personal.website}</p>}
          </div>
        </div>
        {personal.profileImage && (
          <div className="w-28 h-36 rounded-lg overflow-hidden border border-slate-100 shadow-sm grayscale hover:grayscale-0 transition-all duration-700">
            <img src={personal.profileImage} alt="Profile" className="w-full h-full object-top object-cover" />
          </div>
        )}
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 border-b border-slate-100 pb-2 flex items-center gap-2">
            <ShieldCheck size={14} /> Professional Summary
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed font-medium">
            {personal.summary}
          </p>
        </section>

        <section>
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-8 border-b border-slate-100 pb-2">Experience History</h2>
          <div className="space-y-10">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-base font-black text-slate-800 uppercase tracking-tight">{exp.role}</h3>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{exp.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-4">
                  <span>{exp.company}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span>{exp.location}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap border-l-2 border-slate-50 pl-6 italic">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-2 gap-12">
          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 border-b border-slate-100 pb-2">Academic Background</h2>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id}>
                  <h4 className="font-bold text-slate-800 text-sm leading-tight mb-1 uppercase tracking-tight">{edu.degree}</h4>
                  <p className="text-xs font-bold text-slate-500 mb-1">{edu.school}</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">{edu.year}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 border-b border-slate-100 pb-2">Core Competencies</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-slate-50 text-slate-600 text-[11px] font-bold border border-slate-100 uppercase tracking-tighter">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
