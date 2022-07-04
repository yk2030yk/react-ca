import { LoginUser } from "./LoginUser";
import { UserPort } from "../ports/UserPort";

export class LoginUserInteractor implements LoginUser {
  constructor(private readonly userPort: UserPort) {}

  async handle(email: string, password: string) {
    const user = await this.userPort.login(email, password);
    return { name: user.name };
  }
}
