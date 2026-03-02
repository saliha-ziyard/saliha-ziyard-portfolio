import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL', 'HTML/CSS'],
  },
  {
    name: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    name: 'DevOps & Tools',
    skills: ['AWS', 'Docker', 'Git', 'CI/CD', 'Linux', 'Kubernetes'],
  },
];

const SkillsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-32 px-6 relative bg-muted/5">
      <div ref={containerRef} className="container mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="font-mono text-sm text-muted-foreground tracking-[0.3em] uppercase">
            Skills
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mt-4">
            Technical
            <br />
            <span className="text-outline">expertise</span>
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * categoryIndex }}
              className="group"
            >
              <div className="border-t border-border/50 pt-6">
                <h3 className="font-mono text-sm text-muted-foreground uppercase tracking-wider mb-6">
                  {category.name}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-foreground hover:text-foreground/70 transition-colors cursor-default text-lg"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expertise areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 border-t border-border/30 pt-12"
        >
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {['Full Stack Development', 'System Architecture', 'API Design', 'Performance Optimization', 'Cloud Infrastructure'].map(
              (area) => (
                <span
                  key={area}
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors cursor-default"
                >
                  {area}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
