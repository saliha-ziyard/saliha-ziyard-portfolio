import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import profile from "@/assets/profileImg.jpeg";


const MarqueeText = () => {
  return (
    <div className="py-20 overflow-hidden border-y border-border/30">
      <div className="flex whitespace-nowrap">
        <div className="scroll-text flex items-center gap-8">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="text-6xl md:text-8xl font-bold text-foreground/5">
                DEVELOPMENT
              </span>
              <span className="text-foreground/20">◆</span>
              <span className="text-6xl md:text-8xl font-bold text-foreground/5">
                DESIGN
              </span>
              <span className="text-foreground/20">◆</span>
              <span className="text-6xl md:text-8xl font-bold text-foreground/5">
                INNOVATION
              </span>
              <span className="text-foreground/20">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative">
      <MarqueeText />

      <div ref={containerRef} className="container mx-auto px-20 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,480px)_1fr] gap-0 lg:gap-6 xl:gap-10 items-center">
          {/* Left - Image (narrower column) */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="w-full max-w-[480px] aspect-square bg-muted/20 border border-border/50 relative overflow-hidden group">
              <img
                src={profile}
                alt="Profile"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Status badge */}
              <div className="absolute bottom-6 left-6 glass-panel px-4 py-2 rounded-full backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-mono text-foreground">Available for work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content (takes remaining space → feels wider) */}
          <div className="flex flex-col justify-center lg:pl-8 xl:pl-12">
            <span className="font-mono text-sm text-muted-foreground tracking-[0.3em] uppercase mb-6">
              About
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Crafting digital
              <br />
              <span className="text-outline">experiences</span>
            </h2>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed max-w-3xl">
              <p>
                I'm a software engineer with a passion for building products that make a difference.
                With a First-Class Honours in Computer Science from the University of Westminster,
                I combine technical expertise with creative problem-solving.
              </p>
              <p>
                Currently at IWMI, I'm developing solutions that tackle real-world challenges.
                My approach blends clean architecture with intuitive design, always striving
                for that perfect balance between form and function.
              </p>
            </div>

            {/* Skills quick view */}
            <div className="mt-12 pt-8 border-t border-border/50">
              <div className="flex flex-wrap gap-3">
                {["React", "TypeScript", "Node.js", "Python", "AWS", "Docker"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 border border-border/50 text-sm font-mono text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
