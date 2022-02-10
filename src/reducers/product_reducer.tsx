import { IProduct, ProductsState } from '../context/product_context';

export type ProductsActionTypes =
  | 'GET_PRODUCTS_BEGIN'
  | 'GET_PRODUCTS_ERROR'
  | 'GET_PRODUCTS_SUCCESS';

export interface ProductsAction {
  type: ProductsActionTypes;
  payload?: any;
}

export const reducer = (state: ProductsState, action: ProductsAction) => {
  switch (action.type) {
    case 'GET_PRODUCTS_BEGIN':
      return { ...state, isLoading: true };
    case 'GET_PRODUCTS_SUCCESS':
      const featured_products = action.payload.filter(
        (product: IProduct) => product.featured === true
      );
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featured_products,
      };
    case 'GET_PRODUCTS_ERROR':
      return { ...state, isLoading: false, isError: true };
    default:
      throw new Error(`no matching ${action.type} action type`);
  }
};
