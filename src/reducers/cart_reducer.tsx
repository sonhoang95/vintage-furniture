import { stat } from 'fs';
import { CartContextProps } from '../context/cart_context';

export type CartReducerType =
  | 'ADD_TO_CART'
  | 'REMOVE_CART_ITEM'
  | 'TOGGLE_CART_ITEM_AMOUNT'
  | 'CLEAR_CART'
  | 'COUNT_CART_TOTALS';

export interface CartReducerAction<T> {
  type: CartReducerType;
  payload?: T;
}

export const cart_reducer = (
  state: CartContextProps,
  action: CartReducerAction<any>
) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { id, color, amount, product } = action.payload;
      // check if item is already in the cart
      const tempProduct = state.cart.find(item => item.id === id + color);

      // handle existing items
      if (tempProduct) {
        const tempCart = state.cart.map(cartItem => {
          if (cartItem.id === id + color) {
            let newAmount = cartItem.amount + amount;
            if (newAmount > cartItem.max) {
              newAmount = cartItem.max;
            }
            return { ...cartItem, amount: newAmount };
          } else {
            return cartItem;
          }
        });
        return { ...state, cart: tempCart };
      }
      // handle new items (if item is not in the cart then we create a new item with these properties)
      else {
        const newItem = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
    }
    case 'REMOVE_CART_ITEM': {
      return {
        ...state,
        cart: state.cart.filter(cartItem => cartItem.id !== action.payload),
      };
    }
    case 'CLEAR_CART': {
      return { ...state, cart: [] };
    }
    case 'TOGGLE_CART_ITEM_AMOUNT': {
      const { id, value } = action.payload;

      const tempCart = state.cart.map(cartItem => {
        if (cartItem.id === id) {
          if (value === 'inc') {
            let newAmount = cartItem.amount + 1;
            if (newAmount > cartItem.max) {
              newAmount = cartItem.max;
            }
            return { ...cartItem, amount: newAmount };
          }
          if (value === 'dec') {
            let newAmount = cartItem.amount - 1;
            if (newAmount < 1) {
              newAmount = 1;
            }
            return { ...cartItem, amount: newAmount };
          }
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    }
    case 'COUNT_CART_TOTALS': {
      const { total_amount, total_items } = state.cart.reduce(
        (total, cartItem) => {
          const { price, amount } = cartItem;
          total.total_items += amount;
          total.total_amount += price * amount;
          return total;
        },
        {
          total_items: 0,
          total_amount: 0,
        }
      );
      return { ...state, total_amount, total_items };
    }
    default:
      throw new Error(`no matching ${action.type} action type`);
  }
};
