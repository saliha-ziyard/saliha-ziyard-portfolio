import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';

const ContactSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@salihaziyard.dev', label: 'Email' },
  ];

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div ref={containerRef} className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-sm text-muted-foreground tracking-[0.3em] uppercase">
              Contact
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-8"
          >
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold text-foreground leading-tight">
              Let's create
              <br />
              <span className="text-outline">something</span>
              <br />
              <span className="text-foreground">together</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            I'm always interested in hearing about new opportunities, collaborations, 
            or just having a conversation about technology and innovation.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12"
          >
            <a
              href="mailto:hello@salihaziyard.dev"
              className="group magnetic-btn inline-flex items-center gap-3 px-12 py-6 border border-foreground text-foreground font-medium text-lg tracking-wider uppercase relative z-10"
            >
              <span className="relative z-10">Say Hello</span>
              <ArrowUpRight size={20} className="relative z-10 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 flex justify-center gap-6"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="w-14 h-14 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-all duration-300"
              >
                <link.icon size={22} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
