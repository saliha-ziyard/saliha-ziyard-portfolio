import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, FlaskConical, ExternalLink } from 'lucide-react';

const EducationSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-24 px-5 sm:px-6 lg:px-8 relative">
      <div ref={containerRef} className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16 text-center md:text-left"
        >
          <span className="font-mono text-xs sm:text-sm tracking-widest uppercase text-white/60">
            Education
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Academic <span className="text-outline">foundation</span>
          </h2>
        </motion.div>

        <div className="space-y-6">

          {/* Degree card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="group bg-white/5 border border-white/15 rounded-xl p-6 md:p-8 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-black/20 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">

                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/15 transition-colors">
                    <GraduationCap className="text-white/80" size={22} />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-white/55">2021 — 2025</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    BSc (Hons) Computer Science
                    <span className="text-white/60 font-normal text-sm sm:text-base block sm:inline">
                      {' '}with Industrial Experience
                    </span>
                  </h3>
                    <p className="text-white/65 text-sm mt-1">
                      Informatics Institute of Technology · University of Westminster, UK
                    </p>
                     <p className="text-white/65 text-sm mt-1">
                      Fiesr Class Honours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* mitoMatch research card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.28 }}
          >
            <div className="group bg-white/5 border border-white/15 rounded-xl p-6 md:p-8 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-black/20 backdrop-blur-sm">
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/15 transition-colors">
                  <FlaskConical className="text-white/80" size={20} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <div>
                      <span className="font-mono text-xs text-white/55">Academic Research Project · 2024</span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 inline-flex items-center gap-2">
                        mitoMatch
                        {/* <ExternalLink size={15} className="opacity-0 group-hover:opacity-60 transition-opacity text-white/60" /> */}
                      </h3>
                    </div>
                    {/* Publication badge */}
                    <span className="self-start sm:self-auto px-3 py-1 text-xs font-mono rounded-full bg-white/10 border border-white/25 text-white/75 whitespace-nowrap">
                      Under Review · RECOMB 2026
                    </span>
                  </div>

                  <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-4 group-hover:text-white/90 transition-colors">
                    Full-stack ML genomic web tool for mtDNA analysis — identifies human relatedness from genetic data. Built a React frontend with a Flask backend and MongoDB, using BioPython, Pandas, NumPy and SHAP for model interpretability.
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {['React', 'Flask', 'MongoDB', 'BioPython', 'Pandas', 'NumPy', 'SHAP', 'TensorFlow'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono bg-white/10 border border-white/20 rounded text-white/80 group-hover:bg-white/15 group-hover:border-white/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EducationSection;