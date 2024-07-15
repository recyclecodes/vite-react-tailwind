import ProjectCard from "../components/ProjectCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-start w-[90%] mx-auto min-h-full"
    >
      <div className="relative mb-24 mt-16">
        <div className="absolute w-16 h-12 left-36 top-[-4px] bg-accent"></div>
        <h2 className="text-4xl lg:text-5xl font-bold ">Projects.</h2>
      </div>
      <div data-aos='flip-up' className="grid grid-rows-3 xl:grid-flow-col  xl:w-[90%] w-[80%] gap-x-8 gap-y-8">
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
