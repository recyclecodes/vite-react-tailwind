import { projData } from '../../data/constants';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ProjectCard = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      {projData.map((project) => (
        <div data-aos='flip-up' className="flex flex-col items-center">
          <div className="max-w-md mx-auto bg-white  shadow-md overflow-hidden md:max-w-2xl mt-5 transform hover:scale-105 duration-500 ease-in-out">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src={project.imgURL}
                  alt="Man looking at item at a store"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-hero font-semibold">
                  {project.subtitle}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  {project.title}
                </a>
                <p className="mt-2 text-gray-500 line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
