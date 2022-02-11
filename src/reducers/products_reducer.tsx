import { ProductsState } from '../context/products_context';
import { IProduct } from '../types';

export type ProductsActionTypes =
  | 'GET_PRODUCTS_BEGIN'
  | 'GET_PRODUCTS_ERROR'
  | 'GET_PRODUCTS_SUCCESS'
  | 'GET_SINGLE_PRODUCT_BEGIN'
  | 'GET_SINGLE_PRODUCT_ERROR'
  | 'GET_SINGLE_PRODUCT_SUCCESS';

export interface ProductsAction {
  type: ProductsActionTypes;
  payload?: any;
}

export const reducer = (state: ProductsState, action: ProductsAction) => {
  switch (action.type) {
    case 'GET_PRODUCTS_BEGIN':
      return { ...state, products_loading: true };
    case 'GET_PRODUCTS_SUCCESS':
      const featured_products = action.payload.filter(
        (product: IProduct) => product.featured === true
      );
      return {
        ...state,
        products_loading: false,
        products: action.payload,
        featured_products,
      };
    case 'GET_PRODUCTS_ERROR':
      return { ...state, products_loading: false, products_error: true };
    case 'GET_SINGLE_PRODUCT_BEGIN':
      return {
        ...state,
        single_product_loading: true,
        single_product_error: false,
      };
    case 'GET_SINGLE_PRODUCT_SUCCESS':
      return {
        ...state,
        single_product_loading: false,
        single_product: action.payload,
      };
    case 'GET_SINGLE_PRODUCT_ERROR':
      return {
        ...state,
        single_product_loading: false,
        single_product_error: true,
      };
    default:
      throw new Error(`no matching ${action.type} action type`);
  }
};
