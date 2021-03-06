import { Link } from 'react-router-dom';
import { BsBagFill } from 'react-icons/bs';
import { useGlobalContext } from '../../context/global_context';
import { useCartContext } from '../../context/cart_context';
import { useUserContext } from '../../context/user_context';
import { FaUserPlus, FaUserMinus } from 'react-icons/fa';

interface CartButtonsProps {
  show: boolean;
}

const CartButtons = ({ show }: CartButtonsProps) => {
  const { closeSidebar } = useGlobalContext();
  const { total_items, clearCart } = useCartContext();
  const { loginWithRedirect, logout, myUser } = useUserContext();
  return (
    <div
      className={`gap-8 items-center flex lg:flex ${
        show ? 'block px-6 justify-center' : 'hidden'
      }`}
    >
      <Link
        onClick={closeSidebar}
        to="/cart"
        className="bg-orange-400 p-2 text-white rounded-full text-sm relative"
      >
        <BsBagFill />
        <span className="absolute w-5 h-5 flex items-center justify-center text-xs rounded-full top-0 right-0 bg-black text-white transform translate-x-2 -translate-y-2">
          {total_items}
        </span>
      </Link>
      {!myUser ? (
        <button
          className="px-6 py-1 rounded-full border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white transition-colors duration-300 flex items-center gap-1"
          onClick={loginWithRedirect}
        >
          <span className="text-lg">
            <FaUserPlus />
          </span>{' '}
          Login
        </button>
      ) : (
        <button
          className="px-6 py-1 rounded-full border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white transition-colors duration-300 flex items-center gap-1"
          onClick={() => {
            clearCart();
            logout({ returnTo: window.location.origin });
          }}
        >
          <span className="text-lg">
            <FaUserMinus />
          </span>{' '}
          Logout
        </button>
      )}
    </div>
  );
};

export default CartButtons;
