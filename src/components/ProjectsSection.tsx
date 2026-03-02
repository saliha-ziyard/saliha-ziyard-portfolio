import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, BarChart3, Sparkles, Terminal } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  impact?: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured: boolean;
  image?: string; // Screenshot/mockup of the project
}

const projects: Project[] = [
  {
    id: 1,
    title: 'MDII Desktop & Web Platform',
    category: 'FULL STACK · ENTERPRISE',
    description: 'Multi-Dimensional Digital Inclusiveness Index platform for CGIAR-IWMI, enabling field assessment of digital inclusivity in low-connectivity agricultural regions across global water management initiatives.',
    impact: 'Deployed across multiple countries for assessing digital inclusion in agricultural tools. Reduced manual workload and turnaround time through automated report generation, enhancing data management for global initiatives.',
    technologies: ['Electron', 'React', 'TypeScript', 'Tailwind CSS', 'Azure', 'Power Automate', 'KoboToolbox API', 'Blob Storage'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80', // Replace with actual screenshot
  },
  {
    id: 2,
    title: 'Swastha · Healthcare Management System',
    category: 'ENTERPRISE APPLICATION',
    description: 'Responsive healthcare stock management system serving Sri Lanka\'s Health Ministry across 1,000+ hospitals nationwide, built with microservices architecture.',
    impact: 'Streamlined medical supply chain management for over 1,000 hospitals, improving inventory tracking and distribution efficiency across the national healthcare system.',
    technologies: ['React', 'Material-UI', 'Microservices', 'PostgreSQL', 'Keycloak', 'RESTful API'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
  },
  {
    id: 3,
    title: 'GearUp · E-Commerce Platform',
    category: 'FULL STACK · E-COMMERCE',
    description: 'Feature-rich futsal booking platform with intuitive booking interface, integrated payment processing, and comprehensive court management system.',
    impact: 'Streamlined sports facility booking process with Stripe payment integration, Google authentication, and real-time availability tracking.',
    technologies: ['React', 'TypeScript', 'Express.js', 'MongoDB', 'Redux', 'Tailwind', 'Stripe', 'Google OAuth 2.0', 'Docker', 'Figma'],
    github: '#',
    featured: true,
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80',
  },
  {
    id: 4,
    title: 'mitoMatch · Genomic Analysis Tool',
    category: 'MACHINE LEARNING · RESEARCH',
    description: 'Web-based bioinformatics application for mitochondrial DNA analysis, identifying ethnicity and geographic origins from mtDNA samples using machine learning models.',
    impact: 'Research paper under review at RECOMB 2026. Provides researchers with efficient genomic analysis capabilities for population genetics studies.',
    technologies: ['React', 'Flask', 'MongoDB', 'BioPython', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SHAP'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
  },
  {
    id: 5,
    title: 'SmartEdu · Learning Management System',
    category: 'EDUCATION TECHNOLOGY',
    description: 'Comprehensive LMS with role-based dashboards, course management, student enrollment, and progress tracking for enhanced educational accessibility.',
    technologies: ['React', 'TypeScript', 'Express.js', 'MongoDB', 'Redux', 'Docker', 'EmailJS', 'JWT'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
  },
  {
    id: 6,
    title: 'IslamicDreams · Consultation Platform',
    category: 'WEB APPLICATION',
    description: 'Real-time consultation platform connecting 1,600+ users with dream interpreters through chat and video calls, featuring secure payment processing.',
    impact: 'Serving 1,600+ active users with integrated Stripe payments and secure JWT authentication.',
    technologies: ['React', 'TypeScript', 'Express.js', 'MongoDB', 'Redux', 'Tailwind', 'Stripe', 'EmailJS'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?w=800&q=80',
  },
  {
    id: 7,
    title: 'VPA Electronic Management System',
    category: 'UNIVERSITY SYSTEM',
    description: 'Comprehensive EMS frontend for University of VAPA, streamlining operations for lecturers, students, and administrative staff.',
    technologies: ['React', 'Material-UI', 'PostgreSQL', 'RESTful API'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
  },
  {
    id: 8,
    title: 'militTransfer · Secure Data Transfer',
    category: 'MOBILE APP · SECURITY',
    description: 'Encrypted mobile application for secure confidential data transfer between military bases using LSB image steganography technique.',
    technologies: ['Kotlin', 'Firebase', 'SQLite', 'Image Steganography'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
  },
];

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32 px-6 bg-[#030712] relative overflow-hidden">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 blur-[120px] rounded-full" />
      </div>

      <div ref={containerRef} className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header - Centered for better impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-32"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Sparkles className="text-blue-400" size={14} />
            <span className="text-xs font-mono text-blue-300 uppercase tracking-widest">Selected Works</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Proof of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Concept</span>
          </h2>
        </motion.div>

        {/* Featured Projects - Alternating Side-by-Side Layout */}
        <div className="space-y-40 mb-40">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-3/5 group relative">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl transition-all duration-500 group-hover:border-blue-500/50">
                   {/* Clean Image - No dark overlay by default */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Floating Tech Stack Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.technologies.slice(0, 4).map(tech => (
                        <span key={tech} className="px-3 py-1 bg-black/80 backdrop-blur-md text-white text-[10px] rounded-lg border border-white/20">
                            {tech}
                        </span>
                    ))}
                  </div>
                </div>
                {/* Decorative Glow */}
                <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-[2rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-2/5 space-y-6">
                <div className="flex items-center gap-3">
                    <span className="text-blue-400 font-mono text-sm tracking-tighter">0{index + 1}</span>
                    <div className="h-[1px] w-12 bg-blue-500/30" />
                    <span className="text-slate-400 text-xs uppercase font-bold tracking-widest">{project.category}</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-relaxed text-lg">
                  {project.description}
                </p>

                {project.impact && (
                  <div className="bg-slate-900/50 border border-blue-500/20 rounded-xl p-5 relative overflow-hidden group/impact">
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

                <div className="flex gap-4 pt-4">
                  {project.github && (
                    <a href={project.github} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-blue-400 transition-colors">
                      View Code <Github size={16} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-800 text-white font-semibold text-sm hover:bg-slate-700 transition-colors">
                      Live Demo <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary Grid for "More Projects" */}
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
                            <div className="flex gap-3 text-slate-500">
                                {project.github && <Github size={18} className="hover:text-white cursor-pointer" />}
                                {project.live && <ExternalLink size={18} className="hover:text-white cursor-pointer" />}
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400">{project.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.technologies.slice(0, 3).map(tech => (
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