import React from 'react';
import { Mail, Phone, MapPin, Globe, Briefcase, GraduationCap, Award } from 'lucide-react';

export const ModernTemplate = ({ data }) => {
  const { personal, skills, education, experience } = data;

  return (
    <div className="bg-white text-slate-900 w-full min-h-[297mm] font-sans flex overflow-hidden">
      {/* Sidebar - Dark Accent */}
      <div className="w-[35%] bg-slate-900 text-white p-10 flex flex-col gap-10">
        <div className="flex flex-col items-center">
          {personal.profileImage ? (
            <div className="w-40 h-40 rounded-3xl overflow-hidden mb-6 border-4 border-slate-800 shadow-2xl rotate-3">
              <img src={personal.profileImage} alt="Profile" className="w-full h-full object-cover -rotate-3 hover:rotate-0 transition-transform duration-300" />
            </div>
          ) : (
            <div className="w-32 h-32 rounded-3xl bg-slate-800 flex items-center justify-center mb-6">
              <span className="text-4xl font-bold uppercase">{personal.fullName?.charAt(0) || 'U'}</span>
            </div>
          )}
          <h1 className="text-2xl font-black text-center leading-tight uppercase tracking-tight">
            {personal.fullName || 'NAME SURNAME'}
          </h1>
          <div className="h-1 w-12 bg-primary-500 mt-4 rounded-full"></div>
          <p className="text-primary-400 font-bold text-sm uppercase mt-4 tracking-widest">
            {personal.title || 'JOB TITLE'}
          </p>
        </div>

        <section>
          <h3 className="text-xs font-black uppercase text-slate-500 tracking-[0.2em] mb-6 flex items-center gap-2">
            <div className="w-4 h-[1px] bg-slate-500"></div>
            Contact
          </h3>
          <ul className="space-y-4 text-sm">
            {personal.email && (
              <li className="flex flex-col gap-1">
                <span className="text-[10px] uppercase text-slate-500 font-bold">Email</span>
                <span className="text-slate-300">{personal.email}</span>
              </li>
            )}
            {personal.phone && (
              <li className="flex flex-col gap-1">
                <span className="text-[10px] uppercase text-slate-500 font-bold">Phone</span>
                <span className="text-slate-300">{personal.phone}</span>
              </li>
            )}
            {personal.address && (
              <li className="flex flex-col gap-1">
                <span className="text-[10px] uppercase text-slate-500 font-bold">Location</span>
                <span className="text-slate-300">{personal.address}</span>
              </li>
            )}
            {personal.website && (
              <li className="flex flex-col gap-1">
                <span className="text-[10px] uppercase text-slate-500 font-bold">Web</span>
                <span className="text-slate-300">{personal.website}</span>
              </li>
            )}
          </ul>
        </section>

        {skills.length > 0 && (
          <section>
            <h3 className="text-xs font-black uppercase text-slate-500 tracking-[0.2em] mb-6 flex items-center gap-2">
              <div className="w-4 h-[1px] bg-slate-500"></div>
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-slate-800 text-slate-300 text-[11px] font-bold rounded-lg border border-slate-700">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-12 bg-slate-50/50">
        <section className="mb-12">
          <h2 className="text-xs font-black uppercase text-primary-600 tracking-[0.3em] mb-4">About Me</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            {personal.summary || 'Summary about your career and professional expertise.'}
          </p>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-xs font-black uppercase text-primary-600 tracking-[0.3em]">Experience</h2>
            <div className="h-[1px] flex-1 bg-slate-200"></div>
          </div>
          <div className="space-y-10">
            {experience.map((exp) => (
              <div key={exp.id} className="relative">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="font-extrabold text-slate-800 uppercase tracking-tight">{exp.role || 'Role'}</h4>
                  <span className="text-[10px] font-black text-slate-400 bg-white px-2 py-0.5 border border-slate-200 rounded-full">{exp.duration}</span>
                </div>
                <p className="text-primary-600 font-bold text-xs mb-3 italic">
                  {exp.company} {exp.location && `// ${exp.location}`}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-wrap">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-xs font-black uppercase text-primary-600 tracking-[0.3em]">Education</h2>
            <div className="h-[1px] flex-1 bg-slate-200"></div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {education.map((edu) => (
              <div key={edu.id} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-slate-800 text-sm uppercase tracking-tight">{edu.degree}</h4>
                  <span className="text-[10px] font-bold text-primary-500">{edu.year}</span>
                </div>
                <p className="text-xs font-medium text-slate-500">{edu.school}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
