import { useState } from 'react';

export const getTeacherData = () => ({
  personal: {
    fullName: 'Dr. Sunita Sharma',
    email: 'sunita.sharma@edu.in',
    phone: '+91 91234 56789',
    address: 'New Delhi, India',
    title: 'Senior Mathematics Educator',
    summary: 'Dedicated Educator with 15+ years of experience in secondary and higher secondary education. Committed to fostering a positive learning environment and implementing innovative teaching methodologies. Specialized in Vedic Mathematics and Competitive Exam preparation.',
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=400',
  },
  skills: ['Mathematics', 'Curriculum Development', 'Student Mentoring', 'Vedic Maths', 'E-Learning Tools', 'Classroom Management', 'Educational Leadership'],
  education: [
    { id: '1', degree: 'Ph.D. in Mathematics', school: 'University of Delhi', year: '2008 - 2012', description: 'Thesis on "Advanced Computational Methods in Algebra".' },
    { id: '2', degree: 'Master of Education (M.Ed.)', school: 'Central Institute of Education', year: '2005 - 2007', description: 'Specialized in Educational Technology and Pedagogy.' }
  ],
  experience: [
    { id: '1', company: 'Modern School, Barakhamba Road', role: 'Head of Mathematics Department', duration: '2015 - Present', description: 'Leading a department of 15 teachers. Designed a new integrated curriculum for senior secondary students. achieved 100% pass rate in board exams for 5 consecutive years.' },
    { id: '2', company: 'Kendriya Vidyalaya', role: 'PGT (Mathematics)', duration: '2008 - 2015', description: 'Taught senior secondary classes. Coordinated national level math olympiads. Awarded "Best Teacher" in 2012.' }
  ],
});

export const getInitialData = () => ({
  personal: {
    fullName: 'Aryan Kapoor',
    email: 'aryan.kapoor@example.com',
    phone: '+91 98765 43210',
    address: 'Mumbai, Maharashtra, India',
    title: 'Senior Full Stack Developer',
    summary: 'Passionate Software Engineer with 8+ years of experience in building scalable web applications. Expert in React, Node.js, and Cloud Architecture. Proven track record of leading development teams and delivering high-impact products optimized for performance and user experience.',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=400',
  },
  skills: ['React.js', 'Node.js', 'TypeScript', 'AWS (Lambda, S3)', 'Docker', 'MongoDB', 'Tailwind CSS', 'System Design'],
  education: [
    { id: '1', degree: 'Bachelor of Technology in Computer Science', school: 'Delhi Technological University', year: '2012 - 2016', description: 'Graduated with Honors. Specialized in Data Structures and Algorithms.' }
  ],
  experience: [
    { id: '1', company: 'Tech Solutions Pvt Ltd', role: 'Lead Full Stack Developer', duration: '2020 - Present', description: 'Leading a team of 10 developers to build and maintain high-traffic e-commerce platforms. Improved site performance by 40% through code optimization and better caching strategies.' },
    { id: '2', company: 'Innovate Systems', role: 'Software Engineer', duration: '2016 - 2020', description: 'Developed core features for a SaaS productivity tool using React and Node.js. Collaborated with UI/UX designers to implement pixel-perfect, responsive interfaces.' }
  ],
});

export const getEmptyData = () => ({
  personal: {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    title: '',
    summary: '',
    profileImage: '',
  },
  skills: [],
  education: [],
  experience: [],
});

export const useResumeData = () => {
  const [data, setData] = useState(getInitialData());

  const resetData = () => {
    setData(getInitialData());
  };

  const clearData = () => {
    setData(getEmptyData());
  };

  const updatePersonal = (field, value) => {
    setData(prev => ({
      ...prev,
      personal: { ...prev.personal, [field]: value }
    }));
  };

  const addSkill = (skill) => {
    if (!data.skills.includes(skill)) {
      setData(prev => ({ ...prev, skills: [...prev.skills, skill] }));
    }
  };

  const removeSkill = (skillToRemove) => {
    setData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const addItem = (section) => {
    const newItem = section === 'education' 
      ? { id: Date.now().toString(), degree: '', school: '', year: '', description: '' }
      : { id: Date.now().toString(), company: '', role: '', duration: '', description: '' };
    
    setData(prev => ({
      ...prev,
      [section]: [...prev[section], newItem]
    }));
  };

  const updateItem = (section, id, field, value) => {
    setData(prev => ({
      ...prev,
      [section]: prev[section].map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    }));
  };

  const removeItem = (section, id) => {
    setData(prev => ({
      ...prev,
      [section]: prev[section].filter(item => item.id !== id)
    }));
  };


  const loadTeacherData = () => {
    setData(getTeacherData());
  };

  return {
    data,
    updatePersonal,
    addSkill,
    removeSkill,
    addItem,
    updateItem,
    removeItem,
    resetData,
    clearData,
    loadTeacherData,
    setData,
  };
};
