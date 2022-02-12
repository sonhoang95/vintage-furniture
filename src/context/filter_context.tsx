import React, { useContext, useEffect, useReducer } from 'react';
import { filter_reducer } from '../reducers/filter_reducer';
import { IProduct, ProviderProps } from '../types';
import { useProductsContext } from './products_context';

export interface FilterState {
  filtered_products: IProduct[];
  all_products: IProduct[];
  grid_view: boolean;
  sort: string;
  setGridView: () => void;
  setListView: () => void;
  handleSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: 'price-lowest',
  setGridView: () => {
    return;
  },
  setListView: () => {
    return;
  },
  handleSort: (e: React.ChangeEvent<HTMLSelectElement>) => {
    return;
  },
};

export const FilterContext = React.createContext({} as FilterState);

export const FilterProvider = ({ children }: ProviderProps) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(filter_reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'LOAD_PRODUCTS', payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: 'SORT_PRODUCTS' });
  }, [products, state.sort]);

  const setGridView = () => {
    dispatch({ type: 'SET_GRIDVIEW' });
  };

  const setListView = () => {
    dispatch({ type: 'SET_LISTVIEW' });
  };

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // for demonstration
    // const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: 'UPDATE_SORT', payload: value });
  };

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, handleSort }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
