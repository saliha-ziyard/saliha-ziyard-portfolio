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
    period: '2023 — Present',
    role: 'Software Engineering Consultant',
    company: 'IWMI',
    location: 'Sri Lanka',
    description:
      'Architecting and developing scalable solutions for water resource management systems that impact millions globally.',
    technologies: ['React', 'Python', 'AWS', 'PostgreSQL'],
  },
  {
    period: '2022 — 2023',
    role: 'Software Engineer (Industrial Placement)',
    company: 'Tech Company',
    location: 'United Kingdom',
    description:
      'Full-stack development during placement year, contributing to enterprise applications and microservices architecture.',
    technologies: ['TypeScript', 'Node.js', 'Docker', 'MongoDB'],
  },
  // ← add more entries here if needed
];

const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="py-8 px-5 sm:px-6 lg:px-8 relative">
      <div ref={containerRef} className="max-w-5xl mx-auto">
        {/* Header – smaller and tighter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16 text-center md:text-left"
        >
          <span className="font-mono text-xs sm:text-sm text-muted-foreground tracking-widest uppercase">
            Experience
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Where I've <span className="text-outline">worked</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (hidden on mobile) */}
          <div className="hidden md:block absolute left-10 top-3 bottom-3 w-px bg-border/60" />

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
                <div className="flex items-center md:absolute md:left-0 md:top-1.5">
                  <div className="hidden md:flex items-center justify-center w-5 h-5 rounded-full border-2 border-primary/60 bg-background z-10 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary/70 group-hover:bg-primary transition-colors" />
                  </div>

                  <span className="font-mono text-sm text-muted-foreground md:ml-3 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                {/* Card-like content */}
                <div className="bg-muted/5 border border-border/40 rounded-xl p-6 md:p-7 transition-all duration-300 group-hover:border-border/70 group-hover:bg-muted/10 group-hover:shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors inline-flex items-center gap-2">
                        {exp.role}
                        <ExternalLink size={16} className="opacity-0 group-hover:opacity-70 transition-opacity" />
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground mt-0.5">
                        {exp.company} · {exp.location}
                      </p>
                    </div>

                    {/* Technologies – smaller & right-aligned on desktop */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-1 sm:justify-end">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono bg-background/50 border border-border/50 rounded text-muted-foreground/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
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