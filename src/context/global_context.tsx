import React, { useContext, useReducer } from 'react';
import { reducer } from '../reducers/global_reducer';
import { ProviderProps } from '../types';

export interface GlobalState {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}
export const GlobalContext = React.createContext({} as GlobalState);

const initialState: GlobalState = {
  isSidebarOpen: false,
  openSidebar: () => {
    return;
  },
  closeSidebar: () => {
    return;
  },
};

export const GlobalProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: 'OPEN_SIDEBAR' });
  };

  const closeSidebar = () => {
    dispatch({ type: 'CLOSE_SIDEBAR' });
  };
  return (
    <GlobalContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
