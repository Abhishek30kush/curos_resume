import React from 'react'
import { Lightbulb, FileCheck, Target, Zap } from 'lucide-react'

export const ResumeTips = ({ onNavigate }) => {
  const tips = [
    {
      title: "Use Positive Action Verbs",
      desc: "Start bullet points with strong verbs like 'Managed', 'Developed', or 'Accelerated'.",
      icon: <Zap className="text-amber-500" size={24} />
    },
    {
      title: "Quantify Achievements",
      desc: "Use numbers (e.g., 'Increased sales by 20%') instead of just describing duties.",
      icon: <Target className="text-rose-500" size={24} />
    },
    {
      title: "Optimize for ATS",
      desc: "Use industry-standard keywords from the job description to pass Applicant Tracking Systems.",
      icon: <FileCheck className="text-emerald-500" size={24} />
    },
    {
      title: "Keep it Concise",
      desc: "Limit your resume to 1-2 pages. Focus on the most relevant information for the role.",
      icon: <Lightbulb className="text-blue-500" size={24} />
    }
  ]

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-slate-900 dark:text-slate-100 mb-4 tracking-tighter uppercase">
          Pro Resume Writing <span className="text-primary-600">Tips by CUROS</span>
        </h1>
        <p className="text-slate-500 text-lg">Master the art of job hunting with these expert strategies.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {tips.map((tip, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:shadow-primary-500/5 transition-all group">
            <div className="bg-slate-50 dark:bg-slate-800 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {tip.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">{tip.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              {tip.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-primary-600 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-primary-500/20">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black mb-2 uppercase tracking-tight">Ready to build?</h2>
            <p className="text-primary-100 font-medium">Use our premium templates to stand out from the crowd.</p>
          </div>
          <button 
            onClick={() => onNavigate('editor')}
            className="bg-white text-primary-600 px-8 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-transform uppercase tracking-wider"
          >
            Start Now
          </button>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-400/20 rounded-full -ml-20 -mb-20 blur-3xl"></div>
      </div>
    </div>
  )
}
