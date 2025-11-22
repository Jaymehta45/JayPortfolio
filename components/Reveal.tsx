import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in ms
  variant?: 'fade-up' | 'fade-in' | 'scale' | 'slide-left' | 'slide-right';
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  variant = 'fade-up'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTransformClasses = () => {
    if (isVisible) return 'opacity-100 translate-x-0 translate-y-0 scale-100 blur-none';

    switch (variant) {
      case 'fade-in':
        return 'opacity-0 blur-sm';
      case 'scale':
        return 'opacity-0 scale-90 translate-y-8 blur-sm';
      case 'slide-left':
        return 'opacity-0 -translate-x-12 blur-sm';
      case 'slide-right':
        return 'opacity-0 translate-x-12 blur-sm';
      case 'fade-up':
      default:
        return 'opacity-0 translate-y-12 blur-sm';
    }
  };

  const transitionDelay = delay > 0 ? `${delay}ms` : '0ms';

  return (
    <div 
      ref={ref}
      className={`transform transition-all duration-1000 ease-out will-change-transform ${getTransformClasses()} ${className}`}
      style={{ transitionDelay }}
    >
      {children}
    </div>
  );
};