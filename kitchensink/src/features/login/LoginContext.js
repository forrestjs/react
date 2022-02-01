import { createContext, useContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginWrapper = (props) => {
  const [user, setUser] = useState(null);
  const login = (user) => setUser(user);
  const logout = () => setUser(null);

  return <LoginContext.Provider {...props} value={{ user, login, logout }} />;
};

export const useLogin = () => useContext(LoginContext);
