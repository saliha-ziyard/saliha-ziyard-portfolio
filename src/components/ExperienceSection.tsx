import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  technologies: string[];
}

const experiences: Experience[] = [
  {
    period: 'Dec 2025 — Present',
    role: 'Consultant Software Engineer',
    company: 'CGIAR · IWMI HQ',
    location: 'Sri Lanka',
    description:
      'Developed offline-capable Electron + React + TypeScript desktop application for field assessments of digital inclusivity in low-connectivity agricultural regions. Built web-based Admin/Coordinator dashboard with real-time progress tracking, integrating KoboToolbox APIs, Azure Blob Storage and Power Automate flows — reducing 80% of manual workload.',
    technologies: ['Electron', 'React', 'TypeScript', 'Azure', 'Power Automate', 'KoboToolBox'],
  },
  {
    period: 'Jul 2025 — Dec 2025',
    role: 'Research Intern – Software Development',
    company: 'CGIAR · IWMI HQ',
    location: 'Sri Lanka',
    description:
      'Contributed to the Multi-Dimensional Digital Inclusiveness Index (MDII) project, building tools for data collection and management in remote agri/water management contexts.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Azure', 'RESTful API'],
  },
  {
    period: 'Aug 2023 — Present',
    role: 'Freelance Software Engineer',
    company: 'Self-employed',
    location: 'Remote',
    description:
      'Shipped multiple full-stack products across EdTech, e-commerce and Islamic education platforms. Key projects include UmmahConnect (2025), SmartEdu LMS (2024), and Gearup futsal booking platform (2023), serving thousands of users globally.',
    technologies: ['React', 'TypeScript', 'Express', 'Redux', 'MongoDB', 'Stripe', 'Docker'],
  },
  {
    period: 'Aug 2023 — Aug 2024',
    role: 'Trainee Software Engineer',
    company: 'Loonslab (Pvt) Ltd',
    location: 'Sri Lanka',
    description:
      'Built responsive React + Material-UI interfaces for Sri Lanka\'s Health Ministry stock/healthcare management system, now deployed across 1,200+ hospitals nationwide. Also developed frontend components for the University of VAPA\'s Electronic Management System.',
    technologies: ['React', 'Material-UI', 'PostgreSQL', 'Keycloak', 'Microservices'],
  },
];

const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="py-8 px-5 sm:px-6 lg:px-8 relative">
      <div ref={containerRef} className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16 text-center md:text-left"
        >
          <span className="font-mono text-xs sm:text-sm tracking-widest uppercase text-white/60">
            Experience
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Where I've <span className="text-outline">worked</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-10 top-3 bottom-3 w-px bg-white/20" />

          <div className="space-y-10 md:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="relative group pl-0 md:pl-24"
              >
                {/* Timeline dot + period */}
                <div className="flex items-center mb-3 md:absolute md:left-0 md:top-1.5 md:mb-0">
                  <div className="hidden md:flex items-center justify-center w-5 h-5 rounded-full border-2 border-white/50 bg-transparent z-10 shrink-0 group-hover:border-white transition-colors">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/60 group-hover:bg-white transition-colors" />
                  </div>
                  <span className="font-mono text-sm text-white/70 md:ml-3 whitespace-nowrap group-hover:text-white/90 transition-colors">
                    {exp.period}
                  </span>
                </div>

                {/* Card */}
              <div className="bg-white/5 border border-white/15 rounded-xl p-6 md:p-7 transition-all duration-300 
                  group-hover:border-white/30 group-hover:bg-white/10 group-hover:shadow-lg 
                  group-hover:shadow-black/20 backdrop-blur-sm md:ml-0">                  
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                        <h3 className="text-lg sm:text-2xl font-semibold text-white inline-flex items-center gap-2">                        {exp.role}
                        {/* <ExternalLink size={16} className="opacity-0 group-hover:opacity-60 transition-opacity text-white/60" /> */}
                      </h3>
                      <p className="text-sm sm:text-base text-white/65 mt-0.5 font-medium">
                        {exp.company} · {exp.location}
                      </p>
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-1">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono bg-white/10 border border-white/20 rounded text-white/80 group-hover:bg-white/15 group-hover:border-white/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-white/75 leading-relaxed text-sm sm:text-base group-hover:text-white/90 transition-colors">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;