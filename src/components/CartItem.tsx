import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';
import { formatPrice } from '../utils/helpers';
import { AmountButton } from './Buttons';

export interface CartItemProps {
  id: string;
  price: number;
  image: string;
  name: string;
  color: string;
  amount: number;
}
const CartItem = ({ id, price, image, name, color, amount }: CartItemProps) => {
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {};

  const decrease = () => {};
  return (
    <>
      <hr />
      <section className="grid grid-cols-[200px_auto_auto] lg:grid-cols-[1fr_1fr_1fr_1fr_auto] grid-rows-[75px] gap-y-12 gap-x-4 justify-items-center my-12 items-center">
        <div className="grid grid-rows-[75px] grid-cols-[75px_125px] lg:grid-cols-[100px_200px] items-center gap-4 text-left">
          <img
            className="w-full h-full object-cover block rounded"
            src={image}
            alt={name}
          />
          <div className="capitalize tracking-wider space-y-1">
            <h5 className="font-bold text-sm lg:text-base">{name}</h5>
            <p className="text-gray-500 text-sm flex items-center justify-start gap-2">
              color :{' '}
              <span
                style={{ background: color }}
                className="inline-block w-4 h-4 rounded-full"
              ></span>
            </p>
            <h5 className="text-sm block lg:hidden text-orange-600 font-semibold">
              {formatPrice(price)}
            </h5>
          </div>
        </div>
        <h5 className="hidden lg:block text-orange-600 font-semibold tracking-wider">
          {formatPrice(price)}
        </h5>
        <div className="lg:ml-8">
          <AmountButton
            amount={amount}
            onCartDecrement={decrease}
            onCartIncrement={increase}
          />
        </div>
        <h5 className="hidden lg:block font-semibold text-gray-500 tracking-wider lg:ml-12">
          {formatPrice(price * amount)}
        </h5>
        <button
          type="button"
          onClick={() => removeItem(id)}
          className="bg-red-600 text-white p-1 text-sm rounded"
        >
          <FaTrash />
        </button>
      </section>
    </>
  );
};

export default CartItem;
