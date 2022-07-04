import { LoginUser } from "../usecase/LoginUser";
import { UserPort } from "../port/UserPort";

export class LoginUserInteractor implements LoginUser {
  constructor(private readonly userPort: UserPort) {}

  async handle(email: string, password: string) {
    const user = await this.userPort.login(email, password);
    return { fullName: user.fullName };
  }
}
