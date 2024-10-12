import { pieChart } from "../assets/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section
      id="about"
      className="mx-auto flex h-full items-center justify-between gap-10 max-xl:flex-col-reverse lg:w-[65%]"
    >
      <div data-aos="fade-right" className="flex-1">
        <img
          src={pieChart}
          alt="Pie Chart"
          width={610}
          height={578}
          className="w-full object-contain"
        />
      </div>
      <div data-aos="fade-left" className="flex flex-1 flex-col">
        <div className="relative mb-8">
          <div className="absolute left-[170px] top-[-4px] h-12 w-16 bg-accent"></div>
          <h2 className="text-4xl font-bold lg:text-5xl ">About Me.</h2>
        </div>
        <span>
          <p className="mt-4">
            Hello! I'm{" "}
            <span className="font-semibold">Godfrey Anthony Serojales,</span> a
            full-stack developer driven by{" "}
            <span className="font-semibold">
              {" "}
              creativity and problem-solving{" "}
            </span>
            . My tech journey began with a passion for design, photography, and
            the intricate world of Gunpla kits, leading me to excel in crafting
            beautiful interfaces and efficient code.
          </p>
          <p className="mt-4 text-justify">
            When not coding, you'll find me capturing moments through my lens or
            meticulously assembling Gunpla models, where{" "}
            <span className="font-semibold">attention to detail</span> reigns
            supreme. I also thrive on the challenge of logic games, relishing
            the thrill of cracking complex puzzles. With a diverse range of
            interests, I bring a unique perspective to every project, blending
            creativity with technical expertise to deliver{" "}
            <span className="font-semibold"> flawless solutions</span> that
            delight the senses. Let's collaborate and create something
            extraordinary!
          </p>
        </span>
      </div>
    </section>
  );
};

export default About;
