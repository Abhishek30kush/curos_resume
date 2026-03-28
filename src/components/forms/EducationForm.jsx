import React from 'react';
import { Input, TextArea } from '../ui/Input';
import { Button } from '../ui/Button';
import { Trash2, Plus, GraduationCap } from 'lucide-react';

export const EducationForm = ({ items, updateItem, removeItem, addItem }) => {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div key={item.id} className="p-4 border border-slate-100 dark:border-slate-800 rounded-xl relative group animate-in slide-in-from-left-4 duration-300">
          <button
            onClick={() => removeItem('education', item.id)}
            className="absolute -top-2 -right-2 p-1.5 bg-white dark:bg-slate-800 text-red-500 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Trash2 size={16} />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input
              label="Degree / Course"
              value={item.degree}
              onChange={(e) => updateItem('education', item.id, 'degree', e.target.value)}
              placeholder="e.g. Bachelor of Science in Computer Science"
            />
            <Input
              label="School / University"
              value={item.school}
              onChange={(e) => updateItem('education', item.id, 'school', e.target.value)}
              placeholder="e.g. Stanford University"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input
              label="Year / Duration"
              value={item.year}
              onChange={(e) => updateItem('education', item.id, 'year', e.target.value)}
              placeholder="e.g. 2018 - 2022"
            />
            <Input
              label="Location"
              value={item.location || ''}
              onChange={(e) => updateItem('education', item.id, 'location', e.target.value)}
              placeholder="e.g. California, USA"
            />
          </div>
          
          <TextArea
            label="Description (Optional)"
            value={item.description}
            onChange={(e) => updateItem('education', item.id, 'description', e.target.value)}
            placeholder="Key achievements, GPA, etc."
          />
        </div>
      ))}
      
      <Button 
        onClick={() => addItem('education')}
        variant="secondary" 
        className="w-full border-dashed border-2 py-4 hover:border-primary-500 hover:text-primary-600"
      >
        <Plus size={18} />
        Add Education
      </Button>
    </div>
  );
};
