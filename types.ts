import React from 'react';

// Add TypeScript definitions for Swiper Web Components

// We can create more specific types for Swiper elements to use with refs
// This helps with type safety when calling methods like `initialize()`.
export interface SwiperContainerElement extends HTMLElement {
  initialize: () => void;
  // Add other Swiper Element properties or methods if needed.
}

export interface SwiperSlideElement extends HTMLElement {
  // Add Swiper Slide properties or methods if needed.
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { init?: string }, SwiperContainerElement>;
      'swiper-slide': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, SwiperSlideElement>;
    }
  }
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  instagram: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface ProjectInsights {
  role?: string;
  challenge?: string;
  outcome?: string;
}

export interface Project {
  title: string;
  tech: string[];
  period: string;
  description: string;
  repoLink?: string;
  screenshots?: string[];
  insights?: ProjectInsights;
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string;
  location: string;
}

export interface Language {
    name: string;
    proficiency: string;
}