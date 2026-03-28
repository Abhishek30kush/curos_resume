import React from 'react';
import { Mail, Phone, MapPin, Globe, CheckCircle2 } from 'lucide-react';

export const ProfessionalTemplate = ({ data }) => {
  const { personal, skills, education, experience } = data;

  return (
    <div className="bg-white text-slate-900 w-full min-h-[297mm] p-12 font-sans border-t-[12px] border-primary-700">
      {/* Header Section */}
      <header className="mb-10 flex justify-between items-end border-b border-slate-100 pb-10">
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 mb-2 uppercase">
            {personal.fullName || 'YOUR NAME'}
          </h1>
          <p className="text-2xl font-semibold text-primary-700">
            {personal.title || 'Professional Title'}
          </p>
          <div className="flex flex-wrap gap-4 mt-6 text-sm text-slate-500 font-medium">
            {personal.email && (
              <span className="flex items-center gap-1.5"><Mail size={14} /> {personal.email}</span>
            )}
            {personal.phone && (
              <span className="flex items-center gap-1.5"><Phone size={14} /> {personal.phone}</span>
            )}
            {personal.address && (
              <span className="flex items-center gap-1.5"><MapPin size={14} /> {personal.address}</span>
            )}
            {personal.website && (
              <span className="flex items-center gap-1.5"><Globe size={14} /> {personal.website}</span>
            )}
          </div>
        </div>
        {personal.profileImage && (
          <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-white mb-[-20px] z-10">
            <img src={personal.profileImage} alt="Profile" className="w-full h-full object-cover" />
          </div>
        )}
      </header>

      <div className="grid grid-cols-12 gap-10">
        {/* Main Column */}
        <div className="col-span-8 space-y-10">
          {/* Summary */}
          <section>
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-4 border-l-4 border-primary-700 pl-3">Summary</h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              {personal.summary || 'A professional summary of your background and goals.'}
            </p>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-6 border-l-4 border-primary-700 pl-3">Professional Experience</h2>
            <div className="space-y-8">
              {experience.map((exp) => (
                <div key={exp.id} className="relative">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-lg font-bold text-slate-800">{exp.role || 'Job Role'}</h3>
                    <span className="text-xs font-bold text-slate-500">{exp.duration || 'Duration'}</span>
                  </div>
                  <p className="text-primary-700 font-bold text-sm mb-3">
                    {exp.company} {exp.location && `| ${exp.location}`}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-wrap">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Column */}
        <div className="col-span-4 space-y-10">
          {/* Skills */}
          {skills.length > 0 && (
            <section>
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-6 border-l-4 border-primary-700 pl-3">Core Skills</h2>
              <ul className="grid grid-cols-1 gap-y-2">
                {skills.map((skill, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <CheckCircle2 size={14} className="text-primary-600 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Education */}
          <section>
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-6 border-l-4 border-primary-700 pl-3">Education</h2>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id}>
                  <h4 className="font-bold text-slate-800 text-sm leading-tight mb-1">{edu.degree}</h4>
                  <p className="text-xs text-primary-700 font-semibold mb-1">{edu.school}</p>
                  <p className="text-[10px] text-slate-400 font-bold">{edu.year}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
