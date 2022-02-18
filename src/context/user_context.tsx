import React, { useContext, useEffect, useState } from 'react';
import { ProviderProps } from '../types';
import { useAuth0 } from '@auth0/auth0-react';
import { LogoutOptions, RedirectLoginOptions } from '@auth0/auth0-spa-js';

export interface UserContextProps {
  loginWithRedirect: (
    options?: RedirectLoginOptions | undefined
  ) => Promise<void>;
  logout: (options?: LogoutOptions | undefined) => void;
  myUser: null;
}
export const UserContext = React.createContext({} as UserContextProps);

export const UserProvider = ({ children }: ProviderProps) => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();

  const [myUser, setMyUser] = useState<any>(null);

  useEffect(() => {
    if (isAuthenticated) {
      setMyUser(user);
    } else {
      setMyUser(false);
    }
  }, [isAuthenticated, user]);

  return (
    <UserContext.Provider value={{ loginWithRedirect, logout, myUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
