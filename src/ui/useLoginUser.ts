import { useContext } from "react";
import { UseCases } from "@/application/UseCases";
import { LoginDispatchContext } from "./LoginContext";
import { useUseCase } from "@/presentation/useUseCase";

/**
 * UseCaseを注入するパターン
 *
 * メリット
 * - テストが楽
 * - どこに依存しているのか引数を見ればわかる
 * デメリット
 * - 呼び出し時にUseCaseを渡す必要がある
 */
export const useLoginUser = (LoginUser: UseCases["LoginUser"]) => {
  const { setUser } = useContext(LoginDispatchContext);

  const loginUser = async (email: string, password: string) => {
    const user = await LoginUser.handle(email, password);
    setUser(user);
  };

  return {
    loginUser,
  };
};

/**
 * UseCaseをContextから直接取ってくるパターン
 *
 * メリット
 * - 呼び出し側でいちいち渡す必要がない
 * デメリット
 * - テスト時にProviderで注入する必要がある
 */
export const useLoginUser_2 = () => {
  const { LoginUser } = useUseCase();
  const { setUser } = useContext(LoginDispatchContext);

  const loginUser = async (email: string, password: string) => {
    const user = await LoginUser.handle(email, password);
    setUser(user);
  };

  return {
    loginUser,
  };
};
