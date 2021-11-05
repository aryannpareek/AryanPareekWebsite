import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Aryan Pareek', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Aryan Pareek', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Aryan Pareek',
  subtitle: 'I am a software developer and aspiring entrepreneur',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am currently a junior at UC San Diego pursuing my B.S. degree in Computer Science. Through my prior coursework, personal projects, and internships, I have gained experience with Java, Python, C++, C, Swift, ARM, x86, and Bash. Additionally, I\'m currently learning front-end development (HTML, CSS, and JavaScript).',
  paragraphTwo:
    'Furthermore, working as a leader in my past projects and internships has sharpened my ability to learn in a fast-paced environment, be an effective communicator, and make good technical judgements. I’m result-oriented and strive to solve problems through innovative solutions.',
  paragraphThree: 'In my free time, you can catch me playing (and watching) numerous sports such as football, basketball, and tennis. I enjoy being outdoors and travelling, whether it\'s hiking at national parks or booking spontaneous vacations with my freinds. I value new expereinces and getting comfortable with being uncomfortable.',
  resume: 'https://docs.google.com/document/d/1DiFH86dFq1e6QAw7why-1j5Oetp2giV6cNMbVAQKLLU/edit', 
  // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'staffing.png',
    title: 'STAFFing Tool - System for Tracking and Allocating FTEs Forecasting',
    info: 'For my SDE internship project at General Atomics Aeronautical Systems, I developed the first iteration of “STAFFing Tool,” an app that provides access to all General Atomics Aeronautical Systems data sources to enable comprehensive resource planning. The application provides summaries of important data to assist managers and supervisors in making informed budgeting decisions. For example, company staff could utilize STAFFing Tool to see where they need to adjust resource allocation in areas such as labor hours or employee headcount per project. In sum, STAFFing tool saves General Atomics time and money by providing an easy to interpret, aggregate visualization of critical data points.',
    info2: '',
    // url: '', 
    // repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bujo2.png',
    title: 'Bullet Journal Web App',
    info: 'A bullet journal web app built by my team and I for our UCSD CSE 110 project. My contributions for this project included working as a front-end developer with HTML, CSS, and JavaScript. Some of my contributions consisted of styling and developing the daily log, weekly log, and tags. Additionally, I helped develop the media section to integrate YouTube, Pinterest, and SoundCloud support.',
    info2: 'Click the link below or the screenshot to the right for a live demo!',
    url: 'https://cse110-sp21-group31.netlify.app/daily_log', 
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'war2.png',
    title: 'iOS Mobile Card Game App',
    info: 'An iOS mobile card game app I built using Xcode and Swift. The app consists of popular games such as the "War" card game and "Slots" matching game. Repositories for both games can be found on my GitHub!',
    info2: '',
    // url: '',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },

  //TODO
];

// CONTACT DATA
export const contactData = {
  cta: 'Need something more direct? Let\'s collaborate!',
  btn: 'Email Me',
  email: 'apareek369@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'calendar',
      url: 'https://calendly.com/aryanpareek/meeting-with-aryan',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/aryannpareek/',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/aryannpareek',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/aryanpareek/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/aryannpareek',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
