import { motion } from 'framer-motion';
import { profilePic } from '../assets/image';
import Button from '../components/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 xl:max-w-[65%] mx-auto"
    >
      <div
        data-aos="fade-right"
        className="relative xl:w-3/5 flex flex-col justify-center items-start w-full max-xl:padding-x"
      >
        <h1 className="my-5 text-4xl lg:text-[64px] font-bold text-hero leading-normal">
          Turning Code <br />
          Into{' '}
          <span className="text-black bg-gradient-to-r from-primary/55 from-10% to-80%">
            Creative Solutions
          </span>
        </h1>
        <p className="mb-12">
          Passionate aspiring full-stack developer, eager to master coding and
          problem-solving <br /> skills, motivated to contribute to innovative
          projects, and committed <br /> to a career in software development.
        </p>
        <div className="flex flex-wrap gap-5 my-5 w-full">
          <a className="md:w-44 w-full" href="#contact">
            <Button
              label="Contact Me"
              backgroundColor="bg-black md:w-44"
              textColor="text-white"
              border="border-4"
              borderColor="border-black"
              hoverButton=" hover:text-black hover:before:left-0 hover:before:w-full hover:before:bg-white"
            />
          </a>
          <a
            className="md:w-44 w-full"
            href="https://drive.google.com/file/d/1y6G9FdIsEQ9pGwMGsPxx1uVF_7KEeIwo/view?usp=sharing"
            target="_blank"
          >
            <Button
              label="Resume"
              backgroundColor="bg-white md:w-44"
              textColor="text-black"
              border="border-4"
              borderColor="border-black"
              hoverButton=" hover:text-white hover:before:left-0 hover:before:w-full hover:before:bg-black"
            />
          </a>
        </div>
      </div>
      <div
        data-aos="flip-right "
        className="hidden relative flex-1 lg:flex justify-center items-center"
      >
        <img
          src={profilePic}
          alt="profile"
          width={800}
          height={1000}
          className="relative z-10 object-contain"
        />
      </div>
    </motion.section>
  );
};

export default Hero;
