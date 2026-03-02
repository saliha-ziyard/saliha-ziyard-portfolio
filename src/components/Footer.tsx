const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-foreground font-bold text-xl">SZ</span>
            <span className="text-muted-foreground">.</span>
          </div>

          <div className="flex items-center gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Work
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} Saliha Ziyard
          </p>
        </div>

        <div className="mt-12 luxury-line" />

        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground/50 font-mono tracking-wider">
            DESIGNED & BUILT WITH PRECISION
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
