import { LoginUserInteractor } from "@/application/interactor/LoginUserInteractor";
import { Factory } from "@/application/Factory";

import { UserApi } from "@/adaptor/api/UserApi";
// import { UserGQL } from "@/adaptor/graphql/UserGQL";
import { ApiServiceFactory } from "@/adaptor/api/ApiServiceFactory";

/**
 * 依存の解決を行う
 */
export class UseCaseFactory implements Factory {
  create() {
    // const apiService = ApiServiceFactory.create("axios");
    const apiService = ApiServiceFactory.create("mock");
    return {
      // REST APIを使う場合
      LoginUser: new LoginUserInteractor(new UserApi(apiService)),
      // GraphQLを使う場合
      // LoginUser: new LoginUserInteractor(new UserGQL()),
    };
  }
}
