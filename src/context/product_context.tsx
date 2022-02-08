import React, { useContext, useReducer } from 'react';
import { reducer } from '../reducers/product_reducer';
import { ProviderProps } from '../types';

export interface ProductsState {}
export const ProductContext = React.createContext({} as ProductsState);

const initialState: ProductsState = {};

export const ProductProvider = ({ children }: ProviderProps) => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ProductContext.Provider value="product">
      {children}
    </ProductContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductContext);
};
