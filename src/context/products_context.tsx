import React, { useContext, useEffect, useReducer } from 'react';
import { products_reducer } from '../reducers/products_reducer';
import { IProduct, ProductDetails, ProviderProps } from '../types';
import { products_url as url } from '../utils/constant';
import axios from 'axios';

export interface ProductsState {
  products_loading: boolean;
  products_error: boolean;
  products: IProduct[];
  featured_products: IProduct[];
  single_product_loading: boolean;
  single_product_error: boolean;
  single_product: ProductDetails;
  getSingleProduct: (url: string) => void;
}
export const ProductContext = React.createContext({} as ProductsState);

const initialState = {
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
  getSingleProduct: (url: string) => {
    return;
  },
};

export const ProductProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(products_reducer, initialState);

  const getProducts = async (url: string) => {
    dispatch({ type: 'GET_PRODUCTS_BEGIN' });
    try {
      const response = await axios.get(url);
      const products: IProduct[] = response.data;
      dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: products });
    } catch (error) {
      dispatch({ type: 'GET_PRODUCTS_ERROR' });
    }
  };

  const getSingleProduct = async (url: string) => {
    dispatch({ type: 'GET_SINGLE_PRODUCT_BEGIN' });
    try {
      const response = await axios.get(url);
      const single_product: ProductDetails = response.data;
      dispatch({ type: 'GET_SINGLE_PRODUCT_SUCCESS', payload: single_product });
    } catch (error) {
      dispatch({ type: 'GET_SINGLE_PRODUCT_ERROR' });
    }
  };

  useEffect(() => {
    getProducts(url);
  }, []);

  return (
    <ProductContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductContext);
};
