import React from 'react';
import { User, Briefcase, GraduationCap, Star, Phone, Mail, MapPin, Globe } from 'lucide-react';

export const TemplateCreative = ({ data }) => {
  const { personal, skills, education, experience } = data;

  return (
    <div className="bg-white text-slate-800 w-full min-h-[297mm] font-sans flex overflow-hidden">
      {/* Visual Accent - Color Strip */}
      <div className="w-4 bg-gradient-to-b from-primary-600 via-indigo-600 to-primary-900 h-full"></div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Creative Header */}
        <header className="bg-slate-50 p-16 flex justify-between items-center group">
          <div className="space-y-2">
            <h1 className="text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none border-l-8 border-primary-600 pl-6 group-hover:pl-8 transition-all duration-500">
              {personal.fullName?.split(' ')[0]}<br/>
              <span className="text-primary-600">{personal.fullName?.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-xl font-bold text-slate-400 mt-4 uppercase tracking-[.2em]">{personal.title}</p>
          </div>
          {personal.profileImage && (
            <div className="w-48 h-48 rounded-full border-[10px] border-white shadow-2xl overflow-hidden -rotate-3 hover:rotate-0 transition-transform duration-500">
              <img src={personal.profileImage} alt="Profile" className="w-full h-full object-cover" />
            </div>
          )}
        </header>

        <div className="flex-1 grid grid-cols-12">
          {/* Main Column */}
          <div className="col-span-8 p-12 space-y-12">
            <section>
              <h2 className="text-sm font-black uppercase tracking-widest text-primary-600 mb-6 flex items-center gap-2">
                <div className="w-8 h-1 bg-primary-600 rounded-full"></div> About Me
              </h2>
              <p className="text-slate-600 leading-relaxed font-medium pl-10">
                {personal.summary}
              </p>
            </section>

            <section>
              <h2 className="text-sm font-black uppercase tracking-widest text-primary-600 mb-8 flex items-center gap-2">
                <div className="w-8 h-1 bg-primary-600 rounded-full"></div> Experience
              </h2>
              <div className="space-y-10 pl-10">
                {experience.map((exp) => (
                  <div key={exp.id} className="relative">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-lg font-black text-slate-800 uppercase tracking-tight">{exp.role}</h3>
                      <span className="text-[10px] font-black bg-slate-100 px-3 py-1 rounded-full uppercase text-slate-500">{exp.duration}</span>
                    </div>
                    <p className="text-xs font-bold text-primary-500 mb-4">{exp.company} // {exp.location}</p>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Column */}
          <div className="col-span-4 bg-slate-900 text-white p-12 flex flex-col gap-12">
            <section>
              <h3 className="text-xs font-black uppercase tracking-[.3em] text-primary-400 mb-6">Connect</h3>
              <ul className="space-y-6">
                {personal.email && (
                  <li className="flex flex-col gap-1">
                    <span className="text-[9px] uppercase font-bold text-slate-500">Email</span>
                    <span className="text-sm font-bold truncate">{personal.email}</span>
                  </li>
                )}
                {personal.phone && (
                  <li className="flex flex-col gap-1">
                    <span className="text-[9px] uppercase font-bold text-slate-500">Phone</span>
                    <span className="text-sm font-bold">{personal.phone}</span>
                  </li>
                )}
                {personal.address && (
                  <li className="flex flex-col gap-1">
                    <span className="text-[9px] uppercase font-bold text-slate-500">Location</span>
                    <span className="text-sm font-bold">{personal.address}</span>
                  </li>
                )}
              </ul>
            </section>

            <section>
              <h3 className="text-xs font-black uppercase tracking-[.3em] text-primary-400 mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <h4 className="font-black text-sm uppercase leading-none mb-2">{edu.degree}</h4>
                    <p className="text-[10px] font-bold text-slate-400 italic mb-2">{edu.school}</p>
                    <span className="text-[9px] font-black bg-slate-800 px-2 py-1 rounded-lg border border-slate-700">{edu.year}</span>
                  </div>
                ))}
              </div>
            </section>

            {skills.length > 0 && (
              <section>
                <h3 className="text-xs font-black uppercase tracking-[.3em] text-primary-400 mb-6">Expertise</h3>
                <div className="flex flex-col gap-2">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full group-hover:scale-150 transition-transform"></div>
                      <span className="text-xs font-bold text-slate-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
