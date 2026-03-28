import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { X, Plus } from 'lucide-react';

export const SkillsForm = ({ skills, addSkill, removeSkill }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      const newSkills = inputValue.split(',').map(s => s.trim()).filter(s => s !== '');
      newSkills.forEach(s => addSkill(s));
      setInputValue('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add skills (e.g. React, Node.js) - separate with comma"
          className="flex-1"
        />
        <Button onClick={handleAdd} type="button" size="md">
          <Plus size={18} />
          Add
        </Button>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full border border-primary-100 dark:border-primary-800 animate-in zoom-in duration-200"
          >
            {skill}
            <button 
              onClick={() => removeSkill(skill)}
              className="hover:text-primary-900 dark:hover:text-primary-100 transition-colors"
            >
              <X size={14} />
            </button>
          </span>
        ))}
        {skills.length === 0 && (
          <p className="text-sm text-slate-400 italic">No skills added yet.</p>
        )}
      </div>
    </div>
  );
};
