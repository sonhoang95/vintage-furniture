import React, { useContext, useEffect, useReducer } from 'react';
import { filter_reducer } from '../reducers/filter_reducer';
import { IProduct, ProviderProps } from '../types';
import { useProductsContext } from './products_context';

export interface Filters {
  text: string;
  category: string;
  company: string;
  color: string;
  max_price: number;
  min_price: number;
  price: number;
  shipping: boolean;
}
export interface FilterState {
  filtered_products: IProduct[];
  all_products: IProduct[];
  grid_view: boolean;
  sort: string;
  filters: Filters;
  setGridView: () => void;
  setListView: () => void;
  handleSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleFilters: (e: any) => void;
  clearFilters: () => void;
}

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: 'price-lowest',
  filters: {
    text: '',
    category: 'all',
    company: 'all',
    color: 'all',
    max_price: 0,
    min_price: 0,
    price: 0,
    shipping: false,
  },
  setGridView: () => {
    return;
  },
  setListView: () => {
    return;
  },
  handleSort: (e: React.ChangeEvent<HTMLSelectElement>) => {
    return;
  },
  handleFilters: (e: React.ChangeEvent<HTMLInputElement>) => {
    return;
  },
  clearFilters: () => {
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
    dispatch({ type: 'FILTER_PRODUCTS' });
    dispatch({ type: 'SORT_PRODUCTS' });
  }, [products, state.sort, state.filters]);

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

  const handleFilters = (e: React.ChangeEvent) => {
    let name = (e.target as HTMLInputElement).name;
    let value = (e.target as HTMLInputElement).value as
      | string
      | number
      | boolean;
    if (name === 'category') {
      value = e.target.textContent as string;
    }
    if (name === 'color') {
      value = (e.target as HTMLInputElement).dataset.color as string;
      console.log(value);
    }
    if (name === 'price') {
      value = Number(value);
    }
    if (name === 'shipping') {
      value = (e.target as HTMLInputElement).checked;
    }
    dispatch({ type: 'UPDATE_FILTERS', payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: 'CLEAR_FILTERS' });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        handleSort,
        handleFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
