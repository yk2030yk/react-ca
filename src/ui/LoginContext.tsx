import React, { createContext, useState } from "react";

import { User } from "@/application/outputData/User";

export const LoginStateContext = createContext<{
  user: User | undefined;
}>({} as any);

export const LoginDispatchContext = createContext<{
  setUser: (user: User) => void;
}>({} as any);

export const LoginProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [user, setUser] = useState<User | undefined>();
  return (
    <LoginStateContext.Provider value={{ user }}>
      <LoginDispatchContext.Provider value={{ setUser }}>
        {children}
      </LoginDispatchContext.Provider>
    </LoginStateContext.Provider>
  );
};
