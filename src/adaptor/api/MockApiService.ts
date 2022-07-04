import { ApiService } from "./ApiService";

const sleep = (second: number) =>
  new Promise((resolve) => setTimeout(resolve, second * 1000));

/**
 * Mock Api Service
 */
export class MockApiService implements ApiService {
  async post<T>(url: string, _option: { data: any }): Promise<T> {
    await sleep(2);
    switch (url) {
      case "/login":
        return { firstName: "太郎", lastName: "田中" } as unknown as T;
      default:
        throw new Error("mockが一致しませんでした");
    }
  }
}
