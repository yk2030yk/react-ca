import { useContext } from "react";
import { UseCaseContext } from "./UseCaseContext";

export const useUseCase = () => useContext(UseCaseContext);
