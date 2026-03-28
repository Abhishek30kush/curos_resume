import React from 'react'
import { FileText, Github, Twitter, Linkedin, Mail } from 'lucide-react'

export const Footer = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 mt-12 px-6">
      <div className="max-w-[1750px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary-600 p-2 rounded-lg">
                <FileText className="text-white" size={20} />
              </div>
              <h2 className="text-lg font-bold">CUROS Resume</h2>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
              Empowering careers with premium, professional resumes. Built by CUROS Enterprises LLP.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-500 hover:text-primary-500 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-500 hover:text-primary-500 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-500 hover:text-primary-500 transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-bold mb-6 text-slate-800 dark:text-slate-100">Product</h3>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li><button onClick={() => onNavigate('editor')} className="hover:text-primary-500 transition-colors">Resume Builder</button></li>
              <li><button onClick={() => onNavigate('tips')} className="hover:text-primary-500 transition-colors">Resume Tips</button></li>
              <li><a href="https://www.curos.in/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">Templates</a></li>
            </ul>
          </div>

          {/* Support/Company */}
          <div>
            <h3 className="font-bold mb-6 text-slate-800 dark:text-slate-100">Company</h3>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li><a href="https://www.curos.in/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">About CUROS</a></li>
              <li><a href="https://www.curos.in/contact-us" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">Contact</a></li>
              <li><button onClick={() => onNavigate('privacy')} className="hover:text-primary-500 transition-colors">Data & Privacy</button></li>
              <li><button onClick={() => onNavigate('terms')} className="hover:text-primary-500 transition-colors">Usage Terms</button></li>
            </ul>
          </div>

          {/* Newsletter/ADS */}
          <div>
            <h3 className="font-bold mb-6 text-slate-800 dark:text-slate-100">Newsletter</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Get career tips directly in your inbox.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none" 
              />
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">
            &copy; 2026 CUROS ENTERPRISES LLP. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-50 dark:bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-100 dark:border-slate-700">
            <Mail size={12} />
            support@curos.com
          </div>
        </div>
      </div>
    </footer>
  )
}
