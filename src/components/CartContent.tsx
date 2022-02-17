import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';
import CartColumns from './CartColumns';
import CartItem from './CartItem';
import CartTotals from './CartTotals';

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <div>
      <CartColumns />
      {cart.map(cartItem => (
        <CartItem key={cartItem.id} {...cartItem} />
      ))}
      <hr />
      <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-center justify-between mt-8">
        <Link
          to="/products"
          className=" inline-block px-4 py-1 bg-black text-white rounded capitalize"
        >
          Continue shopping
        </Link>
        <button
          type="button"
          onClick={clearCart}
          className="text-white bg-red-600 rounded px-4 py-1 capitalize"
        >
          Clear shopping cart
        </button>
      </div>
      <CartTotals />
    </div>
  );
};

export default CartContent;
