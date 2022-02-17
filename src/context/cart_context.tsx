import React, { useContext, useEffect, useReducer } from 'react';
import { cart_reducer } from '../reducers/cart_reducer';
import { ProductDetails, ProviderProps } from '../types';

export interface CartContextProps {
  cart: any[];
  total_items: number;
  total_amount: number;
  shipping_fees: number;
  addToCart: (
    id: string,
    color: string,
    amount: number,
    product: ProductDetails
  ) => void;
  removeItem: (id: string) => void;
  toggleAmount: (id: string, value: string) => void;
  clearCart: () => void;
}

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fees: 599,
  addToCart: () => {
    return;
  },
  removeItem: () => {
    return;
  },
  toggleAmount: () => {
    return;
  },
  clearCart: () => {
    return;
  },
};

export const CartContext = React.createContext({} as CartContextProps);

export const CartProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(cart_reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'COUNT_CART_TOTALS' });
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  // add to cart
  const addToCart = (
    id: string,
    color: string,
    amount: number,
    product: ProductDetails
  ) => {
    dispatch({ type: 'ADD_TO_CART', payload: { id, color, amount, product } });
  };

  // remove item
  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_CART_ITEM', payload: id });
  };

  // toggle amount
  const toggleAmount = (id: string, value: string) => {
    dispatch({ type: 'TOGGLE_CART_ITEM_AMOUNT', payload: { id, value } });
  };

  // clear cart
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
