import { UseCases } from "./UseCases";

export interface Factory {
  create(): UseCases;
}
