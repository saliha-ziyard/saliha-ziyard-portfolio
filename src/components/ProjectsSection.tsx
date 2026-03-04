import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, BarChart3, Sparkles, Terminal } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  bullets?: string[];
  impact?: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured: boolean;
  image?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'MDII Desktop & Web Platform',
    category: 'FULL STACK · ENTERPRISE',
    description:
      'Multi-Dimensional Digital Inclusiveness Index platform for CGIAR-IWMI — a dual-panel system enabling field assessment of digital inclusivity across global agricultural and water management initiatives.',
    bullets: [
      'Designed and built two interconnected panels: a Coordinator Panel for evaluation tracking, progress monitoring, follow-up workflows and translation management; and an Admin Panel for user management, task scheduling, real-time monitoring and system auditability.',
      'Integrated KoboToolbox APIs, Microsoft Power Automate flows and Azure backend services to automate workflows, manage field data collection and ensure centralised data control across the platform.',
      'Developed an offline-capable Electron desktop application enabling evaluators to conduct structured MDII field assessments in low-connectivity agricultural regions without requiring continuous internet access.',
    ],
    technologies: ['Electron', 'React', 'TypeScript', 'Tailwind CSS', 'Azure', 'Power Automate', 'KoboToolbox API', 'Blob Storage'],
    live: 'https://mdii.iwmi.org/', 
    featured: true,
    image: '/images/mdiiImg.png',
  },
  {
    id: 2,
    title: 'Swastha · Healthcare Management System',
    category: 'ENTERPRISE · GOVERNMENT',
    description:
      "Digitised supply chain management system for Sri Lanka's Ministry of Health — the central body responsible for procuring, storing and distributing pharmaceuticals and medical equipment to over 1,200 government healthcare institutions nationwide.",
    bullets: [
      'Built responsive React and Material-UI frontend supporting the end-to-end medical supply chain: from central MSD procurement through 26 Regional Medical Supplies Divisions (RMSDs) down to hospitals across the country.',
      'Integrated RESTful APIs across system layers to ensure accurate, real-time data flow through approval stages, sub-divisions and healthcare institutions.',
      'Collaborated closely with senior engineers to ensure interface usability and consistency across different user roles within the supply chain hierarchy.',
    ],
    technologies: ['React', 'Material-UI', 'Microservices', 'PostgreSQL', 'Keycloak', 'RESTful API'],
    live: 'https://swastha.health.gov.lk/', 
    featured: true,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
  },
  {
    id: 3,
    title: 'GearUp · Futsal Booking Platform',
    category: 'FULL STACK · E-COMMERCE',
    description:
      'Feature-rich futsal court booking platform with an intuitive booking interface, integrated payment processing, Google authentication and comprehensive court management. Streamlined sports facility booking with Stripe payment integration and Google OAuth 2.0.',
    // impact: '..',
    technologies: ['React', 'TypeScript', 'Express.js', 'MongoDB', 'Redux', 'Tailwind', 'Stripe', 'Google OAuth 2.0', 'Docker', 'Figma'],
    live: 'https://gearup.lk/', 
    featured: true,
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80',
  },
  {
    id: 4,
    title: 'SmartEdu · Learning Management System',
    category: 'EDUCATION TECHNOLOGY',
    description:
      'Comprehensive LMS with role-based dashboards, course management, student enrollment and progress tracking — enhancing education accessibility in a Dockerised environment.',
    technologies: ['React', 'TypeScript', 'Express.js', 'MongoDB', 'Redux', 'Docker', 'EmailJS', 'JWT'],
    live: 'https://smartedu.global/',
    featured: false,
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
  },
  {
    id: 5,
    title: 'UmmahConnect · Islamic Education Platform',
    category: 'WEB APPLICATION',
    description:
      'Full-stack Islamic education platform connecting learners with experts globally, featuring user dashboards, course management and secure payment processing — serving thousands worldwide.',
    impact: 'Serving thousands of users globally with integrated Stripe payments and JWT-secured authentication.',
    technologies: ['React', 'TypeScript', 'Express.js', 'MongoDB', 'Redux', 'Tailwind', 'Stripe', 'EmailJS', 'JWT'],
    live: 'https://ummahconnect.online/', 
    featured: false,
    image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?w=800&q=80',
  },
  {
    id: 6,
    title: 'mitoMatch · Genomic Analysis Tool',
    category: 'MACHINE LEARNING · RESEARCH',
    description:
      'Machine Learning genomic web tool for Mitochondrial DNA (mtDNA) analysis — identifies ethnicity and geographic origins from genetic data using BioPython, Pandas, NumPy and SHAP for model interpretability.',
    impact: 'Research paper under review at RECOMB 2026 — the 30th Annual International Conference on Research in Computational Molecular Biology.',
    technologies: ['React', 'Flask', 'MongoDB', 'BioPython', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SHAP'],
    live: 'https://mito-match.vercel.app/', 
    featured: false,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
  },
  {
    id: 7,
    title: 'VPA Electronic Management System',
    category: 'UNIVERSITY · GOVERNMENT',
    description:
      'Institution-wide operations platform for the University of VAPA covering resource booking, administrative workflows and day-to-day services for students, lecturers and staff.',
    technologies: ['React', 'Material-UI', 'PostgreSQL', 'RESTful API'],
    // live: '#', // 🔁 update
    featured: false,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
  },
  {
    id: 8,
    title: 'militTransfer · Secure Data Transfer',
    category: 'MOBILE APP · SECURITY',
    description:
      'Encrypted mobile application for secure confidential data transfer between military bases using LSB image steganography technique.',
    technologies: ['Flutter', 'Firebase', 'Image Steganography'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
  },
];

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32 px-6 bg-[#030712] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 blur-[120px] rounded-full" />
      </div>

      <div ref={containerRef} className="container mx-auto max-w-7xl relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20 sm:mb-32"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Sparkles className="text-blue-400" size={14} />
            <span className="text-xs font-mono text-blue-300 uppercase tracking-widest">Selected Works</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Proof of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Concept</span>
          </h2>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-40 mb-40">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-start`}
            >
              {/* Image */}
              <div className="w-full lg:w-3/5 group relative">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl transition-all duration-500 group-hover:border-blue-500/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-black/80 backdrop-blur-md text-white text-[10px] rounded-lg border border-white/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-[2rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="w-full lg:w-2/5 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="text-blue-400 font-mono text-sm tracking-tighter">0{index + 1}</span>
                  <div className="h-[1px] w-12 bg-blue-500/30" />
                  <span className="text-slate-400 text-xs uppercase font-bold tracking-widest">{project.category}</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h3>

                <p className="text-slate-400 leading-relaxed text-base">{project.description}</p>

                {project.bullets && (
                  <ul className="space-y-3 pt-1">
                    {project.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400/60 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {project.impact && (
                  <div className="bg-slate-900/50 border border-blue-500/20 rounded-xl p-5 relative overflow-hidden">
                    <div className="flex items-start gap-3 relative z-10">
                      <BarChart3 className="text-blue-400 mt-1 shrink-0" size={18} />
                      <p className="text-sm text-slate-300 italic leading-relaxed">
                        <span className="text-blue-400 font-bold not-italic uppercase text-[10px] block mb-1">Key Result:</span>
                        {project.impact}
                      </p>
                    </div>
                    <div className="absolute top-0 right-0 p-2 opacity-10">
                      <Terminal size={40} className="text-blue-400" />
                    </div>
                  </div>
                )}

                {/* Live link button */}
                <div className="flex gap-4 pt-2">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-blue-400 transition-colors"
                    >
                      Visit Site <Globe size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects Grid */}
        <div className="mt-20 pt-20 border-t border-white/5">
          <h3 className="text-2xl font-bold text-white mb-12 flex items-center gap-4">
            <Terminal className="text-blue-500" />
            Additional Architecture
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -10 }}
                className="bg-slate-900/40 border border-white/10 p-8 rounded-2xl hover:bg-slate-900 hover:border-blue-500/40 transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                    <Terminal size={24} />
                  </div>
                  {/* Globe icon link */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-blue-400 transition-colors"
                      title="Visit site"
                    >
                      <Globe size={18} />
                    </a>
                  )}
                </div>

                <div className="mb-1">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{project.category}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-[10px] font-mono text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;