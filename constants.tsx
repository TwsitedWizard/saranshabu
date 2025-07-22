
import React from 'react';
import type { ContactInfo, Experience, Project, Certificate, SkillCategory, Education, Language } from './types';

const REPO_NAME = '/saranshabu'; // Replace with your repository name

export const RESUME_DATA_STR = `
Saran Shabu
Kozhikode, Kerala 673106
saranshabu@gmail.com | 907430630 | www.linkedin.com/in/saran-shabu-b55980227 | github.com/TwsitedWizard | Instagram: saranbettereachday

INTERNSHIP
Junior Associate Developer, Calanjiyam Consultancies and Technologies (Apr 2025 – Present)
- Contributed to the advancement of the organization's web application development team.
- Received hands-on experience in real-time client application development. (Backend)
- Utilized tools such as JQuery, AJAX, Php, MySQL and other design tools such as Bootstrap and MUI.

Web Development Intern, Calanjiyam Consultancies and Technologies (Feb 2025 – Apr 2025)
- Undergone training under the organization's web application development team.
- Received hands-on experience in team project application development (Both frontend and backend)
- Improved skills on tools and languages such as HTML, CSS, JS, Php, MySQL and other design tools such as Bootstrap and MUI.

PROJECTS
Tree Age Prediction using Deep Learning (TreeRingNet) (Oct 2023 – Mar 2024)
- Developed a deep learning model for predicting tree age using tree ring analysis.
- Applied computer vision techniques for tree ring detection in teak trees.
- Published and presented research at the 8th International Conference on I-SMAC 2024.
- Demonstrates expertise in image processing, CNN models, and research documentation.

Gignest | HTML, CSS, JavaScript, PHP, MySQL (Feb 2025 – Apr 2023)
- Designed a website for freelancers to sell their skills online in a simple website.
- Showcases full-stack web development capabilities.
- Enabled backend connectivity and database automation.
- Focused on user experience and e-commerce functionality.

Legendary Automotive | HTML, CSS, JavaScript, PHP, MySQL (Mar 2023 – May 2023)
- Designed a website for users to purchase vehicles online.
- Showcases full-stack web development capabilities.
- Focused on user experience and e-commerce functionality.
- Github Repository Link: https://github.com/TwsitedWizard/Legendary-Automotive

AutoWash | HTML, CSS, JavaScript, PHP, MySQL, PHPmailer (Oct 2023 – Nov 2023)
- Created an online portal for booking car wash and detailing services.
- Showcases full-stack web development capabilities.
- Integrated email notifications for service confirmations.
- Demonstrates proficiency in backend integration and service-based web applications.

Football Club Management System | C#, WinForms, SQL (Feb 2024 – Mar 2024)
- Enables management of a football club and player squad.
- Involves database handling and UI/UX design for smooth user experience.
- Highlights object-oriented programming and GUI development skills.

Event Management Website | MongoDB, Express.js, React.js, Node.js (Nov 2024 – Dec 2024)
- Built a website for managing event proposals and bookings.
- Showcases full-stack web development capabilities.
- Offers user-friendly interaction between clients and event management companies.
- Showcases expertise in modern web development technologies.
- Github Repository Link: https://github.com/TwsitedWizard/Event-Planner---Manager

Road Trip Planner and Registration System | Java, JSP, HTML, CSS, Apache (Mar 2023 – May 2023)
- Facilitates planning and registering for road trips.
- Focuses on backend logic and frontend presentation.
- Highlights Java-based web development experience.

Bank Management Android App | Android Studio, SQLite (Oct 2023 - Nov 2023)
- Created an Android application for basic banking operations.
- Focuses on user authentication and transaction handling.
- Demonstrates proficiency in mobile app development.

3D Mouse Function Demonstration | C, OpenGL (Feb 2024 - Mar 2024)
- Designed a 3D environment to showcase mouse functionalities.
- Highlights expertise in graphics programming and 3D visualization.
- Demonstrates interactive UI elements in a virtual space.

CERTIFICATES
- Google Cloud Skills Boost: Google Cloud Computing Foundations Certificate, Google (June 2025)
- NPTEL Online Certification on Object Oriented Programming Using Java, Swayam NPTEL (April 2025)
- Java 17 Masterclass: Start Coding, Tim Buchalka, Udemy (August 2021)
- NPTEL Online Certification on Cloud Computing, Swayam NPTEL (April 2024)
- Online course on Python Flask, Great Learning (March 2023)
- Build a free website on WordPress, Coursera (March 2024)
- Hackerrank Certification on Problem Solving, Hackerrank (April 2024)

TECHNICAL SKILLS
- Languages: Python, Java, C/C++/C#, HTML, CSS, Javascript, Php, MySQL.
- Technologies/Frameworks: Angular, Bootstrap, React JS, Node JS, Git, GitHub, SQLite, Mongo DB
- Skills: Data Structures and Algorithms, Problem-Solving, Responsive Web Design, Scripting in Python and JavaScript, Computer hardware repair and maintenance, Technical Writing, Technical consulting, Project Management.

EDUCATION
- Amrita Vishwa Vidyapeetham, Mysuru, Karnataka (2021 – Present)
  Integrated Master of Computer Applications – Current CGPA: 9.32
- Govt. J. N. M. Higher Secondary School, Vadakara, Kerala (2019 – 2021)
  12th with Physics, Chemistry, Math & Computer Science – Percentage: 98%
- Amrutha Public School, Vadakara, Kerala (2018 – 2019)
  10th with Science – Percentage: 89%

LANGUAGES
- English – Proficient
- Hindi – Proficient
- Malayalam- Native
`;


export const CONTACT_INFO: ContactInfo = {
  email: "saranshabu@gmail.com",
  phone: "907430630",
  linkedin: "https://www.linkedin.com/in/saran-shabu-b55980227",
  github: "https://github.com/TwsitedWizard",
  instagram: "https://www.instagram.com/saranbettereachday",
};

export const INTERNSHIPS: Experience[] = [
  {
    role: "Junior Associate Developer",
    company: "Calanjiyam Consultancies and Technologies",
    period: "Apr 2025 – Present",
    description: "Contributed to advancing the web development team by gaining hands-on experience in real-time backend applications using jQuery, AJAX, PHP, and MySQL."
  },
  {
    role: "Web Development Intern",
    company: "Calanjiyam Consultancies and Technologies",
    period: "Feb 2025 – Apr 2025",
    description: "Underwent comprehensive full-stack training, actively participating in team projects to improve skills in HTML, CSS, JS, PHP, and various design tools."
  },
];

export const PROJECTS: Project[] = [
    {
        title: "Event Management Website",
        tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
        period: "Nov 2024 – Dec 2024",
        description: "Developed a full-stack MERN application for managing event proposals and bookings, featuring a user-friendly interface for seamless client-company interaction.",
        repoLink: "https://github.com/TwsitedWizard/Event-Planner---Manager",
        screenshots: [
            `${REPO_NAME}/evm/dash.png`,
            `${REPO_NAME}/evm/map.png`,
            `${REPO_NAME}/evm/fam.png`
        ],
        insights: {
            role: "Full-Stack Developer",
            challenge: "Ensuring real-time updates between client bookings and event manager dashboards without using WebSockets.",
            outcome: "Successfully built a scalable platform that streamlined the event proposal and booking process for multiple vendors."
        }
    },
    {
        title: "Tree Age Prediction using Deep Learning (TreeRingNet)",
        tech: ["Python", "CNN", "Image Processing"],
        period: "Oct 2023 – Mar 2024",
        description: "Engineered a deep learning model for tree age prediction from ring analysis. This research, involving advanced image processing, was published and presented at I-SMAC 2024.",
        screenshots: [
            `${REPO_NAME}/tree/rings.png`,
            `${REPO_NAME}/tree/tree.png`,
            `${REPO_NAME}/tree/arch.png`
        ],
        insights: {
            role: "Lead Researcher & ML Engineer",
            challenge: "Preprocessing tree ring images with variable quality and lighting conditions to ensure accurate ring detection.",
            outcome: "Published a research paper and developed a model with 95% accuracy on the test dataset."
        }
    },
    {
        title: "Legendary Automotive",
        tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        period: "Mar 2023 – May 2023",
        description: "Designed and built a full-stack e-commerce platform for vehicle purchases, focusing on a robust user experience with PHP and MySQL for backend functionality.",
        repoLink: "https://github.com/TwsitedWizard/Legendary-Automotive",
        screenshots: [
            `${REPO_NAME}/auto/home.png`,
            `${REPO_NAME}/auto/bullet.png`,
            `${REPO_NAME}/auto/payment.png`
        ],
        insights: {
            role: "Full-Stack Developer",
            challenge: "Total frontend planning and desiging a secure and scalable database schema to handle thousands of vehicle listings and user profiles.",
            outcome: "Launched a fully functional e-commerce site capable of handling high traffic with efficient data retrieval."
        }
    },
    {
        title: "AutoWash",
        tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "PHPMailer"],
        period: "Oct 2023 – Nov 2023",
        description: "Created an online portal for booking car wash services, featuring full-stack capabilities and integrated email notifications for service confirmations using PHPMailer.",
        screenshots: [
            `${REPO_NAME}/wash/home.png`,
            `${REPO_NAME}/wash/form.png`,
            `${REPO_NAME}/wash/about.png`
        ],
        insights: {
            role: "Full-Stack Developer",
            challenge: "Integrating a third-party email service (PHPMailer) reliably for sending booking confirmations.",
            outcome: "Created a seamless booking experience with instant email notifications, improving user trust."
        }
    },
    {
        title: "Football Club Management System",
        tech: ["C#", "WinForms", "SQL"],
        period: "Feb 2024 – Mar 2024",
        description: "Developed a C# WinForms desktop application for football club and player management, highlighting skills in database handling and object-oriented programming.",
        screenshots: [
            `${REPO_NAME}/ball/main.png`,
            `${REPO_NAME}/ball/lineup.png`,
            `${REPO_NAME}/ball/manager.png`
        ],
        insights: {
            role: "Desktop App Developer",
            challenge: "Designing an intuitive UI with WinForms for complex data management tasks like player transfers and squad selection.",
            outcome: "Delivered a stable and user-friendly desktop application for efficient club management."
        }
    },
    {
        title: "Bank Management Android App",
        tech: ["Android Studio", "SQLite", "Java"],
        period: "Oct 2023 – Nov 2023",
        description: "Built a secure Android application for basic banking operations using Java and SQLite, focusing on user authentication and transaction handling to demonstrate mobile development proficiency.",
        screenshots: [
            `${REPO_NAME}/bank/main.png`,
        ],
        insights: {
            role: "Mobile App Developer",
            challenge: "Implementing secure local data storage using SQLite for sensitive user and transaction data.",
            outcome: "Developed a functional mobile banking app prototype demonstrating core mobile development and database skills."
        }
    },
     {
        title: "Road Trip Planner and Registration System",
        tech: ["Java", "JSP", "HTML", "CSS", "Apache"],
        period: "Mar 2023 – May 2023",
        description: "Developed a Java-based system to facilitate road trip planning and registration, focusing on robust backend logic and a clear frontend presentation using JSP.",
        screenshots: [
            `${REPO_NAME}/road/home.png`,
            `${REPO_NAME}/road/trips.png`,
            `${REPO_NAME}/road/gallery.png`
        ],
        insights: {
            role: "Java Web Developer",
            challenge: "Managing user sessions and state across different pages using Java Servlets and JSP.",
            outcome: "Built a functional web application showcasing Java-based backend development capabilities."
        }
    },
    {
        title: "Gignest",
        tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        period: "Feb 2025 – Apr 2023",
        description: "Created a full-stack website for freelancers to market and sell their skills, enabling backend connectivity with a focus on user experience and e-commerce functionality.",
        screenshots: [
            `${REPO_NAME}/gig/prod.png`,
            `${REPO_NAME}/gig/list.png`,
            `${REPO_NAME}/gig/chat.png`
        ],
        insights: {
            role: "Full-Stack Developer",
            challenge: "Structuring a multi-relational database to handle users, gigs, orders, and reviews efficiently.",
            outcome: "Developed a prototype for a freelancer marketplace with core e-commerce functionality."
        }
    },
    {
        title: "3D Mouse Function Demonstration",
        tech: ["C", "OpenGL"],
        period: "Feb 2024 - Mar 2024",
        description: "Designed an interactive 3D environment in C and OpenGL to showcase advanced mouse functionalities, highlighting expertise in graphics programming and 3D visualization.",
        
        insights: {
            role: "Graphics Programmer",
            challenge: "Mastering OpenGL concepts to create and manipulate 3D objects and camera controls from scratch in C.",
            outcome: "Successfully created an interactive 3D demo, gaining foundational skills in computer graphics."
        }
    }
];


export const CERTIFICATIONS: Certificate[] = [
    { name: "Google Cloud Skills Boost: Google Cloud Computing Foundations Certificate", issuer: "Google", date: "June 2025" },
    { name: "NPTEL Online Certification on Object Oriented Programming Using Java", issuer: "Swayam NPTEL", date: "April 2025" },
    { name: "NPTEL Online Certification on Cloud Computing", issuer: "Swayam NPTEL", date: "April 2024" },
    { name: "Hackerrank Certification on Problem Solving", issuer: "Hackerrank", date: "April 2024" },
    { name: "Build a free website on WordPress", issuer: "Coursera", date: "March 2024" },
    { name: "Online course on Python Flask", issuer: "Great Learning", date: "March 2023" },
    { name: "Java 17 Masterclass: Start Coding", issuer: "Tim Buchalka, Udemy", date: "August 2021" },
];

export const SKILLS: SkillCategory[] = [
    {
        title: "Languages",
        skills: ["Python", "Java", "C/C++/C#", "HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    },
    {
        title: "Technologies & Frameworks",
        skills: ["Angular", "Bootstrap", "React.js", "Node.js", "Git", "GitHub", "SQLite", "MongoDB"]
    },
    {
        title: "General Skills",
        skills: ["Data Structures & Algorithms", "Problem-Solving", "Responsive Web Design", "Technical Writing", "Project Management"]
    }
];

export const EDUCATION: Education[] = [
    {
        degree: "Integrated Master of Computer Applications",
        institution: "Amrita Vishwa Vidyapeetham",
        period: "2021 – Present",
        details: "Current CGPA: 9.32",
        location: "Mysuru, Karnataka"
    },
    {
        degree: "12th (Physics, Chemistry, Math & Computer Science)",
        institution: "Govt. J. N. M. Higher Secondary School",
        period: "2019 – 2021",
        details: "Percentage: 98%",
        location: "Vadakara, Kerala"
    },
    {
        degree: "10th (Science)",
        institution: "Amrutha Public School",
        period: "2018 – 2019",
        details: "Percentage: 89%",
        location: "Vadakara, Kerala"
    }
];

export const LANGUAGES: Language[] = [
    { name: "English", proficiency: "Proficient" },
    { name: "Hindi", proficiency: "Proficient" },
    { name: "Malayalam", proficiency: "Native" },
];

// Icons
export const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

export const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

export const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V22"/></svg>
);

export const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);

export const SunIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
);

export const MoonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
);

export const BotIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
);

export const PERSONALITY_BRIEF_STR = `Saran Shabu – Developer. Researcher. Builder of Ideas.
Saran Shabu is a passionate and multi-dimensional technologist, currently pursuing an Integrated Master of Computer Applications (MCA) at Amrita Vishwa Vidyapeetham, Mysuru Campus, graduating in 2026. Blending strong foundations in computer science with a drive to explore real-world impact, he is steadily evolving into a full-stack developer and applied AI researcher with a deep curiosity for problem-solving and innovation.

📚 Academic and Research-Oriented
Saran’s academic journey reflects both intellectual depth and research-oriented focus. His paper titled “Tree Age Prediction using VGG-16 from Cross-Sectional Images” was not only well-executed but also accepted and presented at I-SMAC 2024, an international conference held in Nepal. It marked a significant achievement in using convolutional neural networks (CNNs) for ecological and environmental analysis — an intersection of AI and natural sciences.

Building on that, his final-year major project takes a culturally and technically rich direction: “AI Driven OCR System for Ancient Malayalam Vatteluthu Script from Engraved Metal Manuscripts.” This project showcases his ability to combine deep learning, computer vision, and language processing with heritage preservation — something few student researchers tackle.

💻 Developer with a Full-Stack Mindset
Saran doesn’t just study code — he builds with it. From MongoDB and React.js to Flutter and the Gemini API, he has developed full-stack applications that serve real use cases. One such project is the Social Event Planner, a full-stack web application aimed at simplifying event coordination, which involved designing, building, and documenting both frontend and backend.

You’ve also explored CRUD-based websites with MySQL and PHP, taken on fuzzy logic and PCA projects in Visual Studio Code, and developed an SVM-based flood prediction model — showing you're not confined to one stack or paradigm.

🧠 Smart India Hackathon & Operational Research
Saran played a leading role in crafting a compelling proposal for the Smart India Hackathon 2024, titled “Automated Oil Spill Detection System: Integrating AIS Data and Satellite Imagery for Environmental Protection”. His contribution spanned everything from data analysis and architecture to a full Overleaf-based LaTeX report with in-depth problem statements, methodology, and diagrams.

In academics, you've also worked on an Operations Research project titled “Healthcare Optimization and Medical Image Processing.” This integrated LP-based resource allocation with chest X-ray analysis using machine learning, showcasing both analytical and practical prowess.

🌐 Problem-Solving & Algorithmic Thinking
You're naturally drawn to algorithmic challenges. You’ve implemented the Painter’s Partition Problem in both Python and C, worked on palindrome formation, tackled k-ary tree problems, and analyzed array vs. linked list trade-offs.

You don’t stop at implementation — you dive deep into time complexity analysis, give examples with outputs, and reflect on real-world applications, showing your methodical and reflective mindset.

🧪 Image Processing Proficiency
One of your most technically comprehensive projects involved digital image processing. You’ve carried out:

Smoothing: Mean, median, weighted average, min-max, and Gaussian filters

Contrast enhancement

Logical operations on binary images

Noise addition & restoration

Frequency domain filtering (Ideal, Gaussian, and Butterworth LPF/HPF)

You generated a full LaTeX Overleaf report with code, visuals, outputs, inference, and purpose — the kind of documentation expected from a postgraduate-level project.

📑 Professionalism and Documentation Skills
You maintain excellent documentation habits — from project reports and Overleaf submissions to class diagrams, SRS documents, and UML diagrams. You've repurposed existing systems, like a second-hand car management SRS, into new projects like a hotel booking system, showing resourcefulness and adaptability.

🎤 Communication and Leadership
Saran isn’t just technically sound — he's a clear communicator and natural leader. You’ve:

Anchored college farewell events with confidence

Presented at international conferences

Handled Smart India Hackathon presentations and reports

Engaged in group projects and mentored peers through implementation

Maintained multiple daily commitments (internships, training, MMA, etc.) with balance

💪 Self-Discipline & Extracurriculars
Outside of tech, Saran practices Mixed Martial Arts five days a week. That discipline, grit, and energy show up in your approach to learning and execution. You’re also someone who:

Trains for marathons

Maintains a plant (peace lily!)

Seeks guidance in physical and mental wellness

Keeps pushing forward even under tight deadlines or fatigue

🌍 Global Aspirations
Saran has a global mindset. He’s actively exploring opportunities for studying abroad, possibly pursuing an engineering or research degree with scholarships. He’s open to both academic and industry tracks and values interdisciplinary learning — especially blending AI with healthcare, environment, culture, and language.

✨ Summary of Skills & Interests
Languages & Frameworks: Python, C/C++, JavaScript, React.js, PHP, Flutter
Databases: MongoDB, MySQL
AI/ML Tools: OpenCV, Scikit-learn, TensorFlow/Keras
Tools: VS Code, LaTeX (Overleaf), Jupyter Notebooks, Git
Domains: AI & ML, Image Processing, Web Development, OCR, Optimization
Soft Skills: Communication, Documentation, Leadership, Time Management

🛤️ The Road Ahead
What makes Saran stand out isn’t just the breadth of what he knows — it’s the depth of how he learns and builds. Every project reflects care, consistency, and clarity of thought. Whether it's improving his codebase, exploring NLP for ancient scripts, or training for a competition, he’s guided by purpose and persistence.

As he moves forward, Saran is poised to make meaningful contributions to the fields of AI, computer vision, full-stack development, and applied research. The future is bright — and built by those who code not just for tasks, but for transformation.`;
