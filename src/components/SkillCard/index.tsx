// import { ReactElement } from 'react';
// import { ProgressBar } from './components';
import { skillData } from '../../data/constants';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Card = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      {skillData.map((skill) => (
        <div data-aos='flip-up'
          className="grid grid-cols-8 xl:grid-cols-8 md:grid-cols-12  gap-x-1 w-full "
          key={skill.id}
        >
          {/* <div className="h-4"> */}
          <img
            src={skill.icon}
            alt="Skills"
            className="col-span-1 xl:col-span-1 md:col-span-1 items-center justify-self-start mt-2 h-11 w-11"
          />
          {/* </div> */}
          <div className="col-span-7 xl:col-span-7 md:col-span-11 flex flex-col justify-center">
            <div className="text-left text-black text-xl font-semibold leading-tight">
              {skill.title}
            </div>
            <div className="text-left text-stone-500 lg:text-sm font-medium leading-none">
              {skill.subtitle}
            </div>
          </div>
          {/* <div className="col-span-8 xl:col-span-8 md:col-span-12">
            <ProgressBar progressPercentage={skill.progress} />
          </div> */}
        </div>
      ))}
    </>
  );
};

export default Card;
