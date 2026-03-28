import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export const TemplateMinimal = ({ data }) => {
  const { personal, skills, education, experience } = data;

  return (
    <div className="bg-white text-slate-900 w-full min-h-[297mm] p-16 font-serif">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-light uppercase tracking-[.25em] mb-4 text-slate-900">
          {personal.fullName || 'YOUR NAME'}
        </h1>
        <p className="text-sm tracking-[.4em] text-slate-400 uppercase font-medium mb-6">
          {personal.title || 'Professional Title'}
        </p>
        <div className="flex justify-center gap-6 text-[11px] uppercase tracking-widest text-slate-500 border-t border-b border-slate-100 py-3">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.address && <span>{personal.address}</span>}
        </div>
      </header>

      <div className="max-w-3xl mx-auto space-y-12">
        <section>
          <p className="text-center text-slate-600 leading-relaxed italic text-sm">
            {personal.summary || 'A minimalist professional summary.'}
          </p>
        </section>

        <section>
          <h2 className="text-[10px] font-bold uppercase tracking-[.3em] text-slate-400 mb-6 text-center">Experience</h2>
          <div className="space-y-10 text-center sm:text-left">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex flex-col sm:flex-row justify-between items-baseline mb-2">
                  <h3 className="text-base font-bold text-slate-800">{exp.role}</h3>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">{exp.duration}</span>
                </div>
                <p className="text-xs font-medium text-slate-500 mb-3 tracking-wide">{exp.company} // {exp.location}</p>
                <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto sm:mx-0 whitespace-pre-wrap">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-[10px] font-bold uppercase tracking-[.3em] text-slate-400 mb-6 text-center">Education</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center sm:text-left">
            {education.map((edu) => (
              <div key={edu.id}>
                <h3 className="text-sm font-bold text-slate-800 mb-1">{edu.degree}</h3>
                <p className="text-xs text-slate-500 italic mb-1">{edu.school}</p>
                <p className="text-[10px] text-slate-400 font-bold">{edu.year}</p>
              </div>
            ))}
          </div>
        </section>

        {skills.length > 0 && (
          <section>
            <h2 className="text-[10px] font-bold uppercase tracking-[.3em] text-slate-400 mb-6 text-center">Skills</h2>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {skills.map((skill, index) => (
                <span key={index} className="text-xs text-slate-600 tracking-wider">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
