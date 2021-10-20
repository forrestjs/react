import { createContext, useContext } from "react";

const INITIAL_STATE = {
  user: null
};

export const LoginContext = createContext(INITIAL_STATE);

export const LoginWrapper = (App) => (
  <LoginContext.Provider value={INITIAL_STATE} children={App} />
);

export const useLogin = () => {
  useContext(LoginContext);
  return { user: "aaa" };
};
