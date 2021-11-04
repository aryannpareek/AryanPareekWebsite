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
  img: 'pfp.jpg',
  paragraphOne:
    'I am currently a junior at UC San Diego pursuing my B.S. degree in Computer Science. Through my prior coursework, personal projects, and internships, I have gained experience with Java, Python, C++, C, Swift, ARM, x86, and Bash. Additionally, I\'m currently learning front-end development (HTML, CSS, and JavaScript).',
  paragraphTwo:
    'Furthermore, working as a leader in my past projects and internships has sharpened my ability to learn in a fast-paced environment, be an effective communicator, and make good technical judgements. I’m result-oriented and strive to solve problems through innovative solutions.',
  paragraphThree: 'In my free time, you can catch me playing (and watching) numerous sports such as football, basketball, and tennis. I enjoy being outdoors and travelling, whether it\'s hiking a new trail at a national park or booking a spontaenous vacation with my freinds. I value new expereinces and getting comfortable with being uncomfortable.',
  resume: 'https://docs.google.com/document/d/1DiFH86dFq1e6QAw7why-1j5Oetp2giV6cNMbVAQKLLU/edit', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
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
    title: '"War" Card Game',
    info: '"War" card game for iOS. Built with Xcode and Swift.',
    info2: '',
    url: 'https://github.com/aryannpareek/WarCardGame',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'slots.png',
    title: '"Slots" Matching Game',
    info: '"Slots" matching game for iOS. Built with Xcode and Swift.',
    info2: '',
    url: 'https://github.com/aryannpareek/CasinoSlotsGame',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '2048.png',
    title: '2048 Game',
    info:
      'My ground-up recreation of the "2048" Game in Java. Game UI is displayed in the terminal.',
    info2: '',
    url: 'https://github.com/aryannpareek/2048-Game-Java',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  //TODO
];

// CONTACT DATA
export const contactData = {
  cta: 'Need something more direct?',
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
