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
  }
  throw new Error(`no matching ${action.type} action type`);
};
