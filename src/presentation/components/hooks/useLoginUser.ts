import { UseCases } from "@/application/UseCases";

export const useLoginUser = ({ LoginUser }: UseCases) => {
  const login = (email: string, password: string) => {
    LoginUser.handle(email, password);
  };

  return {
    login,
  };
};
