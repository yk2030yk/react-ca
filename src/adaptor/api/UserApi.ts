import { UserPort } from "@/application/port/UserPort";
import { User } from "@/domain/User";

import { ApiService } from "./ApiService";
import { UserResponse } from "../response/UserResponse";

export class UserApi implements UserPort {
  constructor(private apiService: ApiService) {}

  async login(email: string, password: string) {
    const response = await this.apiService.post<UserResponse>("/login", {
      data: { email, password },
    });
    return new User(response.id, response.lastName, response.firstName);
  }
}
