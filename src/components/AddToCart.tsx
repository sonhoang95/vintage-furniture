import { useState } from 'react';
import { ProductDetails } from '../types';
import { FaCheck } from 'react-icons/fa';
import { AmountButton } from './Buttons';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';

const AddToCart = ({ product }: { product: ProductDetails }) => {
  const { addToCart } = useCartContext();
  const { id, stock, colors } = product;

  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleCartIncrement = () => {
    if (amount >= stock) {
      setAmount(stock);
    } else {
      setAmount(prevAmount => prevAmount + 1);
    }
  };

  const handleCartDecrement = () => {
    if (amount <= 1) {
      setAmount(1);
    } else {
      setAmount(prevAmount => prevAmount - 1);
    }
  };
  return (
    <section>
      <div className="grid grid-cols-[125px_1fr]">
        <span className="font-bold">Colors : </span>
        <div className="flex items-center gap-2">
          {colors.map((color, index) => {
            return (
              <button
                onClick={() => setMainColor(color)}
                key={index}
                className={`w-5 h-5 rounded-full opacity-50 flex items-center justify-center ${
                  mainColor === color ? 'opacity-100' : null
                }`}
                style={{ background: color }}
              >
                {mainColor === color && (
                  <span className="text-xs text-white">
                    <FaCheck />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
      <div>
        <AmountButton
          amount={amount}
          stock={stock}
          onCartIncrement={handleCartIncrement}
          onCartDecrement={handleCartDecrement}
        />
        <Link
          to="/cart"
          className="inline-block px-12 lg:px-8 py-3 uppercase text-sm font-bold bg-orange-400 hover:bg-orange-500 transition-colors duration-300 text-white mb-8 lg:mb-0"
          onClick={() => addToCart(id, mainColor, amount, product)}
        >
          Add to cart
        </Link>
      </div>
    </section>
  );
};

export default AddToCart;
