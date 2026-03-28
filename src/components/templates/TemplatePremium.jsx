import React from 'react';
import { Mail, Phone, MapPin, Globe, GraduationCap, Briefcase, User, CheckCircle2, BookOpen } from 'lucide-react';

export const TemplatePremium = ({ data }) => {
  const { personal, skills, education, experience } = data;

  return (
    <div className="bg-white text-slate-800 w-full min-h-[297mm] flex overflow-hidden shadow-2xl rounded-sm">
      {/* Sidebar (Left) */}
      <div className="w-[35%] bg-gradient-to-b from-[#1e293b] to-[#0f172a] text-white p-10 flex flex-col gap-12 relative overflow-hidden">
        {/* Subtle mesh pattern overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-blue-500/20"></div>
        </div>

        <div className="relative z-10">
          {/* Profile Picture */}
          <div className="flex justify-center mb-8">
            <div className="w-44 h-44 rounded-full border-[6px] border-white/10 shadow-2xl p-1 bg-white/5 backdrop-blur-sm">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white">
                {personal.profileImage ? (
                  <img src={personal.profileImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                    <User size={64} className="text-slate-600" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Name & Title */}
          <div className="text-center space-y-2 mb-10">
            <h1 className="text-3xl font-black tracking-tight text-white uppercase leading-none">
              {personal.fullName || 'YOUR NAME'}
            </h1>
            <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">{personal.title || 'Professional Title'}</p>
            <div className="w-12 h-0.5 bg-primary-500 mx-auto mt-4 rounded-full opacity-50"></div>
          </div>

          {/* Contact Section */}
          <section className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[.25em] text-white/50 border-b border-white/10 pb-2">Contact</h3>
            <ul className="space-y-4">
              {personal.email && (
                <li className="flex items-center gap-3 group">
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary-500 transition-colors">
                    <Mail size={14} className="text-slate-300 group-hover:text-white" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-300 truncate tracking-tight">{personal.email}</span>
                </li>
              )}
              {personal.phone && (
                <li className="flex items-center gap-3 group">
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary-500 transition-colors">
                    <Phone size={14} className="text-slate-300 group-hover:text-white" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-300 tracking-tight">{personal.phone}</span>
                </li>
              )}
              {personal.address && (
                <li className="flex items-center gap-3 group">
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary-500 transition-colors">
                    <MapPin size={14} className="text-slate-300 group-hover:text-white" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-300 tracking-tight">{personal.address}</span>
                </li>
              )}
            </ul>
          </section>

          {/* Skills Section */}
          {skills.length > 0 && (
            <section className="mt-12">
              <h3 className="text-xs font-black uppercase tracking-[.25em] text-white/50 border-b border-white/10 pb-2 mb-6">Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1.5 bg-[#2563eb] hover:bg-blue-500 text-white text-[10px] font-black rounded-lg shadow-lg shadow-blue-900/40 transition-all border border-blue-400/20">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Main Content (Right) */}
      <div className="flex-1 p-16 bg-white overflow-hidden flex flex-col gap-12">
        {/* Professional Summary */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xl font-black text-[#1e293b] tracking-tight">Professional Summary</h2>
          </div>
          <div className="h-0.5 w-full bg-slate-100 mb-6"></div>
          <p className="text-sm text-slate-600 leading-relaxed font-medium">
            {personal.summary || 'Enter your professional summary here.'}
          </p>
        </section>

        {/* Education Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#1e293b] p-2 rounded-lg"><GraduationCap size={20} className="text-white" /></div>
            <h2 className="text-xl font-black text-[#1e293b] tracking-tight uppercase">Education</h2>
          </div>
          <div className="h-0.5 w-full bg-slate-100 mb-8"></div>
          <div className="space-y-8">
            {education.map((edu) => (
              <div key={edu.id} className="relative pl-4">
                <div className="absolute left-0 top-1.5 bottom-0 w-0.5 bg-slate-100"></div>
                <h3 className="text-lg font-black text-slate-800 uppercase tracking-tight leading-none mb-2">{edu.degree}</h3>
                <p className="text-sm font-bold text-slate-500 mb-2">{edu.school}</p>
                <span className="text-xs font-black text-primary-600 bg-primary-50 px-3 py-1 rounded-full">{edu.year}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#1e293b] p-2 rounded-lg"><Briefcase size={20} className="text-white" /></div>
            <h2 className="text-xl font-black text-[#1e293b] tracking-tight uppercase">Experience</h2>
          </div>
          <div className="h-0.5 w-full bg-slate-100 mb-8"></div>
          <div className="space-y-12">
            {experience.map((exp) => (
              <div key={exp.id} className="group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="mt-1 transition-transform group-hover:scale-110">
                    <CheckCircle2 size={18} className="text-[#1e293b]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-lg font-black text-slate-800 uppercase tracking-tight leading-none">{exp.role}</h3>
                      <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100 uppercase tracking-widest">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-4 opacity-70">
                      <span>{exp.company}</span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                      <span>{exp.location}</span>
                    </div>
                    <div className="text-sm text-slate-600 leading-relaxed font-medium pl-2 border-l-2 border-slate-50 group-hover:border-[#1e293b]/20 transition-colors">
                      <ul className="space-y-3 list-none">
                        {exp.description?.split('\n').map((line, i) => (
                          <li key={i} className="flex items-start gap-2">
                             <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0"></span>
                             <span className="whitespace-pre-wrap">{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
