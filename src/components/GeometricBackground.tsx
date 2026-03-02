import { useEffect, useRef } from 'react';

const GeometricBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      container.style.setProperty('--mouse-x', `${x}%`);
      container.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient glow that follows mouse */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{ background: 'var(--gradient-glow)' }}
      />
      
      {/* Geometric grid */}
      <div className="absolute inset-0 geometric-grid opacity-40" />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-[15%] w-64 h-64 animate-float">
        <svg viewBox="0 0 200 200" className="w-full h-full opacity-10">
          <polygon 
            points="100,10 190,60 190,140 100,190 10,140 10,60" 
            fill="none" 
            stroke="hsl(175 80% 50%)" 
            strokeWidth="1"
          />
        </svg>
      </div>
      
      <div className="absolute bottom-40 left-[10%] w-48 h-48 animate-float-delayed">
        <svg viewBox="0 0 200 200" className="w-full h-full opacity-10">
          <polygon 
            points="100,20 180,100 100,180 20,100" 
            fill="none" 
            stroke="hsl(175 80% 50%)" 
            strokeWidth="1"
          />
        </svg>
      </div>
      
      <div className="absolute top-1/2 right-[5%] w-32 h-32 animate-float">
        <svg viewBox="0 0 200 200" className="w-full h-full opacity-5">
          <circle cx="100" cy="100" r="80" fill="none" stroke="hsl(175 80% 50%)" strokeWidth="1" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="hsl(175 80% 50%)" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Crystalline corner accents */}
      <div className="absolute top-0 left-0 w-96 h-96 opacity-20">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <path 
            d="M0,0 L200,0 L0,200 Z" 
            fill="none" 
            stroke="hsl(175 80% 50%)" 
            strokeWidth="0.5"
          />
          <path 
            d="M0,0 L100,0 L0,100 Z" 
            fill="hsl(175 80% 50% / 0.05)"
          />
        </svg>
      </div>
      
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-20 rotate-180">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <path 
            d="M0,0 L200,0 L0,200 Z" 
            fill="none" 
            stroke="hsl(175 80% 50%)" 
            strokeWidth="0.5"
          />
          <path 
            d="M0,0 L100,0 L0,100 Z" 
            fill="hsl(175 80% 50% / 0.05)"
          />
        </svg>
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay" />
    </div>
  );
};

export default GeometricBackground;
