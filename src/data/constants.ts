import {
  html,
  css,
  figma,
  git,
  js,
  laravel,
  next,
  prisma,
  tailwind,
} from '../assets/icons';
import { Navs, Projects, Skills } from '../types/constant';
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
} from '../assets/image';

// import { SiHtml5,SiCss3 } from "react-icons/si";

export const skillData: Skills[] = [
  {
    id: 1,
    icon: html,
    title: 'HTML',
    subtitle: 'Structure for web content.',
    progress: 70,
  },
  {
    id: 2,
    icon: css,
    title: 'CSS',
    subtitle: 'Crafts styles and layouts.',
    progress: 70,
  },
  {
    id: 3,
    icon: figma,
    title: 'Figma',
    subtitle: 'Streamlined collaboration.',
    progress: 70,
  },
  {
    id: 4,
    icon: git,
    title: 'Git',
    subtitle: 'Version control for coding.',
    progress: 80,
  },
  {
    id: 5,
    icon: js,
    title: 'Javascript',
    subtitle: 'Powers interactivity on the web.',
    progress: 70,
  },
  {
    id: 6,
    icon: laravel,
    title: 'Laravel',
    subtitle: 'Robust framework for web apps.',
    progress: 70,
  },
  {
    id: 7,
    icon: next,
    title: 'Next',
    subtitle: 'Frontend reactivity experiences.',
    progress: 70,
  },
  {
    id: 8,
    icon: prisma,
    title: 'Prisma',
    subtitle: 'Efficient databse management.',
    progress: 70,
  },
  {
    id: 9,
    icon: tailwind,
    title: 'Tailwind',
    subtitle: 'Utility-first CSS development.',
    progress: 70,
  },
];

export const navLinks: Navs[] = [
  {
    href: '#home',
    label: 'Home',
  },
  {
    href: '#about',
    label: 'About Me',
  },
  {
    href: '#skills',
    label: 'Skills',
  },
  {
    href: '#projects',
    label: 'Projects',
  },
];

export const projData: Projects[] = [
  {
    id: 1,
    title: 'Tutorial: NFT Card Component',
    imgURL: projectOne,
    subtitle: 'Component',
    link: 'https://nft-preview-card-rho-woad.vercel.app/',
    description:
      'Crafting Engaging Digital Collectibles with Next.js and Tailwind CSS.',
    repo: 'https://github.com/recyclecodes/nft-preview-card',
  },
  {
    id: 2,
    title: 'Tindog: Tinder for Dogs',
    imgURL: projectTwo,
    subtitle: 'Landing Page',
    link: 'https://tindog-lemon-eight.vercel.app/',
    description:
      'Tindog is a vibrant and playful landing page designed to introduce the concept of "Tinder for Dogs" to pet lovers worldwide. This landing page serves as the gateway to a fun and interactive platform where dog owners can connect, socialize, and arrange playdates for their furry companions. ',
    repo: 'https://github.com/recyclecodes/tindog',
  },
  {
    id: 3,
    title: 'Friskay: Online Store for Cat Foods',
    imgURL: projectThree,
    subtitle: 'Landing Page',
    link: 'https://www.figma.com/file/2agrsKOLejclUDycWsFJA3/Bonkers?type=design&mode=dev&t=vvdssPqDpYlCAfiL-1',
    description: `Firskay's landing page design in Figma embodies the essence of a modern and user-friendly online store dedicated to cat foods. With a focus on simplicity, elegance, and usability, the design showcases an array of high-quality cat food products while providing a seamless browsing and shopping experience for feline enthusiasts.`,
  },
  {
    id: 4,
    title: 'QR Code Component',
    imgURL: projectFour,
    subtitle: 'Component',
    link: 'https://qr-code-component-ten-rho.vercel.app/',
    description:
      'This project aims to develop a QR code component using Next.js, a popular React framework for building web applications, and Tailwind CSS, a utility-first CSS framework for designing modern and responsive web interfaces.',
    repo: 'https://github.com/recyclecodes/qr-code-component',
  },
  {
    id: 5,
    title: 'Fit Flex',
    imgURL: projectFive,
    subtitle: 'React App',
    link: 'https://fit-flex-theta.vercel.app/',
    description:
      'FitFlex is a web app that offers a wide range of exercise routines tailored to users fitness goals. It features categorized exercises by body parts, enabling users to discover and manage workouts easily. FitFlex also integrates with external APIs for exercise videos, enhancing the user experience.',
    repo: 'https://github.com/recyclecodes/vite-react-fit-flex',
  },
  {
    id: 6,
    title: 'Inventory Control System',
    imgURL: projectSix,
    subtitle: 'Fullstack Nextjs (SSR)',
    link: 'https://ics-next-fullstack-y43w.vercel.app/',
    description:
      'The inventory control system manages stock levels and tracks inventory movements in real-time. It supports multiple users with different roles (Superadmin, Admin, User) across companies, allowing efficient management of items, transfers between users and companies, and notifications for seamless operations and oversight.',
    repo: 'https://github.com/recyclecodes/ics-next-fullstack',
  },
];
