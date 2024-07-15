import { navLinks } from '../../../data/constants';

type MobileNavProps = {
  closeMobileNav: () => void;
};

const MobileNav: React.FC<MobileNavProps> = ({ closeMobileNav }) => {
  const handleLinkClick = () => {
    closeMobileNav();
  };

  return (
    <div className="lg:hidden block absolute top-16 bg-body min-h-screen left-0 right-0 transition">
      <ul className="text-center text-xl p-28">
        {navLinks.map((item) => (
          <li className="my-4 py-4 border-b border-gray-300" key={item.label}>
            <a
              href={item.href}
              className="leading-normal text-xl text-navlink font-medium"
              onClick={handleLinkClick} // Close MobileNav on link click
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
