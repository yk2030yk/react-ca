import axios from "axios";
import { ApiService } from "./ApiService";

export class AxiosService implements ApiService {
  async post<T>(url: string, option: { data: any }): Promise<T> {
    const response = await axios.post<T>(url, option);
    return response.data;
  }
}
