import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/global_context';
import { links } from '../utils/constant';
import { CartButtons } from './Buttons';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside
      className={`${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } transform transition-transform duration-300 fixed lg:static lg:hidden top-0 lef-0 w-full h-full bg-white`}
    >
      <div className="flex items-center justify-between w-full p-8">
        {/* Logo */}
        <Link to="/" onClick={closeSidebar}>
          <h1 className="text-2xl font-bold">
            Vint<span className="text-orange-400">age</span>
          </h1>
        </Link>
        {/* Mobile Toggle */}
        <button className="block lg:hidden text-xl" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="capitalize mb-8">
        {links.map(link => {
          const { id, text, url } = link;
          return (
            <li
              key={id}
              className="px-8 py-4 hover:bg-gray-100 hover:pl-12 transition-all duration-300"
            >
              <Link onClick={closeSidebar} to={url}>
                {text}
              </Link>
            </li>
          );
        })}
        <li className="px-8 py-4 hover:bg-gray-100 hover:pl-12 transition-all duration-300">
          <Link to="/checkout" onClick={closeSidebar}>
            Checkout
          </Link>
        </li>
      </ul>
      <CartButtons show={true} />
    </aside>
  );
};

export default Sidebar;
