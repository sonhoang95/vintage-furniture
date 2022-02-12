import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

export interface AmountButtonProps {
  amount: number;
  stock: number;
  onCartIncrement: () => void;
  onCartDecrement: () => void;
}

const AmountButton = ({
  amount,
  stock,
  onCartIncrement,
  onCartDecrement,
}: AmountButtonProps) => {
  return (
    <div className="grid grid-cols-3 w-[140px] gap-4 justify-items-center my-6">
      <button
        onClick={onCartDecrement}
        className={`text-lg ${amount <= 1 ? 'text-gray-400' : null}`}
      >
        <FaMinus />
      </button>
      <h2 className="text-2xl font-semibold">{amount}</h2>
      <button
        onClick={onCartIncrement}
        className={`text-lg ${amount >= stock ? 'text-gray-400' : null}`}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default AmountButton;
