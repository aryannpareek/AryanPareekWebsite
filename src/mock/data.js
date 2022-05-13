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
    'I am currently a senior at UC San Diego pursuing my B.S. degree in Computer Science. Through my prior coursework, personal projects, and internships, I have performed development with Java, Python, C++, C, Swift, ARM, and x86 assembly. Additionally, I\'ve gained hands-on expereince with tools such as git, GDB, Valgrind, MATLAB, and R. I\'m currently learning software development in Kotlin.',
  paragraphTwo:
    'Working as a leader in my past projects and internships has sharpened my ability to learn in a fast-paced environment, be an effective communicator, and make good technical judgements. I\'m result-oriented and strive to solve problems through innovative solutions.',
  paragraphThree: 'In my free time, you can catch me playing (and watching) numerous sports such as football, basketball, and tennis. I enjoy being outdoors and travelling, whether it\'s hiking at national parks or booking spontaneous vacations with my freinds. I value new expereinces and getting comfortable with being uncomfortable.',
  resume: 'https://docs.google.com/document/d/1DiFH86dFq1e6QAw7why-1j5Oetp2giV6cNMbVAQKLLU/edit', 
  // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'qldb.png',
    title: 'Current Role: Amazon SDE Intern',
    info: 'For Summer 2022, I\'ll be working at Amazon as a Software Development Engineering Intern for the Quantum Ledger Database Team (QLDB). QLDB is a fully managed ledger database that provides a transparent, immutable, and cryptographically verifiable transaction log. Use cases include storing financial transactions, reconciling supply chain systems, maintaining claims history, and centralizing digital records.',
    url: 'https://aws.amazon.com/qldb/?trk=b06167e1-43fa-471a-8705-6a37423dd3e1&sc_channel=ps&sc_campaign=acquisition&sc_medium=ACQ-P%7CPS-GO%7CNon-Brand%7CDesktop%7CSU%7CDatabase%7CSolution%7CUS%7CEN%7CDSA&ef_id=Cj0KCQjw4PKTBhD8ARIsAHChzRLSG6UCXPLnVWMqYshW9YK1-w5KPplEfAJ9ylVAxMUi6xNrZ5aNfrkaAuwvEALw_wcB:G:s&s_kwcid=AL!4422!3!579408104777!!!g!!',
  },
  /* {
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

  //TODO */
];

// CONTACT DATA
export const contactData = {
  cta: 'Need something more direct? Let\'s collaborate! Shoot me an email and check out my socials down below!',
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
