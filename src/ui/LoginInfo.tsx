import { useContext } from "react";
import { LoginContext } from "./LoginContext";

export const LoginInfo = () => {
  const { user } = useContext(LoginContext);

  return (
    <div>
      {user ? <p>{`ユーザー名: ${user.fullName}`}</p> : <p>未ログイン</p>}
    </div>
  );
};
