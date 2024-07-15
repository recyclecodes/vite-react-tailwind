import { useState, useEffect } from 'react';
import { RiMenu4Fill, RiCloseLine } from 'react-icons/ri';
import { navLinks } from '../../data/constants';
import MobileNav from './MobileNav';
import Logo from '../Logo';

const Nav: React.FC = () => {
  const [click, setClick] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileNav = () => {
    setClick(false);
  };

  return (
    <header
      className={`padding-x py-8 z-50 w-full bg-body ${hasScrolled ? 'shadow-md' : ''} sticky top-0`}
    >
      <nav className="flex justify-between items-center lg:max-w-[80%] mx-auto">
        <Logo />
        <ul className="flex-1 flex justify-end items-center gap-16 max-lg:gap-7 max-[770px]:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="leading-normal text-xl text-navlink font-medium relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                onClick={closeMobileNav}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {click && <MobileNav closeMobileNav={closeMobileNav} />}

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
