import React, { useRef } from 'react';
import { Camera, Trash2, User } from 'lucide-react';
import { Button } from '../ui/Button';

export const ImageUpload = ({ image, onChange }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("Image size should be less than 2MB");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 mb-8">
      <div className="relative group">
        <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-dashed border-slate-200 dark:border-slate-800 flex items-center justify-center bg-slate-50 dark:bg-slate-800/50 group-hover:border-primary-500 transition-all">
          {image ? (
            <img src={image} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <User size={48} className="text-slate-300 dark:text-slate-600" />
          )}
        </div>
        
        <button
          onClick={() => fileInputRef.current?.click()}
          className="absolute -bottom-2 -right-2 p-2 bg-primary-600 text-white rounded-xl shadow-lg hover:bg-primary-700 transition-all active:scale-90"
          type="button"
        >
          <Camera size={18} />
        </button>
        
        {image && (
          <button
            onClick={() => onChange('')}
            className="absolute -top-2 -left-2 p-2 bg-white dark:bg-slate-800 text-red-500 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 hover:bg-red-50 transition-all active:scale-90"
            type="button"
          >
            <Trash2 size={18} />
          </button>
        )}
      </div>
      
      <div className="text-center">
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Profile Image</p>
        <p className="text-xs text-slate-400">JPG, PNG or GIF (Max 2MB)</p>
      </div>
      
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
};
