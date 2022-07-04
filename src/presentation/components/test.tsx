import axios from "axios";
import { useState } from "react";

type User = { name: string };

export const Component: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<User | undefined>(undefined);
  const [message, setMessage] = useState("");

  const login = async () => {
    if (!email.length) {
      setMessage("メールアドレスは必須です");
      return;
    }

    if (password.length < 8) {
      setMessage("パスワードが短すぎます");
      return;
    }

    setLoading(true);
    try {
      const result = await axios.post<User>("/login", {
        data: { email, password },
      });
      setUser(result.data);
    } catch (e) {
      setMessage("認証に失敗しました");
    }
    setLoading(false);
  };

  return (
    <div>
      {user && <p>{user.name}</p>}
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={email}
        onChange={(e) => setPassword(e.target.value)}
      />
      {message && <p>{message}</p>}
      <button onClick={login} disabled={loading}>
        login
      </button>
    </div>
  );
};

const useGetUsers = () => {
  // ユーザーの定義
  const [users, setUsers] = useState<User[]>([]);

  // ユーザー一覧の取得
  const getUsers = async () => {
    const result = await axios.get<User[]>("/users");
    setUsers(result.data);
  };

  return { users, getUsers };
};

export const Component2: React.FC = () => {
  const { users, getUsers } = useGetUsers();

  return (
    <div>
      <div>
        {users.map((user) => (
          <p>{user.name}</p>
        ))}
      </div>
      <button onClick={getUsers}>get users</button>
    </div>
  );
};
