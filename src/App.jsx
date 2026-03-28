import React, { useState, useRef, useEffect } from 'react'
import { FileText, Download, Moon, Sun, User, Mail, Phone, MapPin, Globe, Briefcase, GraduationCap, Award, Eye, Palette, Trash2, Home, BookOpen, ShieldCheck, FileQuestion } from 'lucide-react'
import html2pdf from 'html2pdf.js'
import { motion, AnimatePresence } from 'framer-motion'
import { useResumeData } from './hooks/useResumeData'
import { Button } from './components/ui/Button'
import { FormSection } from './components/FormSection'
import { PersonalForm } from './components/forms/PersonalForm'
import { SkillsForm } from './components/forms/SkillsForm'
import { EducationForm } from './components/forms/EducationForm'
import { ExperienceForm } from './components/forms/ExperienceForm'
import { ImageUpload } from './components/forms/ImageUpload'
import { TemplateMinimal } from './components/templates/TemplateMinimal'
import { TemplateModern } from './components/templates/TemplateModern'
import { TemplateProfessional } from './components/templates/TemplateProfessional'
import { TemplateCreative } from './components/templates/TemplateCreative'
import { TemplateCompact } from './components/templates/TemplateCompact'
import { TemplateAcademic } from './components/templates/TemplateAcademic'
import { TemplatePremium } from './components/templates/TemplatePremium'
import { TemplateSelector } from './components/TemplateSelector'

// New components
import { Footer } from './components/ui/Footer'
import { PromoSlot } from './components/ui/PromoSlot'
import { PrivacyStat } from './components/legal/Privacy'
import { ToSStat } from './components/legal/Terms'
import { ResumeTips } from './components/sections/ResumeTips'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [template, setTemplate] = useState('minimal')
  const [currentPage, setCurrentPage] = useState('editor')
  const { 
    data, 
    updatePersonal, 
    addSkill, 
    removeSkill, 
    addItem, 
    updateItem, 
    removeItem, 
    resetData, 
    clearData,
    loadTeacherData
  } = useResumeData()
  const resumeRef = useRef(null)

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])

  const downloadPDF = () => {
    const element = resumeRef.current
    const opt = {
      margin: 0,
      filename: `${data.personal.fullName || 'resume'}.pdf`,
      image: { type: 'png', quality: 1.0 },
      html2canvas: { 
        scale: 4, 
        useCORS: true,
        letterRendering: true,
        logging: false,
        dpi: 300
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', compress: false }
    }
    html2pdf().set(opt).from(element).save()
  }

  const handleClear = () => {
    if (window.confirm("Clear all your information?")) {
      clearData()
    }
  }

  const renderContent = () => {
    switch(currentPage) {
      case 'tips': return <ResumeTips onNavigate={setCurrentPage} />
      case 'privacy': return <PrivacyStat />
      case 'terms': return <ToSStat />
      default: return (
        <>
          {/* Main Content Areas */}
          <main className="max-w-[1750px] mx-auto p-6 flex flex-col lg:flex-row gap-8 lg:h-[calc(100vh-88px)] overflow-hidden">
            
            {/* Left Side: Editor Section */}
            <section className="w-full lg:w-[400px] xl:w-[450px] flex-shrink-0 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-y-auto custom-scrollbar p-6">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  <Palette className="text-primary-500" size={24} /> Editor
                </h2>
                <p className="text-sm text-slate-500 mt-1">Design your professional future by CUROS.</p>
                <div className="mt-4 flex gap-2">
                  <button 
                    onClick={() => {
                      loadTeacherData();
                      setTemplate('academic');
                    }}
                    className="text-[10px] items-center gap-1.5 px-3 py-1.5 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full font-black uppercase tracking-widest border border-primary-200/50 dark:border-primary-800/50 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-all flex"
                  >
                    <BookOpen size={10} /> Load Teacher Example
                  </button>
                  <button 
                    onClick={clearData}
                    className="text-[10px] items-center gap-1.5 px-3 py-1.5 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-full font-black uppercase tracking-widest border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all flex"
                  >
                    <Trash2 size={10} /> Clear All
                  </button>
                </div>
              </div>

              <ImageUpload 
                image={data.personal.profileImage} 
                onChange={(val) => updatePersonal('profileImage', val)} 
              />

              <div className="space-y-6 mt-6">
                <FormSection title="Template Selection" icon={Palette}>
                  <TemplateSelector selected={template} onSelect={setTemplate} />
                </FormSection>

                <FormSection title="Personal Information" icon={User}>
                  <PersonalForm data={data.personal} updatePersonal={updatePersonal} />
                </FormSection>

                <PromoSlot slot="editor-sidebar-1" />

                <FormSection title="Professional Skills" icon={Briefcase}>
                  <SkillsForm skills={data.skills} addSkill={addSkill} removeSkill={removeSkill} />
                </FormSection>

                <FormSection title="Work Experience" icon={Award}>
                  <ExperienceForm 
                    items={data.experience} 
                    addItem={addItem} 
                    updateItem={updateItem} 
                    removeItem={removeItem} 
                  />
                </FormSection>

                <FormSection title="Education" icon={GraduationCap}>
                  <EducationForm 
                    items={data.education} 
                    addItem={addItem} 
                    updateItem={updateItem} 
                    removeItem={removeItem} 
                  />
                </FormSection>
              </div>
            </section>

            {/* Right Side: Preview Section */}
            <section className="flex-1 flex flex-col gap-6 overflow-hidden">
              <div className="flex items-center justify-between bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <Eye size={18} className="text-primary-500" />
                  <span className="text-sm font-bold uppercase tracking-wider">Live Preview</span>
                </div>
                <div className="flex gap-4">
                   <div className="text-xs font-medium text-slate-400 bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-100 dark:border-slate-700 hidden sm:block">
                    Standard A4 Format
                  </div>
                </div>
              </div>

              <div className="flex-1 bg-slate-200/50 dark:bg-slate-800/30 rounded-3xl overflow-y-auto p-4 sm:p-10 custom-scrollbar shadow-inner border border-slate-200/50 dark:border-slate-800/50">
                <div className="mx-auto w-full max-w-[210mm] shadow-2xl overflow-hidden rounded-sm transition-all duration-500">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={template}
                      initial={{ opacity: 0, scale: 0.98, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 1.02, y: -20 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      ref={resumeRef}
                      className="bg-white text-slate-900"
                      style={{ height: 'fit-content' }}
                    >
                      {template === 'minimal' && <TemplateMinimal data={data} />}
                      {template === 'modern' && <TemplateModern data={data} />}
                      {template === 'professional' && <TemplateProfessional data={data} />}
                      {template === 'creative' && <TemplateCreative data={data} />}
                      {template === 'compact' && <TemplateCompact data={data} />}
                      {template === 'premium' && <TemplatePremium data={data} />}
                      {template === 'academic' && <TemplateAcademic data={data} />}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </section>
          </main>
                    <div className="md:col-span-12 xl:col-span-12">
                     <PromoSlot slot="footer-banner" />
                  </div>
        </>
      )
    }
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500 flex flex-col">
        
        {/* Navigation Bar */}
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-6 py-4">
          <div className="max-w-[1750px] mx-auto flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div 
                className="flex items-center gap-3 cursor-pointer group"
                onClick={() => setCurrentPage('editor')}
              >
                <div className="bg-primary-600 p-2.5 rounded-xl shadow-lg shadow-primary-500/20 group-hover:rotate-12 transition-transform">
                  <FileText className="text-white" size={24} />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-xl font-black tracking-tighter uppercase text-slate-900 dark:text-white">CUROS</span>
                  <span className="text-[10px] font-bold text-primary-500 tracking-[0.2em] uppercase">Resume Pro</span>
                </div>
              </div>

              {/* Enhanced Nav Links */}
              <nav className="hidden lg:flex items-center gap-6">
                <button 
                  onClick={() => setCurrentPage('editor')}
                  className={`text-sm font-bold uppercase tracking-wider transition-all hover:text-primary-500 flex items-center gap-2 ${currentPage === 'editor' ? 'text-primary-600' : 'text-slate-500'}`}
                >
                  <Home size={16} /> Builder
                </button>
                <button 
                  onClick={() => setCurrentPage('tips')}
                  className={`text-sm font-bold uppercase tracking-wider transition-all hover:text-primary-500 flex items-center gap-2 ${currentPage === 'tips' ? 'text-primary-600' : 'text-slate-500'}`}
                >
                  <BookOpen size={16} /> Writing Tips
                </button>
                <a 
                  href="https://www.curos.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-bold uppercase tracking-wider text-slate-500 hover:text-primary-500 transition-all flex items-center gap-2"
                >
                  <Globe size={16} /> Main Site
                </a>
              </nav>
            </div>
            
            <div className="flex items-center gap-3">
              {currentPage === 'editor' && (
                <>
                  <Button 
                    variant="ghost" 
                    size="md" 
                    onClick={handleClear}
                    className="text-slate-500 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                    title="Clear All Fields"
                  >
                    <Trash2 size={18} />
                    <span className="hidden sm:inline">Clear</span>
                  </Button>
                  
                  <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800 mx-2 hidden sm:block"></div>
                </>
              )}
              
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-all border border-transparent hover:border-primary-500/20"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              {currentPage === 'editor' && (
                <Button 
                  onClick={downloadPDF}
                  className="shadow-xl bg-primary-600 hover:bg-primary-700 text-white border-none px-6"
                >
                  <Download size={18} />
                  <span className="hidden lg:inline uppercase tracking-widest font-black text-xs">Export PDF</span>
                </Button>
              )}
            </div>
          </div>
        </header>

        {renderContent()}

        <Footer onNavigate={setCurrentPage} />
      </div>
    </div>
  )
}

export default App
