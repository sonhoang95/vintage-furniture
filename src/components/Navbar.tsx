import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/global_context';
import { links } from '../utils/constant';
import { CartButtons } from './Buttons';

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <header className="pt-8 pb-16 lg:pb-0 lg:mb-12">
      <div className="container mx-auto px-8 lg:px-32">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <h1 className="text-2xl font-bold">
              Vint<span className="text-orange-400">age</span>
            </h1>
          </Link>

          {/* Mobile Toggle */}
          <button className="block lg:hidden text-xl" onClick={openSidebar}>
            <FaBars />
          </button>

          {/* Navbar Links */}
          <ul className="hidden lg:flex items-center gap-12 capitalize">
            {links.map(link => {
              const { id, text, url } = link;
              return (
                <li key={id}>
                  <Link to={url} className="hover:text-orange-400">
                    {text}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link to="checkout" className="hover:text-orange-400">
                Checkout
              </Link>
            </li>
          </ul>

          {/* Cart Buttons */}
          <CartButtons show={false} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
