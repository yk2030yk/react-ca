import { useContext } from "react";
import * as A from "@/ui/atoms";
import { LoginDispatchContext, LoginStateContext } from "../../LoginContext";

export const LoginInfo = () => {
  const { user } = useContext(LoginStateContext);
  const { logout } = useContext(LoginDispatchContext);

  return (
    <div>
      {user ? <p>{`ユーザー名: ${user.fullName}`}</p> : <p>未ログイン</p>}
      <A.Button type="button" onClick={logout}>
        logout
      </A.Button>
    </div>
  );
};
