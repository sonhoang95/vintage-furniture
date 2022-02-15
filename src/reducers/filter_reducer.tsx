import { FilterState } from '../context/filter_context';

export type FilterTypes =
  | 'LOAD_PRODUCTS'
  | 'SET_GRIDVIEW'
  | 'SET_LISTVIEW'
  | 'SORT_PRODUCTS'
  | 'UPDATE_SORT'
  | 'UPDATE_FILTERS'
  | 'FILTER_PRODUCTS'
  | 'CLEAR_FILTERS';

export interface FilterAction {
  type: FilterTypes;
  payload?: any;
}

export const filter_reducer = (state: FilterState, action: FilterAction) => {
  switch (action.type) {
    case 'LOAD_PRODUCTS': {
      let maxPrice = action.payload.map(
        (product: { price: any }) => product.price
      );
      maxPrice = Math.max(...maxPrice);
      return {
        ...state,
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
        all_products: [...action.payload],
        filtered_products: [...action.payload],
      };
    }
    case 'SET_GRIDVIEW': {
      return { ...state, grid_view: true };
    }
    case 'SET_LISTVIEW': {
      return { ...state, grid_view: false };
    }
    case 'UPDATE_SORT': {
      return { ...state, sort: action.payload };
    }
    case 'SORT_PRODUCTS': {
      const { sort, filtered_products } = state;
      let tempProducts = [...filtered_products];
      if (sort === 'price-lowest') {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }
      if (sort === 'price-highest') {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }
      if (sort === 'name-a') {
        tempProducts = tempProducts.sort((a, b) =>
          // sort by letter a - z (localeCompare also compares casing)
          a.name.localeCompare(b.name)
        );
      }
      if (sort === 'name-z') {
        tempProducts = tempProducts.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
      return { ...state, filtered_products: tempProducts };
    }
    case 'UPDATE_FILTERS':
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };
    case 'FILTER_PRODUCTS':
      const { all_products } = state;
      let tempProducts = [...all_products];
      // filtering (note: we have to return the default all data when we do any kind of filtering)
      const { text, category, color, company, shipping, price } = state.filters;
      // text
      if (text) {
        tempProducts = tempProducts.filter(product => {
          return product.name.toLowerCase().includes(text);
        });
      }
      // category
      if (category !== 'all') {
        tempProducts = tempProducts.filter(
          product => product.category === category
        );
      }
      // company
      if (company !== 'all') {
        tempProducts = tempProducts.filter(
          product => product.company === company
        );
      }
      // color
      if (color !== 'all') {
        tempProducts = tempProducts.filter(product => {
          return product.colors.find(c => c === color);
        });
      }

      // price
      tempProducts = tempProducts.filter(product => product.price <= price);

      // shipping
      if (shipping) {
        tempProducts = tempProducts.filter(
          product => product.shipping === true
        );
      }
      return { ...state, filtered_products: tempProducts };
    case 'CLEAR_FILTERS':
      return {
        ...state,
        filters: {
          ...state.filters,
          text: '',
          category: 'all',
          company: 'all',
          color: 'all',
          price: state.filters.max_price,
          shipping: false,
        },
      };
    default:
      throw new Error(`no matching ${action.type} action type`);
  }
};
