import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Redux',
      'Material-UI',
      'Electron',
    ],
  },
  {
    name: 'Backend & Data',
    skills: [
      'Python',
      'Node.js',
      'Next.js',
      'Express.js',
      'Flask',
      'RESTful APIs',
      'PostgreSQL',
      'MongoDB',
      'MySQL',
    ],
  },
  {
    name: 'Cloud & Tools',
    skills: [
      'Azure (transferable to AWS)',
      'Docker',
      'Git',
      'Postman',
      'Microsoft Power Automate',
      'Firebase',
    ],
  },
  {
    name: 'Data & ML',
    skills: [
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Scikit-learn',
      'TensorFlow / Keras',
      'PyTorch',
    ],
  },
  {
    name: 'Other',
    skills: [
      'Figma',
      'JWT',
      'API Integrations',
    ],
  },
];

const SkillsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-6 px-6 relative bg-muted/5">
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
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mt-4">
            Technical {""}
            <span className="text-outline">expertise</span>
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * categoryIndex }}
              className="group"
            >
              <div className="">
                <h3 className="font-mono text-sm text-muted-foreground uppercase tracking-wider mb-6">
                  {category.name}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-foreground hover:text-foreground/70 transition-colors cursor-default text-base sm:text-lg"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
