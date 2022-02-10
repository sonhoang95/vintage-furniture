import React, { useContext, useEffect, useReducer } from 'react';
import { reducer } from '../reducers/product_reducer';
import { ProviderProps } from '../types';
import { products_url as url } from '../utils/constant';
import axios from 'axios';

export interface IProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  colors: Color[];
  company: Company;
  description: string;
  category: string;
  shipping?: boolean;
  featured?: boolean;
}

export enum Color {
  Ff0000 = '#ff0000',
  Ffb900 = '#ffb900',
  The000 = '#000',
  The0000Ff = '#0000ff',
  The00Ff00 = '#00ff00',
}

export enum Company {
  Caressa = 'caressa',
  Ikea = 'ikea',
  Liddy = 'liddy',
  Marcos = 'marcos',
}

export interface ProductsState {
  isLoading: boolean;
  isError: boolean;
  products: IProduct[];
  featured_products: IProduct[];
}
export const ProductContext = React.createContext({} as ProductsState);

const initialState: ProductsState = {
  isLoading: false,
  isError: false,
  products: [],
  featured_products: [],
};

export const ProductProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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

  useEffect(() => {
    getProducts(url);
  }, []);
  return (
    <ProductContext.Provider value={{ ...state }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductContext);
};
