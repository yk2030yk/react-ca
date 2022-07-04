import { useState } from "react";
import { useUseCase } from "@/presentation/useUseCase";
import { useLoginUser } from "@/ui/useLoginUser";

export const LoginForm = () => {
  const form = useLoginForm();

  return (
    <div>
      <input
        type="text"
        value={form.email}
        onChange={(e) => form.setEmail(e.target.value)}
      />
      <input
        type="password"
        value={form.password}
        onChange={(e) => form.setPassword(e.target.value)}
      />
      <button type="button" onClick={form.login} disabled={form.loading}>
        login
      </button>
    </div>
  );
};

const useLoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { LoginUser } = useUseCase();
  const { loginUser } = useLoginUser(LoginUser);

  const login = async () => {
    setLoading(true);
    await loginUser(email, password);
    setLoading(false);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    login,
    loading,
  };
};
