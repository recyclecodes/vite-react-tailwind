import { useState } from 'react';
// import { Link } from 'react-scroll';
import { RiMenu4Fill, RiCloseLine } from 'react-icons/ri';
import { navLinks } from '../../data/constants';
import MobileNav from './MobileNav';
import Logo from '../Logo';

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <header className="padding-x py-8 absolute z-50 w-full">
      <nav className="flex justify-between items-center lg:max-w-[80%] mx-auto">
        <Logo />
        <ul className="flex-1 flex justify-end items-center gap-16 max-lg:gap-7 max-[770px]:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              {/* <Link spy={true} smooth={true} duration={500} to={item.href}> */}
              <a
                href={item.href}
                className="leading-normal text-xl text-navlink font-medium relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              >
                {item.label}
              </a>
              {/* </Link> */}
            </li>
          ))}
        </ul>

        {click && <MobileNav />}
        <button
          className="text-2xl transition min-[769px]:hidden"
          onClick={handleClick}
        >
          {click ? <RiCloseLine /> : <RiMenu4Fill />}
        </button>
      </nav>
    </header>
  );
};

export default Nav;
