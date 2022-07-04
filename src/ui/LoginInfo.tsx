import { useContext } from "react";
import { LoginStateContext } from "./LoginContext";

export const LoginInfo = () => {
  const { user } = useContext(LoginStateContext);

  return (
    <div>
      {user ? <p>{`ユーザー名: ${user.fullName}`}</p> : <p>未ログイン</p>}
    </div>
  );
};
