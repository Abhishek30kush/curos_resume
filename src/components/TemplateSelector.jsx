import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Layout, Zap, Award, Target, BookOpen, Crown } from 'lucide-react';
import { cn } from './ui/Button';

const templates = [
  {
    id: 'minimal',
    name: 'Minimal',
    icon: BookOpen,
    description: 'Clean, serif, focus on whitespace.',
    preview: (
      <div className="w-full h-full bg-white p-2 scale-[0.6] origin-top border shadow-sm">
        <div className="h-4 w-2/3 bg-slate-800 mb-2"></div>
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1"><div className="h-1 w-full bg-slate-200"></div><div className="h-1 w-full bg-slate-200"></div></div>
          <div className="space-y-1 border-l pl-2"><div className="h-2 w-full bg-slate-300"></div></div>
        </div>
      </div>
    )
  },
  {
    id: 'modern',
    name: 'Modern',
    icon: Zap,
    description: 'Bolder headers with dark sidebars.',
    preview: (
      <div className="w-full h-full bg-white flex scale-[0.6] origin-top border shadow-sm overflow-hidden text-[6px]">
        <div className="w-1/3 bg-slate-900 h-full p-1"><div className="w-4 h-4 rounded-full bg-slate-800 mb-1"></div></div>
        <div className="flex-1 p-1 space-y-1"><div className="h-2 w-2/3 bg-primary-500"></div><div className="h-1 w-full bg-slate-200"></div></div>
      </div>
    )
  },
  {
    id: 'professional',
    name: 'Professional',
    icon: Award,
    description: 'Corporate ATS-friendly layout.',
    preview: (
      <div className="w-full h-full bg-white p-1 scale-[0.6] origin-top border shadow-sm border-t-4 border-slate-900">
        <div className="h-3 w-1/2 bg-slate-800 mb-2"></div>
        <div className="grid grid-cols-12 gap-1 text-[4px]">
          <div className="col-span-8 space-y-1"><div className="h-1 w-full bg-slate-100"></div></div>
          <div className="col-span-4 space-y-1 border-l pl-1"><div className="h-1 w-full bg-primary-100"></div></div>
        </div>
      </div>
    )
  },
  {
    id: 'creative',
    name: 'Creative',
    icon: Target,
    description: 'Vibrant, bold with visual accents.',
    preview: (
      <div className="w-full h-full bg-slate-50 flex scale-[0.6] origin-top border shadow-sm overflow-hidden">
        <div className="w-1 bg-primary-600 h-full"></div>
        <div className="flex-1">
          <div className="bg-white p-1 mb-1 flex items-center gap-1">
            <div className="w-3 h-3 bg-slate-200 rounded-full"></div>
            <div className="h-2 w-1/2 bg-slate-800"></div>
          </div>
          <div className="p-1 space-y-1"><div className="h-1 w-full bg-primary-100"></div><div className="h-1 w-full bg-primary-100"></div></div>
        </div>
      </div>
    )
  },
  {
    id: 'compact',
    name: 'Compact',
    icon: Layout,
    description: 'High-density, optimized for one page.',
    preview: (
      <div className="w-full h-full bg-white p-1 scale-[0.6] origin-top border shadow-sm">
        <div className="flex justify-between border-b pb-1 mb-1">
          <div className="h-2 w-1/3 bg-slate-900"></div>
          <div className="flex gap-1"><div className="w-2 h-1 bg-slate-100"></div><div className="w-2 h-1 bg-slate-100"></div></div>
        </div>
        <div className="grid grid-cols-2 gap-1"><div className="h-4 bg-slate-50"></div><div className="h-4 bg-slate-50"></div></div>
      </div>
    )
  },
  {
    id: 'premium',
    name: 'Premium UI',
    icon: Crown,
    description: 'Exclusive navy sidebar with custom icons.',
    preview: (
      <div className="w-full h-full bg-white flex scale-[0.6] origin-top border shadow-sm overflow-hidden">
        <div className="w-[35%] bg-slate-800 h-full p-1"><div className="w-4 h-4 rounded-full bg-slate-700 mx-auto mt-1 mb-1 border-white/20 border"></div></div>
        <div className="flex-1 p-1 space-y-1">
          <div className="h-1 w-1/2 bg-slate-300"></div>
          <div className="h-3 w-full bg-slate-50"></div>
          <div className="flex items-center gap-1"><div className="w-1 h-1 bg-slate-900"></div><div className="h-1 w-2/3 bg-slate-100"></div></div>
        </div>
      </div>
    )
  },
  {
    id: 'academic',
    name: 'Academic/Teacher',
    icon: BookOpen,
    description: 'Traditional, structured for educators.',
    preview: (
      <div className="w-full h-full bg-white p-1 scale-[0.6] origin-top border shadow-sm">
        <div className="border-b-2 border-slate-900 pb-1 mb-2">
          <div className="h-2 w-1/2 bg-slate-900 mb-1"></div>
          <div className="h-1 w-2/3 bg-slate-400 italic"></div>
        </div>
        <div className="space-y-4">
          <div className="border-b border-slate-100 pb-1"><div className="h-1 w-full bg-slate-200"></div></div>
          <div className="border-b border-slate-100 pb-1"><div className="h-1 w-full bg-slate-200"></div></div>
        </div>
      </div>
    )
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export const TemplateSelector = ({ selected, onSelect }) => {
  return (
    <div className="w-full">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-4"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-primary-500 animate-pulse" />
            <h3 className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Select Style</h3>
          </div>
          <span className="text-[9px] bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 px-2 py-0.5 rounded-full font-black uppercase tracking-tighter border border-primary-200/50 dark:border-primary-800/50">
            {templates.length} Options
          </span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:overflow-x-auto lg:overflow-visible pb-2 sm:pb-0 custom-scrollbar flex sm:flex-nowrap lg:flex-col">
          {templates.map((t) => {
            const Icon = t.icon;
            return (
              <motion.button
                key={t.id}
                variants={itemVariants}
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelect(t.id)}
                className={cn(
                  "group relative p-3 rounded-2xl transition-all text-left overflow-hidden min-w-[240px] lg:min-w-0 flex-shrink-0",
                  "bg-white/40 dark:bg-slate-800/20 backdrop-blur-xl border-2",
                  selected === t.id 
                    ? "border-primary-500 shadow-xl shadow-primary-500/10 z-10" 
                    : "border-white/60 dark:border-slate-800/60 hover:border-primary-300 dark:hover:border-primary-700/50"
                )}
              >
                <div className="flex gap-3 items-center">
                  <div className={cn(
                    "w-14 h-20 rounded-xl overflow-hidden border transition-transform duration-500 relative bg-white dark:bg-slate-900 flex-shrink-0",
                    selected === t.id ? "border-primary-500/50 shadow-md scale-105" : "border-slate-100 dark:border-slate-800"
                  )}>
                    {t.preview}
                    {selected === t.id && (
                      <div className="absolute inset-0 bg-primary-500/10 flex items-center justify-center">
                        <Check size={12} className="bg-primary-600 text-white rounded-full p-0.5" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Icon size={12} className={cn(selected === t.id ? "text-primary-500" : "text-slate-400")} />
                      <h4 className={cn(
                        "font-black text-[11px] uppercase tracking-tight transition-colors",
                        selected === t.id ? "text-primary-600 dark:text-primary-400" : "text-slate-800 dark:text-slate-100"
                      )}>
                        {t.name}
                      </h4>
                    </div>
                    <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 leading-tight line-clamp-2">
                      {t.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
