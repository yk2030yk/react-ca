import { LoginUserInteractor } from "@/application/usecases/LoginUserInteractor";
import { Factory } from "@/application/Factory";

import { ApiService } from "@/adaptor/api/ApiService";
import { UserApi } from "@/adaptor/UserApi";

/**
 * 依存の解決を行う
 */
export class UseCaseFactory implements Factory {
  constructor(private apiService: ApiService) {}

  create() {
    return {
      LoginUser: new LoginUserInteractor(new UserApi(this.apiService)),
    };
  }
}
