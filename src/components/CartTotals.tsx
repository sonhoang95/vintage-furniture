import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';
import { formatPrice } from '../utils/helpers';

const CartTotals = () => {
  const { total_amount, shipping_fees } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();
  return (
    <div className="flex justify-center lg:justify-end mt-12">
      <div>
        <article className="border border-gray-400 px-12 py-6 rounded tracking-wider">
          <h5 className="grid grid-cols-[200px_1fr] font-semibold mb-2">
            Subtotal : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p className="grid grid-cols-[200px_1fr] mb-4">
            Shipping fees: <span>{formatPrice(shipping_fees)}</span>
          </p>
          <hr />
          <h4 className="grid grid-cols-[200px_1fr] mt-8 text-xl font-bold">
            Order total:{' '}
            <span>{formatPrice(total_amount + shipping_fees)}</span>
          </h4>
        </article>
        {myUser ? (
          <Link
            to="/checkout"
            className="bg-orange-400 text-white w-full inline-block font-semibold uppercase text-center mt-4 px-3 py-1 rounded mb-12"
          >
            Proceed to checkout
          </Link>
        ) : (
          <button
            className="bg-orange-400 text-white w-full inline-block font-semibold uppercase text-center mt-4 px-3 py-1 rounded mb-12"
            onClick={loginWithRedirect}
          >
            Login to checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default CartTotals;
