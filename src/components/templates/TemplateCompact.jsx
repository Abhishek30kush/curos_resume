import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';

export const TemplateCompact = ({ data }) => {
  const { personal, skills, education, experience } = data;

  return (
    <div className="bg-white text-slate-900 w-full min-h-[297mm] p-10 font-sans tracking-tight">
      {/* Compact Header */}
      <header className="flex flex-col sm:flex-row justify-between items-end border-b-2 border-slate-900 pb-6 mb-6">
        <div>
          <h1 className="text-4xl font-extrabold uppercase tracking-tighter text-slate-900 leading-none mb-1">
            {personal.fullName || 'YOUR NAME'}
          </h1>
          <p className="text-lg font-bold text-slate-500 uppercase tracking-wide">
            {personal.title}
          </p>
        </div>
        <div className="flex flex-wrap justify-end gap-x-4 gap-y-1 text-[10px] font-bold text-slate-600 mt-4 sm:mt-0 text-right uppercase">
          {personal.email && <div className="flex items-center gap-1.5"><Mail size={12} strokeWidth={3} /> {personal.email}</div>}
          {personal.phone && <div className="flex items-center gap-1.5"><Phone size={12} strokeWidth={3} /> {personal.phone}</div>}
          {personal.address && <div className="flex items-center gap-1.5"><MapPin size={12} strokeWidth={3} /> {personal.address}</div>}
          {personal.website && <div className="flex items-center gap-1.5"><Globe size={12} strokeWidth={3} /> {personal.website}</div>}
        </div>
      </header>

      <div className="space-y-6">
        {/* Dynamic Multi-column for skills and summary */}
        <div className="grid grid-cols-12 gap-8">
          <section className="col-span-8">
            <h2 className="text-xs font-black uppercase bg-slate-900 text-white px-3 py-1 mb-3 inline-block rounded-sm">Profile</h2>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              {personal.summary}
            </p>
          </section>
          
          <section className="col-span-4">
            <h2 className="text-xs font-black uppercase bg-slate-900 text-white px-3 py-1 mb-3 inline-block rounded-sm">Tech Stack</h2>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill, index) => (
                <span key={index} className="px-2 py-0.5 bg-slate-100 text-[10px] font-bold rounded-full border border-slate-200">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>

        <section>
          <h2 className="text-xs font-black uppercase bg-slate-900 text-white px-3 py-1 mb-4 flex items-center justify-between w-full rounded-sm">
            Work Experience
            <span className="text-[10px] font-bold opacity-50 uppercase">Professional</span>
          </h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id} className="grid grid-cols-12 gap-4">
                <div className="col-span-3 text-[10px] font-black text-slate-400 pt-1 uppercase tracking-tighter">
                  {exp.duration}
                </div>
                <div className="col-span-9">
                  <h3 className="text-sm font-black text-slate-800 uppercase tracking-tight">{exp.role}</h3>
                  <p className="text-[11px] font-bold text-slate-500 mb-2 italic">{exp.company} // {exp.location}</p>
                  <p className="text-xs text-slate-600 leading-tight whitespace-pre-wrap">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xs font-black uppercase bg-slate-900 text-white px-3 py-1 mb-4 inline-block rounded-sm">Academic History</h2>
          <div className="grid grid-cols-2 gap-x-12 gap-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="flex flex-col">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-[11px] font-black uppercase tracking-tight">{edu.degree}</h3>
                  <span className="text-[9px] font-bold text-slate-400">{edu.year}</span>
                </div>
                <p className="text-[10px] font-bold text-slate-500">{edu.school}</p>
                {edu.description && <p className="text-[9px] text-slate-400 mt-1 leading-tight">{edu.description}</p>}
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="mt-12 pt-6 border-t border-slate-100 text-center">
        <p className="text-[9px] font-black text-slate-300 uppercase tracking-[.3em]">Built with ResumePro Builder</p>
      </footer>
    </div>
  );
};
