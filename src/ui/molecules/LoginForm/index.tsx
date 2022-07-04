import { useState } from "react";
import { useUseCase } from "@/presentation/useUseCase";
import { useLoginUser } from "@/ui/useLoginUser";
import * as A from "@/ui/atoms";
import * as S from "./style";

export const LoginForm = () => {
  const form = useLoginForm();

  return (
    <S.Form>
      <S.Field>
        <A.Input
          type="text"
          value={form.email}
          onChange={(e) => form.setEmail(e.target.value)}
        />
      </S.Field>
      <S.Field>
        <A.Input
          type="password"
          value={form.password}
          onChange={(e) => form.setPassword(e.target.value)}
        />
      </S.Field>
      <S.Field>
        <A.Button type="button" onClick={form.login} disabled={form.loading}>
          login
        </A.Button>
      </S.Field>
    </S.Form>
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
    try {
      await loginUser(email, password);
      setEmail("");
      setPassword("");
    } catch (e) {}
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
