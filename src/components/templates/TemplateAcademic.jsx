import React from 'react';

export const TemplateAcademic = ({ data }) => {
  const { personal, skills, education, experience } = data;

  return (
    <div className="bg-white text-slate-900 w-full min-h-[297mm] p-16 font-serif">
      <header className="mb-12 border-b-2 border-slate-900 pb-8">
        <h1 className="text-4xl font-bold mb-2 text-slate-900 leading-tight">
          {personal.fullName || 'YOUR NAME'}
        </h1>
        <p className="text-xl font-medium text-slate-700 italic mb-4">
          {personal.title || 'Professional Title'}
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-600 font-medium">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.address && <span>{personal.address}</span>}
        </div>
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="text-sm font-black uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-2 mb-6">Education & Credentials</h2>
          <div className="space-y-8">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-lg font-bold text-slate-800">{edu.degree}</h3>
                  <span className="text-sm font-bold text-slate-500">{edu.year}</span>
                </div>
                <p className="text-md text-slate-700 italic font-medium">{edu.school}</p>
                {edu.description && <p className="text-sm text-slate-600 mt-2 leading-relaxed">{edu.description}</p>}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-black uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-2 mb-6">Teaching & Research Experience</h2>
          <div className="space-y-10">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-lg font-bold text-slate-800">{exp.role}</h3>
                  <span className="text-sm font-bold text-slate-500">{exp.duration}</span>
                </div>
                <p className="text-md text-slate-700 font-bold mb-3 tracking-wide">{exp.company}</p>
                <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {skills.length > 0 && (
          <section>
            <h2 className="text-sm font-black uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-2 mb-6">Core Competencies</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                  <span className="text-sm text-slate-700 font-medium">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
