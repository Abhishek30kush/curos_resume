import React from 'react';
import { Input, TextArea } from '../ui/Input';
import { User, Mail, Phone, MapPin, Globe, CreditCard } from 'lucide-react';

export const PersonalForm = ({ data, updatePersonal }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updatePersonal(name, value);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Full Name"
          name="fullName"
          value={data.fullName}
          onChange={handleChange}
          placeholder="e.g. John Doe"
          icon={User}
        />
        <Input
          label="Job Title"
          name="title"
          value={data.title}
          onChange={handleChange}
          placeholder="e.g. Senior Software Engineer"
          icon={CreditCard}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Email Address"
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
          placeholder="e.g. john@example.com"
          icon={Mail}
        />
        <Input
          label="Phone Number"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          placeholder="e.g. +1 234 567 890"
          icon={Phone}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Address"
          name="address"
          value={data.address}
          onChange={handleChange}
          placeholder="e.g. New York, USA"
          icon={MapPin}
        />
        <Input
          label="Website / LinkedIn"
          name="website"
          value={data.website || ''}
          onChange={handleChange}
          placeholder="e.g. linkedin.com/in/johndoe"
          icon={Globe}
        />
      </div>
      <TextArea
        label="Professional Summary"
        name="summary"
        value={data.summary}
        onChange={handleChange}
        placeholder="Briefly describe your professional background and key achievements..."
      />
    </div>
  );
};
