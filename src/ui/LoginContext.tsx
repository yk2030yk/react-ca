import React, { createContext, useState } from "react";

import { User } from "@/application/outputData/User";

export const LoginContext = createContext<{
  user: User | undefined;
  setUser: (user: User) => void;
}>({} as any);

export const LoginProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [user, setUser] = useState<User | undefined>();
  return (
    <LoginContext.Provider value={{ user, setUser }}>
      {children}
    </LoginContext.Provider>
  );
};
