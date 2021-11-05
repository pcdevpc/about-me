import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Paul Chun | Software Engineer',
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website. This is my portfolio & project list, and my updated resume.',
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Paul',
  subtitle: `I'm a Software Engineer`,
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I'm a software engineer with 5+ years of expereince in IT, Network, Security industry.`,
  paragraphTwo: 'I used to use JavaScript, React, C#, .Net, MS SQL and other technical skills.',
  paragraphThree: `Here is my resume!`,
  resume: 'https://drive.google.com/file/d/1n9p1_X0lfaVsUFmnxvy1ObsvMSgE4LwG/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'kitchmet.PNG',
    title: 'Kitchmet',
    info: `Built start-up company's website from the scratch`,
    info2: `Used React, JavaScript, HTML, CSS, C#, .Net, MS SQL`,
    url: 'https://kitchmet.azurewebsites.net/',
    repo: 'https://github.com/pcdevpc/Project-samples', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'servycing.PNG',
    title: 'Servycing',
    info: 'Frontend portfolio',
    info2: 'Used React, JavaScript, HTML, CSS, Responsive, Styled component and etc...',
    url: 'https://pcdevpc.github.io/frontend-project-1/',
    repo: 'https://github.com/pcdevpc/frontend-project-1', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'game.PNG',
    title: 'Space Invader Game',
    info: 'Game made with Kaboom JS',
    info2: '',
    url: 'https://Space-invader-by-PC.paulchun.repl.co',
    repo: 'https://replit.com/@PaulChun/Space-invader-by-PC', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: `Let's talk!`,
  btn: 'Email me',
  email: 'paul.dvlpr@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/paulchundev/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/pcdevpc',
    },
  ],
};
