import React from 'react'
import { FileText, CheckCircle } from 'lucide-react'

export const ToSStat = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-primary-50 dark:bg-primary-900/30 p-3 rounded-2xl">
          <FileText className="text-primary-600" size={32} />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 uppercase tracking-tight">Terms of Use</h1>
          <p className="text-slate-500 mt-1">Last updated: March 2026</p>
        </div>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-10 text-slate-600 dark:text-slate-400 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">Agreement</h2>
          <p>
            By accessing CUROS Resume Builder, you agree to follow our system terms. 
            All tools are provided "as-is" for professional development purposes.
          </p>
        </section>

        <section className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">Usage Rights</h2>
          <p className="mb-4">
            You retain full ownership of the resumes you build on our platform. 
            We do not claim any rights to your personal content.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-2">
              <CheckCircle className="text-green-500 mt-1" size={16} />
              <span>Full ownership of created files</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="text-green-500 mt-1" size={16} />
              <span>Commercial usage permitted</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
