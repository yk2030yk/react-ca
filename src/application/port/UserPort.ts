import { User } from "@/domain/User";

export interface UserPort {
  login(email: string, password: string): Promise<User>;
}
