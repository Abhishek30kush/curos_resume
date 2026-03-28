import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export const MinimalTemplate = ({ data }) => {
  const { personal, skills, education, experience } = data;

  return (
    <div className="bg-white text-slate-900 w-full min-h-[297mm] p-12 font-serif">
      {/* Header */}
      <div className="border-b-2 border-slate-900 pb-8 mb-8 flex justify-between items-start">
        <div className="max-w-[70%]">
          <h1 className="text-4xl font-bold uppercase tracking-tighter mb-2 text-slate-900 leading-none">
            {personal.fullName || 'YOUR NAME'}
          </h1>
          <p className="text-xl text-slate-600 font-medium">
            {personal.title || 'Professional Title'}
          </p>
          <p className="mt-4 text-sm text-slate-500 italic max-w-xl">
            {personal.summary || 'A brief professional summary about yourself.'}
          </p>
        </div>
        {personal.profileImage && (
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-slate-100 ring-2 ring-slate-100 flex-shrink-0">
            <img src={personal.profileImage} alt="Profile" className="w-full h-full object-cover" />
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-12">
        {/* Sidebar */}
        <div className="col-span-1 space-y-8">
          {/* Contact */}
          <section>
            <h3 className="text-sm font-bold uppercase tracking-widest border-b border-slate-200 pb-2 mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              {personal.email && (
                <li className="flex items-center gap-3">
                  <Mail size={14} className="text-slate-400" />
                  <span className="break-all">{personal.email}</span>
                </li>
              )}
              {personal.phone && (
                <li className="flex items-center gap-3">
                  <Phone size={14} className="text-slate-400" />
                  <span>{personal.phone}</span>
                </li>
              )}
              {personal.address && (
                <li className="flex items-center gap-3">
                  <MapPin size={14} className="text-slate-400" />
                  <span>{personal.address}</span>
                </li>
              )}
              {personal.website && (
                <li className="flex items-center gap-3">
                  <Globe size={14} className="text-slate-400" />
                  <span className="break-all">{personal.website}</span>
                </li>
              )}
            </ul>
          </section>

          {/* Skills */}
          {skills.length > 0 && (
            <section>
              <h3 className="text-sm font-bold uppercase tracking-widest border-b border-slate-200 pb-2 mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="text-xs bg-slate-50 border border-slate-100 px-2 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Main Content */}
        <div className="col-span-2 space-y-10">
          {/* Experience */}
          <section>
            <h3 className="text-sm font-bold uppercase tracking-widest border-b border-slate-200 pb-2 mb-6">Experience</h3>
            <div className="space-y-8">
              {experience.map((exp) => (
                <div key={exp.id} className="relative pl-4 border-l border-slate-100">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-slate-200 rounded-full"></div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-lg">{exp.role || 'Job Role'}</h4>
                    <span className="text-sm text-slate-500 whitespace-nowrap">{exp.duration || 'Duration'}</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-700 mb-2 italic">
                    {exp.company || 'Company Name'} {exp.location && `| ${exp.location}`}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">
                    {exp.description || 'Description of your role and achievements.'}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-sm font-bold uppercase tracking-widest border-b border-slate-200 pb-2 mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-slate-800">{edu.degree || 'Degree'}</h4>
                    <span className="text-sm text-slate-500">{edu.year || 'Year'}</span>
                  </div>
                  <p className="text-sm text-slate-600 italic mb-2">{edu.school || 'School/University'}</p>
                  {edu.description && <p className="text-xs text-slate-500">{edu.description}</p>}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
