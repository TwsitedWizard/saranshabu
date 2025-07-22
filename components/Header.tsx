
import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { CONTACT_INFO, MailIcon, PhoneIcon, LinkedInIcon, GitHubIcon, InstagramIcon, SunIcon, MoonIcon } from '../constants';

export const Header: React.FC = () => {
  const [theme, toggleTheme] = useDarkMode();

  const contactLinks = [
    { href: `mailto:${CONTACT_INFO.email}`, icon: <MailIcon className="w-5 h-5" />, label: 'Email' },
    { href: `tel:${CONTACT_INFO.phone}`, icon: <PhoneIcon className="w-5 h-5" />, label: 'Phone' },
    { href: CONTACT_INFO.linkedin, icon: <LinkedInIcon className="w-5 h-5" />, label: 'LinkedIn' },
    { href: CONTACT_INFO.github, icon: <GitHubIcon className="w-5 h-5" />, label: 'GitHub' },
    { href: CONTACT_INFO.instagram, icon: <InstagramIcon className="w-5 h-5" />, label: 'Instagram' },
  ];

  return (
    <header className="py-8 md:py-12 flex flex-col md:flex-row items-center justify-between mb-12">
      <div className="flex items-center mb-6 md:mb-0">
        <img
          src="/saranshabu/prof.jpg"
          alt="Saran Shabu"
          className="w-25 h-24 md:w-34 md:h-32 rounded-full mr-6 border-4 border-slate-200 dark:border-slate-700 shadow-lg"
        />
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 dark:from-blue-400 dark:via-green-300 dark:to-indigo-300 bg-[length:200%_auto] bg-clip-text text-transparent animate-background-pan">
              Saran Shabu
            </span>
          </h1>
          <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">Developer | Researcher | Tech Explorer</p>
          <div className="flex space-x-4 mt-4">
            {contactLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
      >
        {theme === 'light' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
      </button>
    </header>
  );
};
