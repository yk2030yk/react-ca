import { UserPort } from "@/application/ports/UserPort";
import { User } from "@/domain/User";

import { ApiService } from "./api/ApiService";
import { UserResponse } from "./UserResponse";

export class UserApi implements UserPort {
  constructor(private apiService: ApiService) {}

  async login(email: string, password: string) {
    const response = await this.apiService.post<UserResponse>("/login", {
      data: { email, password },
    });
    return new User(response.name);
  }
}
