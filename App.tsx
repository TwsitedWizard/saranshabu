import React, { useState, useRef, useEffect, useCallback } from 'react';
import './types'; // Import for side effects: loads global Swiper component types
import { Header } from './components/Header';
import { Section } from './components/Section';
import { Chatbot } from './components/Chatbot';
import { SkillBadge } from './components/SkillBadge';
import {
  INTERNSHIPS,
  PROJECTS,
  CERTIFICATIONS,
  SKILLS,
  EDUCATION,
  LANGUAGES,
  GitHubIcon,
  CONTACT_INFO
} from './constants';
import type { Experience, Project, Certificate, Education as EducationType, Language, SwiperContainerElement } from './types';
import { useScrollAnimation } from './hooks/useScrollAnimation';

const ExperienceCard: React.FC<{ item: Experience }> = ({ item }) => {
  const cardRef = useScrollAnimation<HTMLDivElement>();
  return (
    <div ref={cardRef} className="opacity-0 bg-white/40 dark:bg-slate-800/40 p-6 rounded-lg shadow-md border border-slate-200/20 dark:border-slate-700/30 hover:shadow-xl hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-grow">
          <h3 className="font-bold text-xl text-slate-800 dark:text-slate-100">{item.role}</h3>
          <p className="font-medium text-blue-600 dark:text-blue-400">{item.company}</p>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 whitespace-nowrap flex-shrink-0">{item.period}</p>
      </div>
      <p className="mt-4 text-slate-700 dark:text-slate-300">{item.description}</p>
    </div>
  );
};

const ProjectCarousel: React.FC<{ screenshots: string[] }> = ({ screenshots }) => {
    const swiperElRef = React.useRef<SwiperContainerElement>(null);

    React.useEffect(() => {
        if (!swiperElRef.current) return;

        const swiperContainer = swiperElRef.current;
        const params = {
            navigation: true,
            pagination: {
                clickable: true,
            },
            autoplay: {
                delay: 4500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            loop: true,
            grabCursor: true,
            effect: 'slide',
        };

        Object.assign(swiperContainer, params);
        swiperContainer.initialize();
    }, []);

    return (
        <div className="carousel-container project-carousel my-6 rounded-lg overflow-hidden shadow-inner">
            <swiper-container ref={swiperElRef} init="false">
                {screenshots.map((src, index) => (
                    <swiper-slide key={index}>
                        <img
                          src={src}
                          alt={`Project screenshot ${index + 1}`}
                          className="w-full aspect-video object-cover"
                          loading="lazy"
                          width="1280"
                          height="720"
                        />
                    </swiper-slide>
                ))}
            </swiper-container>
        </div>
    );
};

const ProjectCard: React.FC<{ item: Project; disableAnimation?: boolean }> = ({ item, disableAnimation = false }) => {
  const cardRef = !disableAnimation ? useScrollAnimation<HTMLDivElement>() : null;
  const opacityClass = !disableAnimation ? 'opacity-0' : '';
  const githubLink = item.repoLink || CONTACT_INFO.github;

  return (
    <div ref={cardRef} className={`${opacityClass} bg-white/40 dark:bg-slate-800/40 rounded-lg shadow-md border border-slate-200/20 dark:border-slate-700/30 hover:shadow-xl hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full`}>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-4 mb-2">
            <h3 className="font-bold text-xl text-slate-800 dark:text-slate-100 flex-grow">{item.title}</h3>
            <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" className="text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-transform duration-300 hover:scale-110 flex-shrink-0 -mt-1 -mr-1 p-1">
              <GitHubIcon className="w-6 h-6" />
            </a>
        </div>
        <div className="flex justify-between items-center gap-4 mb-4">
            <div className="flex flex-wrap gap-2">
                {item.tech.map(t => <SkillBadge key={t} skill={t} />)}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 whitespace-nowrap flex-shrink-0">{item.period}</p>
        </div>
        <p className="text-slate-700 dark:text-slate-300 flex-grow">
            {item.description}
        </p>

        {/* Project Screenshot Carousel */}
        {item.screenshots && item.screenshots.length > 0 && (
          <ProjectCarousel screenshots={item.screenshots} />
        )}
        
        {item.insights && (
          <div className="project-insights mt-auto pt-4 border-t border-slate-200/20 dark:border-slate-700/30">
            <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Project Insights</h4>
            <ul className="space-y-2 text-sm">
                {item.insights.role && (
                    <li>
                        <strong className="font-medium text-slate-600 dark:text-slate-400">My Role:</strong>
                        <span className="ml-2 text-slate-600 dark:text-slate-400">{item.insights.role}</span>
                    </li>
                )}
                {item.insights.challenge && (
                    <li>
                        <strong className="font-medium text-slate-600 dark:text-slate-400">Key Challenge:</strong>
                        <span className="ml-2 text-slate-600 dark:text-slate-400">{item.insights.challenge}</span>
                    </li>
                )}
                {item.insights.outcome && (
                    <li>
                        <strong className="font-medium text-slate-600 dark:text-slate-400">Outcome:</strong>
                        <span className="ml-2 text-slate-600 dark:text-slate-400">{item.insights.outcome}</span>
                    </li>
                )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};


// Memoized ProjectTriggerCard to prevent re-renders. Defined outside the ProjectsDisplay component.
const ProjectTriggerCard = React.memo(({ item, isActive, onActivate }: { item: Project; isActive: boolean; onActivate: (title: string) => void }) => {
    
    const handleActivation = () => onActivate(item.title);
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onActivate(item.title);
        }
    };

    const activeClasses = 'bg-white/50 dark:bg-slate-700/50 border-l-blue-500 is-active';
    const inactiveClasses = 'border-l-transparent hover:bg-white/20 dark:hover:bg-slate-800/20 hover:border-l-slate-300/50 dark:hover:border-l-slate-600/50';
    
    return (
        <div
            onMouseEnter={handleActivation}
            onClick={handleActivation}
            className={`project-list-item p-4 rounded-r-lg cursor-pointer transition-all duration-200 border-l-4 ${isActive ? activeClasses : inactiveClasses}`}
            role="button"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            aria-pressed={isActive}
        >
            <h4 className={`font-bold text-lg transition-colors ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-800 dark:text-slate-100'}`}>{item.title}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 truncate">{item.tech.join(', ')}</p>
        </div>
    );
});
ProjectTriggerCard.displayName = "ProjectTriggerCard";

const ProjectsDisplay: React.FC = () => {
    const [activeProjectTitle, setActiveProjectTitle] = useState<string>(PROJECTS[0].title);
    const debounceTimeout = useRef<number | null>(null);

    // useCallback ensures the handler function isn't recreated on each render,
    // which is key to making React.memo effective on child components.
    const handleActivate = useCallback((projectTitle: string) => {
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }
        debounceTimeout.current = window.setTimeout(() => {
            setActiveProjectTitle(projectTitle);
        }, 50); // Short debounce for responsiveness while preventing flicker
    }, []);
    
    useEffect(() => {
        // Clear timeout on unmount
        return () => {
            if (debounceTimeout.current) {
                clearTimeout(debounceTimeout.current);
            }
        };
    }, []);

    const activeProject = PROJECTS.find(p => p.title === activeProjectTitle) || PROJECTS[0];

    return (
        <>
            {/* Mobile/Tablet Grid View */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:hidden">
                {PROJECTS.map(item => <ProjectCard key={item.title} item={item} />)}
            </div>

            {/* Desktop Two-Column View */}
            <div className="hidden lg:flex gap-12 items-start">
                {/* Left Column: Triggers */}
                <div className="w-2/5">
                    <div className="space-y-2 sticky top-28">
                       {PROJECTS.map(p => (
                            <ProjectTriggerCard 
                                key={p.title}
                                item={p}
                                isActive={activeProjectTitle === p.title}
                                onActivate={handleActivate}
                            />
                       ))}
                    </div>
                </div>
                {/* Right Column: Details */}
                <div className="project-details-container flex-1 min-w-0">
                     {/* Using key to force re-render with animation */}
                    <div key={activeProject.title} className="animate-project-fade-in">
                        <ProjectCard item={activeProject} disableAnimation={true} />
                    </div>
                </div>
            </div>
        </>
    );
};


const CertificateCard: React.FC<{ item: Certificate }> = ({ item }) => {
    const cardRef = useScrollAnimation<HTMLDivElement>();
    return (
        <div ref={cardRef} className="opacity-0 bg-white/40 dark:bg-slate-800/40 p-4 rounded-lg shadow-md border border-slate-200/20 dark:border-slate-700/30">
            <p className="font-semibold text-slate-800 dark:text-slate-100">{item.name}</p>
            <div className="flex justify-between items-baseline">
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.issuer}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{item.date}</p>
            </div>
        </div>
    );
};

const EducationCard: React.FC<{ item: EducationType }> = ({ item }) => {
    const cardRef = useScrollAnimation<HTMLDivElement>();
    return (
        <div ref={cardRef} className="opacity-0 bg-white/40 dark:bg-slate-800/40 p-6 rounded-lg shadow-md border border-slate-200/20 dark:border-slate-700/30">
            <div className="flex justify-between items-start gap-4">
                <div className="flex-grow">
                    <h3 className="font-bold text-xl text-slate-800 dark:text-slate-100">{item.institution}</h3>
                    <p className="font-medium text-blue-600 dark:text-blue-400">{item.degree}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.location}</p>
                </div>
                 <p className="text-sm text-slate-600 dark:text-slate-400 whitespace-nowrap flex-shrink-0">{item.period}</p>
            </div>
            <p className="mt-4 text-slate-700 dark:text-slate-300">{item.details}</p>
        </div>
    );
};


const App: React.FC = () => {
  return (
    <>
      <div className="main-content-container w-full max-w-4xl bg-[rgba(10,15,20,0.5)] rounded-xl shadow-aero border border-white/20 backdrop-blur-[20px]">
        <div className="p-4 sm:p-6 lg:p-8 text-slate-800 dark:text-slate-200">
            <Header />
            <main>
              <Section title="Internships" id="internship">
                {INTERNSHIPS.map(item => <ExperienceCard key={item.role} item={item} />)}
              </Section>

              <Section title="Projects" id="projects">
                <ProjectsDisplay />
              </Section>

              <Section title="Technical Skills" id="skills">
                <div className="bg-white/40 dark:bg-slate-800/40 p-6 rounded-lg shadow-md border border-slate-200/20 dark:border-slate-700/30">
                  {SKILLS.map(category => (
                    <div key={category.title} className="mb-6 last:mb-0">
                      <h4 className="font-semibold text-lg mb-3 text-slate-700 dark:text-slate-200">{category.title}</h4>
                      <div className="flex flex-wrap">
                        {category.skills.map(skill => <SkillBadge key={skill} skill={skill} />)}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Certifications" id="certifications">
                <div className="space-y-4">
                  {CERTIFICATIONS.map(item => <CertificateCard key={item.name} item={item} />)}
                </div>
              </Section>

              <Section title="Education" id="education">
                {EDUCATION.map(item => <EducationCard key={item.institution} item={item} />)}
              </Section>
              
              <Section title="Languages" id="languages">
                  <div className="bg-white/40 dark:bg-slate-800/40 p-6 rounded-lg shadow-md border border-slate-200/20 dark:border-slate-700/30 flex justify-around">
                      {LANGUAGES.map((lang: Language) => (
                          <div key={lang.name} className="text-center">
                              <p className="font-semibold text-lg text-slate-800 dark:text-slate-100">{lang.name}</p>
                              <p className="text-slate-700 dark:text-slate-300">{lang.proficiency}</p>
                          </div>
                      ))}
                  </div>
              </Section>
            </main>
            <footer className="text-center py-8 text-slate-500 dark:text-slate-400 text-sm">
                <p>Thank you for visiting my portfolio.</p>
                <p>Designed and built by Saran Shabu.</p>
            </footer>
        </div>
      </div>
      <Chatbot />
    </>
  );
};

export default App;
