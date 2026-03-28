import React from 'react'
import { ShieldAlert, CheckCircle } from 'lucide-react'

export const PrivacyStat = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-primary-50 dark:bg-primary-900/30 p-3 rounded-2xl">
          <ShieldAlert className="text-primary-600" size={32} />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 uppercase tracking-tight">Data & Privacy</h1>
          <p className="text-slate-500 mt-1">Last updated: March 2026</p>
        </div>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-10 text-slate-600 dark:text-slate-400 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">Core Principles</h2>
          <p>
            At CUROS Resume Builder, we prioritize user security. This document explains how we handle your data. 
            We do not store your personal resume data on our servers; all processing is done locally in your browser environment.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">Technical Logs</h2>
          <p>
            We follow standard procedures of using technical log files. These files log system interactions when you access our services. 
            This information includes IP addresses, browser type, and time stamps for system maintenance and analytics.
          </p>
        </section>

        <section className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">System Cookies</h2>
          <p className="mb-4">
            CUROS Resume Builder uses "cookies" to store system preferences and session state. 
            This helps us provide a personalized and efficient experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-2">
              <CheckCircle className="text-green-500 mt-1" size={16} />
              <span>Personalization of content</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="text-green-500 mt-1" size={16} />
              <span>Service optimization</span>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">Contact</h2>
          <p>
            For information about our data practices, 
            contact us at <strong>support@curos.com</strong>.
          </p>
        </section>
      </div>
    </div>
  )
}
