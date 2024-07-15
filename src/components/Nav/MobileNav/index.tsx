// import { Link } from 'react-scroll';
import { navLinks } from '../../../data/constants';


const MobileNav = () => {
  return (
    <div className="lg:hidden block absolute top-16 bg-body min-h-screen left-0 right-0 transition">
      <ul className="text-center text-xl p-28">
        {navLinks.map((item) => (
          <li className='my-4 py-4 border-b border-gray-300' key={item.label}>
            {/* <Link spy={true} smooth={true} duration={500} to={item.href}> */}
              <a
                href={item.href}
                className="leading-normal text-xl text-navlink font-medium"
              >
                {item.label}
              </a>
            {/* </Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
