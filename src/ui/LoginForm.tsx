import { useState } from "react";
import { useUseCase } from "@/presentation/useUseCase";
import { useLoginUser } from "@/presentation/useLoginUser";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { LoginUser } = useUseCase();
  const { login } = useLoginUser(LoginUser);

  return (
    <div>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={() => login(email, password)}>
        login
      </button>
    </div>
  );
};
