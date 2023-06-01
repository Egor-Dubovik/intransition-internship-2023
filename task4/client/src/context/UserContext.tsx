import React, { createContext, FC, ReactNode, useEffect, useState } from 'react';
import { IUser } from '../common/types/user';
import Loader from '../components/Loader/Loader';

interface UserContextProps {
  user: IUser | null;
  handleLogin: (userData: IUser) => void;
  handleLogout: () => void;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps);

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const handleLogin = (userData: IUser): void => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const handleLogout = (): void => {
    localStorage.removeItem('user');
    setUser(null);
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user') as string);
    if (storedUser) {
      setUser(storedUser);
    }
    setIsInitialized(true);
  }, []);

  if (!isInitialized) {
    return <Loader />;
  }

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};
