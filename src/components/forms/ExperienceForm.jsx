import React from 'react';
import { Input, TextArea } from '../ui/Input';
import { Button } from '../ui/Button';
import { Trash2, Plus, Briefcase } from 'lucide-react';

export const ExperienceForm = ({ items, updateItem, removeItem, addItem }) => {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div key={item.id} className="p-4 border border-slate-100 dark:border-slate-800 rounded-xl relative group animate-in slide-in-from-left-4 duration-300">
          <button
            onClick={() => removeItem('experience', item.id)}
            className="absolute -top-2 -right-2 p-1.5 bg-white dark:bg-slate-800 text-red-500 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Trash2 size={16} />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input
              label="Job Role"
              value={item.role}
              onChange={(e) => updateItem('experience', item.id, 'role', e.target.value)}
              placeholder="e.g. Full Stack Developer"
            />
            <Input
              label="Company"
              value={item.company}
              onChange={(e) => updateItem('experience', item.id, 'company', e.target.value)}
              placeholder="e.g. Google Inc."
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input
              label="Duration"
              value={item.duration}
              onChange={(e) => updateItem('experience', item.id, 'duration', e.target.value)}
              placeholder="e.g. Jan 2022 - Present"
            />
            <Input
              label="Location"
              value={item.location || ''}
              onChange={(e) => updateItem('experience', item.id, 'location', e.target.value)}
              placeholder="e.g. Mountain View, CA"
            />
          </div>
          
          <TextArea
            label="Description"
            value={item.description}
            onChange={(e) => updateItem('experience', item.id, 'description', e.target.value)}
            placeholder="Describe your responsibilities and achievements..."
          />
        </div>
      ))}
      
      <Button 
        onClick={() => addItem('experience')}
        variant="secondary" 
        className="w-full border-dashed border-2 py-4 hover:border-primary-500 hover:text-primary-600"
      >
        <Plus size={18} />
        Add Experience
      </Button>
    </div>
  );
};
