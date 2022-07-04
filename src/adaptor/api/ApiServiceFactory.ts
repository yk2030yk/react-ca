import { ApiService } from "./ApiService";
import { AxiosService } from "./AxiosService";

type ApiServiceType = "axios";

export class ApiServiceFactory {
  static create(type: ApiServiceType): ApiService {
    switch (type) {
      case "axios":
        return new AxiosService();
      default:
        throw new Error("not match ApiServiceType. input: " + type);
    }
  }
}
