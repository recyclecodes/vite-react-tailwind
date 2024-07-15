import SkillCard from '../components/SkillCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-start w-[90%] mx-auto min-h-full"
    >
      <div className="relative my-24">
        <div className="absolute w-16 h-12 left-20 top-2 bg-accent"></div>
        <h2 className="text-4xl lg:text-5xl font-bold ">Skills.</h2>
      </div>
      <div data-aos='fade-up' className="grid items-center grid-rows-3 xl:grid-flow-col xl:w-[70%] w-[80%] gap-x-8 gap-y-8 lg:gap-y-16">
        <SkillCard />
      </div>
    </section>
  );
};

export default Skills;
