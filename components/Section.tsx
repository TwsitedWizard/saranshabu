import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, id }) => {
  const sectionRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={sectionRef} id={id} className="mb-16 md:mb-24 opacity-0">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-8 sticky top-0 bg-white/20 dark:bg-transparent backdrop-blur-md py-4 z-10 flex items-center gap-4">
        <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
        {title}
      </h2>
      <div className="space-y-8">
        {children}
      </div>
    </section>
  );
};
