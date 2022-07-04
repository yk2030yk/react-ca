import { LoginUserInteractor } from "@/application/interactor/LoginUserInteractor";
import { Factory } from "@/application/Factory";

import { UserApi } from "@/adaptor/api/UserApi";
import { ApiServiceFactory } from "@/adaptor/api/ApiServiceFactory";

/**
 * 依存の解決を行う
 */
export class UseCaseFactory implements Factory {
  create() {
    // const apiService = ApiServiceFactory.create("axios");
    const apiService = ApiServiceFactory.create("mock");
    return {
      LoginUser: new LoginUserInteractor(new UserApi(apiService)),
    };
  }
}
