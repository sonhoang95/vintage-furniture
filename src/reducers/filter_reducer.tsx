import { FilterState } from '../context/filter_context';

export type FilterTypes =
  | 'LOAD_PRODUCTS'
  | 'SET_GRIDVIEW'
  | 'SET_LISTVIEW'
  | 'SORT_PRODUCTS'
  | 'UPDATE_SORT'
  | 'UPDATE_FILTER'
  | 'FILTER_PRODUCTS'
  | 'CLEAR_FILTER';

export interface FilterAction {
  type: FilterTypes;
  payload?: any;
}

export const filter_reducer = (state: FilterState, action: FilterAction) => {
  switch (action.type) {
    case 'LOAD_PRODUCTS': {
      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
      };
    }
    default:
      throw new Error(`no matching ${action.type} action type`);
  }
};
