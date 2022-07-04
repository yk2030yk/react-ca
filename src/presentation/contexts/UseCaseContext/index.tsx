import React, { createContext } from "react";

import { UseCases } from "@/application/UseCases";
import { Factory } from "@/application/Factory";
import { useContext } from "react";

export const UseCaseContext = createContext<UseCases>(
  Object.create(null) as UseCases
);

export const UseCaseProvider: React.FC<{
  factory: Factory;
  children: React.ReactNode;
}> = ({ factory, children }) => {
  return (
    <UseCaseContext.Provider value={factory.create()}>
      {children}
    </UseCaseContext.Provider>
  );
};

export const useUseCase = () => useContext(UseCaseContext);
