import React from 'react';
import { Mail, Phone, MapPin, Globe, Award, Target, Zap } from 'lucide-react';

export const TemplateModern = ({ data }) => {
  const { personal, skills, education, experience } = data;

  return (
    <div className="bg-white text-slate-900 w-full min-h-[297mm] font-sans flex shadow-xl">
      {/* Sidebar */}
      <div className="w-[30%] bg-slate-900 text-white p-10 flex flex-col gap-10">
        <div className="mb-4">
          {personal.profileImage ? (
            <div className="w-full aspect-square rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl mb-6">
              <img src={personal.profileImage} alt="Profile" className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="w-full aspect-square rounded-2xl bg-slate-800 flex items-center justify-center mb-6">
              <span className="text-6xl font-black text-slate-700">{personal.fullName?.charAt(0)}</span>
            </div>
          )}
        </div>

        <section>
          <h3 className="text-[10px] font-black uppercase text-primary-500 tracking-[0.2em] mb-6 flex items-center gap-2">
            Contact
          </h3>
          <ul className="space-y-4 text-[11px]">
            {personal.email && <li className="flex flex-col gap-1"><span className="text-slate-500 uppercase font-bold text-[9px]">Email</span>{personal.email}</li>}
            {personal.phone && <li className="flex flex-col gap-1"><span className="text-slate-500 uppercase font-bold text-[9px]">Phone</span>{personal.phone}</li>}
            {personal.address && <li className="flex flex-col gap-1"><span className="text-slate-500 uppercase font-bold text-[9px]">Location</span>{personal.address}</li>}
          </ul>
        </section>

        {skills.length > 0 && (
          <section>
            <h3 className="text-[10px] font-black uppercase text-primary-500 tracking-[0.2em] mb-6">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span key={index} className="px-2 py-1 bg-slate-800 text-slate-300 text-[10px] rounded border border-slate-700">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-16 overflow-hidden">
        <header className="mb-12">
          <h1 className="text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-2">
            {personal.fullName || 'NAME'}
          </h1>
          <p className="text-xl font-bold text-primary-600 tracking-wide">
            {personal.title}
          </p>
          <div className="h-1.5 w-16 bg-primary-600 mt-6 rounded-full"></div>
        </header>

        <div className="space-y-12">
          <section>
            <p className="text-slate-600 leading-relaxed text-sm">
              {personal.summary}
            </p>
          </section>

          <section>
            <h2 className="text-base font-black uppercase text-slate-900 tracking-widest mb-8 border-b-4 border-slate-100 pb-2 inline-block">Experience</h2>
            <div className="space-y-10">
              {experience.map((exp) => (
                <div key={exp.id} className="relative pl-6 border-l-2 border-slate-100">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-primary-500 rounded-full shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-base font-black text-slate-800 uppercase tracking-tight">{exp.role}</h3>
                    <span className="text-[10px] font-bold text-slate-400">{exp.duration}</span>
                  </div>
                  <p className="text-xs font-bold text-primary-600 mb-3 italic">{exp.company} / {exp.location}</p>
                  <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-wrap">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-base font-black uppercase text-slate-900 tracking-widest mb-8 border-b-4 border-slate-100 pb-2 inline-block">Education</h2>
            <div className="grid grid-cols-2 gap-8">
              {education.map((edu) => (
                <div key={edu.id} className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-800 text-xs mb-1 uppercase tracking-tight">{edu.degree}</h4>
                  <p className="text-[10px] font-bold text-primary-500 mb-2">{edu.school}</p>
                  <span className="text-[9px] font-black text-slate-300 uppercase">{edu.year}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
