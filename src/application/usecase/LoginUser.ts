import { User } from "../outputData/User";

export interface LoginUser {
  handle(email: string, password: string): Promise<User>;
}
