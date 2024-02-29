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
    subtitle: 'Blog',
    link: 'https://gaserojales.hashnode.dev/building-a-nft-card-component-with-nextjs-and-tailwind-css',
    description:
      'Crafting Engaging Digital Collectibles: A Hands-On Guide to Building an NFT Card Component with Next.js and Tailwind CSS.',
  },
  {
    id: 2,
    title: 'Tindog: Tinder for Dogs',
    imgURL: projectTwo,
    subtitle: 'Landing Page',
    link: 'https://github.com/recyclecodes/tindog',
    description:
      'Tindog is a vibrant and playful landing page designed to introduce the concept of "Tinder for Dogs" to pet lovers worldwide. This landing page serves as the gateway to a fun and interactive platform where dog owners can connect, socialize, and arrange playdates for their furry companions. ',
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
  },
];
