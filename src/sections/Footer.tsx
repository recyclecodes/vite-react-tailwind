import { navLinks } from '../data/constants';

const Footer = () => {
  return (
    <section className="flex w-full min-h-8 justify-center">
      <div className="flex flex-col md:space-x-6 space-y-6 md:space-y-0 bg-zinc-900 w-full max-w-full p-8 shadow-lg text-white justify-center">
        <ul className="flex items-center justify-center gap-2">
          {navLinks.map((item) => (
            <li key={item.label}>
              {/* <Link spy={true} smooth={true} duration={500} to={item.href}> */}
              <a
                href={item.href}
                className="leading-normal text-sm text-white font-normal relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              >
                {item.label}
              </a>
              {/* </Link> */}
            </li>
          ))}
        </ul>
        <p className='text-sm flex justify-center font-light gap-1 text-zinc-500'>
          &#169; All Rights Reserved By
          <a href="https://www.linkedin.com/in/g-serojales" target='_blank'><span className='font-medium'>Anthony Serojales</span> </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
