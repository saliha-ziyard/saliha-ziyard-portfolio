import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const EducationSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-32 px-6 relative bg-muted/5">
      <div ref={containerRef} className="container mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="font-mono text-sm text-muted-foreground tracking-[0.3em] uppercase">
            Education
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mt-4">
            Academic
            <br />
            <span className="text-outline">foundation</span>
          </h2>
        </motion.div>

        {/* Main education card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="border border-border/50 p-8 md:p-12 hover:border-foreground/20 transition-colors duration-500 group">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 border border-border/50 flex items-center justify-center group-hover:border-foreground/30 transition-colors">
                    <GraduationCap className="text-foreground" size={24} />
                  </div>
                  <div>
                    <span className="font-mono text-sm text-muted-foreground">2020 — 2024</span>
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  BSc Computer Science
                </h3>
                <p className="text-lg text-muted-foreground mb-1">
                  with Industrial Experience
                </p>
                <p className="text-muted-foreground">
                  University of Westminster, UK <span className="text-muted-foreground/50">· IIT Sri Lanka</span>
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className="block text-5xl md:text-6xl font-bold text-foreground">1st</span>
                  <span className="text-sm text-muted-foreground font-mono">Class Honours</span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="mt-12 pt-8 border-t border-border/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-border/50 flex items-center justify-center shrink-0">
                    <Award size={18} className="text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Dean's List</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Consistent academic excellence throughout the program
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-border/50 flex items-center justify-center shrink-0">
                    <BookOpen size={18} className="text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Industrial Placement</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Year-long industry experience in the UK
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
