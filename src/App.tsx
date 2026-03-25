import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, Phone, MapPin, Calendar, User, Briefcase, 
  GraduationCap, Monitor, Cpu, Youtube, Facebook, 
  Instagram, Music2
} from 'lucide-react';

export default function App() {
  const dob = '15/04/2005';
  
  const age = useMemo(() => {
    const [day, month, year] = dob.split('/');
    const birthDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    const today = new Date();
    let currentAge = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      currentAge--;
    }
    return currentAge;
  }, [dob]);

  const socialLinks = [
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/@MrMutahir786' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/M.Mutahir.Aurangzaib' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/MrMutahir786' },
    { name: 'TikTok', icon: Music2, url: 'https://tiktok.com/@Mr.Mutahir786' },
  ];

  const experiences = [
    {
      title: 'Pharmacy Salesman & System Operator',
      company: 'Al Shoruq Care Pharmacy',
      duration: '2 Years',
      description: 'Night duty operations, sales, and system management.'
    },
    {
      title: 'Cashier & Medicine Purchaser',
      company: 'Nadeem Medical Store',
      duration: '3 Years',
      description: 'Managed cash transactions and procured medicines.'
    },
    {
      title: 'Business Partner',
      company: 'Online Garments Shop',
      duration: 'Ongoing',
      description: 'Co-managing an online retail business for garments.'
    },
    {
      title: 'Electrician',
      company: 'Freelance / Local',
      duration: '3 Years',
      description: 'Provided electrical repair and installation services.'
    }
  ];

  const computerSkills = [
    'Basic Computer Course',
    'Graphics Designing',
    'Basic Video Editing',
    'Computer Repairing'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20 pb-12">
      <div className="bg-noise" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 md:py-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {/* Profile Hero - Spans 2x2 */}
          <motion.div variants={itemVariants} className="lg:col-span-2 lg:row-span-2 relative rounded-3xl overflow-hidden group min-h-[400px] md:min-h-[500px] border border-neutral-800/50">
            <img 
              src="https://storage.googleapis.com/generativeai-downloads/images/aistudio/952136e9-3d1f-402a-9e73-b32813098379.jpg" 
              alt="M Mutahir Zaib" 
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] font-semibold uppercase tracking-widest text-white">Available for work</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif mb-3 text-white tracking-tight leading-none">M Mutahir Zaib</h1>
              <p className="text-lg md:text-xl text-neutral-300 font-light tracking-wide">AI Illusionist & Creative Professional</p>
            </div>
          </motion.div>

          {/* Personal Details - Spans 2x1 */}
          <motion.div variants={itemVariants} className="lg:col-span-2 bg-neutral-900/30 border border-neutral-800/50 rounded-3xl p-8 flex flex-col justify-center backdrop-blur-sm hover:bg-neutral-900/50 transition-colors duration-500">
            <h2 className="text-2xl font-serif mb-6 text-neutral-200">Personal Details</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500 mb-1.5 flex items-center gap-2"><User size={12}/> Father's Name</p>
                <p className="text-base text-neutral-200">Aurang Zaib</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500 mb-1.5 flex items-center gap-2"><Calendar size={12}/> Date of Birth</p>
                <p className="text-base text-neutral-200">{dob} <span className="text-neutral-500 text-sm">({age} y/o)</span></p>
              </div>
              <div className="col-span-2">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500 mb-1.5 flex items-center gap-2"><MapPin size={12}/> Permanent Address</p>
                <p className="text-base text-neutral-200 leading-relaxed">People's Town St # 8 house # P467 Samundri Road Abdullah Bridge Faisalabad</p>
              </div>
            </div>
          </motion.div>

          {/* Contact - Spans 1x1 */}
          <motion.div variants={itemVariants} className="lg:col-span-1 bg-neutral-900/30 border border-neutral-800/50 rounded-3xl p-6 flex flex-col justify-center gap-5 backdrop-blur-sm hover:bg-neutral-900/50 transition-colors duration-500">
            <a href="mailto:mirzamutahirzaib@gmail.com" className="flex items-center gap-4 text-neutral-400 hover:text-white transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-neutral-800/50 border border-neutral-700/50 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-all duration-300"><Mail size={18}/></div>
              <div className="overflow-hidden">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500 mb-0.5">Email</p>
                <p className="text-sm truncate">mirzamutahirzaib@gmail.com</p>
              </div>
            </a>
            <a href="tel:03252870990" className="flex items-center gap-4 text-neutral-400 hover:text-white transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-neutral-800/50 border border-neutral-700/50 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-all duration-300"><Phone size={18}/></div>
              <div className="overflow-hidden">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500 mb-0.5">Phone</p>
                <p className="text-sm truncate">03252870990</p>
              </div>
            </a>
          </motion.div>

          {/* Socials - Spans 1x1 */}
          <motion.div variants={itemVariants} className="lg:col-span-1 grid grid-cols-2 gap-4">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a 
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-900/30 border border-neutral-800/50 rounded-3xl flex flex-col items-center justify-center aspect-square hover:bg-white hover:text-black transition-all duration-500 group backdrop-blur-sm"
                >
                  <Icon className="w-6 h-6 mb-2 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                  <span className="text-[10px] font-semibold uppercase tracking-widest opacity-50 group-hover:opacity-100">{social.name}</span>
                </a>
              );
            })}
          </motion.div>

          {/* Work Experience - Spans 2x2 */}
          <motion.div variants={itemVariants} className="lg:col-span-2 lg:row-span-2 bg-neutral-900/30 border border-neutral-800/50 rounded-3xl p-8 backdrop-blur-sm hover:bg-neutral-900/50 transition-colors duration-500">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-neutral-400" size={20} />
              <h2 className="text-2xl font-serif text-neutral-200">Work Experience</h2>
            </div>
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-6 border-l border-neutral-800/80 group">
                  <div className="absolute w-3 h-3 bg-black border-2 border-neutral-600 rounded-full -left-[6.5px] top-1.5 group-hover:border-white group-hover:bg-white transition-colors duration-300" />
                  <h3 className="text-lg font-medium text-neutral-200">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-500 mt-1.5 mb-3">
                    <span className="text-neutral-300">{exp.company}</span>
                    <span>•</span>
                    <span>{exp.duration}</span>
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed font-light">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* AI Skills - Spans 2x1 */}
          <motion.div variants={itemVariants} className="lg:col-span-2 bg-neutral-900/30 border border-neutral-800/50 rounded-3xl p-8 backdrop-blur-sm hover:bg-neutral-900/50 transition-colors duration-500 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-5">
              <Cpu className="text-neutral-400" size={20} />
              <h2 className="text-2xl font-serif text-neutral-200">AI & Creative Skills</h2>
            </div>
            <p className="text-neutral-400 leading-relaxed text-base font-light">
              Specializing in creating <strong className="text-white font-medium">unique, illusion-based, and highly creative video content</strong> using advanced AI tools. Constantly exploring new AI models to push the boundaries of digital art and content creation.
            </p>
          </motion.div>

          {/* Education & Computer Skills - Spans 2x1 */}
          <motion.div variants={itemVariants} className="lg:col-span-2 bg-neutral-900/30 border border-neutral-800/50 rounded-3xl p-8 flex flex-col justify-between backdrop-blur-sm hover:bg-neutral-900/50 transition-colors duration-500">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-5">
                <Monitor className="text-neutral-400" size={20} />
                <h2 className="text-2xl font-serif text-neutral-200">Computer Skills</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {computerSkills.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-full border border-neutral-800/80 bg-black/50 text-neutral-300 text-[11px] font-semibold uppercase tracking-wider hover:border-neutral-500 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="pt-6 border-t border-neutral-800/50">
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap className="text-neutral-400" size={20} />
                <h2 className="text-xl font-serif text-neutral-200">Education</h2>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-300 text-base font-light">Matriculation</span>
                <span className="px-3 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full">Pass</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 text-center text-neutral-600 text-[11px] font-semibold uppercase tracking-widest"
        >
          <p>© {new Date().getFullYear()} M Mutahir Zaib. All rights reserved.</p>
        </motion.footer>
      </div>
    </div>
  );
}
