export interface ApiService {
  post<T>(url: string, option: { data: any }): Promise<T>;
}
