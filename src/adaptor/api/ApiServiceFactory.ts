import { ApiService } from "./ApiService";
import { AxiosService } from "./AxiosService";
import { MockApiService } from "./MockApiService";

type ApiServiceType = "axios" | "mock";

export class ApiServiceFactory {
  static create(type: ApiServiceType): ApiService {
    switch (type) {
      case "axios":
        return new AxiosService();
      case "mock":
        return new MockApiService();
      default:
        throw new Error("not match ApiServiceType. input: " + type);
    }
  }
}
