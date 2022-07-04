import { useContext } from "react";
import { UseCases } from "@/application/UseCases";
import { LoginContext } from "./LoginContext";

export const useLoginUser = (LoginUser: UseCases["LoginUser"]) => {
  const { setUser } = useContext(LoginContext);

  const login = async (email: string, password: string) => {
    const user = await LoginUser.handle(email, password);
    setUser(user);
  };

  return {
    login,
  };
};
