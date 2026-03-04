import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 lg:px-20 pt-20">
      <div className="container mx-auto">
        <div className="max-w-6xl">
          {/* Pre-title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="font-mono text-muted-foreground text-sm tracking-[0.3em] uppercase">
              Software Engineer
            </span>
          </motion.div>

          {/* Main Name - Split design */}
          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="display-text text-foreground text-[clamp(3.5rem,15vw,150px)] leading-none"
            >
              Saliha
            </motion.h1>
          </div>
          
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="display-text text-outline text-[clamp(3.5rem,15vw,150px)] leading-none"
            >
              Ziyard
            </motion.h1>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <p className="text-muted-foreground text-base md:text-xl max-w-md leading-relaxed">
              First-class Computer Science graduate crafting elegant digital experiences. 
              Currently engineering solutions at{' '}
              <span className="text-foreground font-medium">IWMI</span>.
            </p>

            {/* Stats */}
            <div className="flex gap-12">
              <div>
                <span className="block text-4xl md:text-5xl font-bold text-foreground">1st</span>
                <span className="text-sm text-muted-foreground font-mono">Class Honours</span>
              </div>
              <div className="w-px bg-border" />
              <div>
                <span className="block text-4xl md:text-5xl font-bold text-foreground">UK</span>
                <span className="text-sm text-muted-foreground font-mono">Westminster</span>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-4 flex flex-wrap gap-6"
          >
            <div className="mt-4 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="#contact"
              className="group magnetic-btn px-10 py-5 border border-foreground text-foreground font-medium text-sm tracking-wider uppercase relative z-10"
            >
              <span className="relative z-10">Get in Touch</span>
            </a>
            <a
              href="#projects"
              className="px-10 py-5 text-muted-foreground hover:text-foreground font-medium text-sm tracking-wider uppercase transition-colors"
            >
              View Work →
            </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="font-mono text-xs text-muted-foreground tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} className="text-muted-foreground" />
        </motion.div>
      </motion.div>

      {/* Side text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2"
      >
        <div className="flex flex-col items-center gap-6">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-muted-foreground/50 to-transparent" />
          <span className="font-mono text-xs text-muted-foreground tracking-widest [writing-mode:vertical-lr] rotate-180">
            PORTFOLIO 2025
          </span>
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-muted-foreground/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
