import { useContext } from "react";
import { LoginContext } from "./LoginContext";

export const useLogin = () => {
  console.log(LoginContext);
  const aaa = useContext(LoginContext);
  console.log(aaa);

  return {
    user: null
  };
};
