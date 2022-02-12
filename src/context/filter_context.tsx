import React, { useContext, useEffect, useReducer } from 'react';
import { filter_reducer } from '../reducers/filter_reducer';
import { IProduct, ProviderProps } from '../types';
import { useProductsContext } from './products_context';

export interface FilterState {
  filtered_products: IProduct[];
  all_products: IProduct[];
  grid_view: boolean;
}

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
};

export const FilterContext = React.createContext({} as FilterState);

export const FilterProvider = ({ children }: ProviderProps) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(filter_reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'LOAD_PRODUCTS', payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
