import axios, { Axios, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from "axios";

class BaseClient {
  private headers = (headers?: AxiosRequestHeaders): AxiosRequestHeaders => (headers == null ? {} : headers);
  private queryParams = (queryParams?: any): any => (queryParams == null ? {} : queryParams);
  private configs = (configs?: AxiosRequestConfig): AxiosRequestConfig => (configs == null ? {} : configs);

  public async getWithoutCookie(params: { url: string; configs?: AxiosRequestConfig }): Promise<AxiosResponse> {
    const finalConfig: AxiosRequestConfig = this.configs(params.configs);

    try {
      const result = await axios.get(params.url, finalConfig);

      return result;
    } catch (error: any) {
      return error.response;
    }
  }
  public async postWithoutCookie(params: { url: string; configs?: AxiosRequestConfig; body?: any }): Promise<AxiosResponse> {
    const finalConfig: AxiosRequestConfig = this.configs(params.configs);
    try {
      const result: AxiosResponse = await axios.post(params.url, params.body, finalConfig);
      return result;
    } catch (error: any) {
      return error.response;
    }
  }

  public async postWithCookie(params: { url: string; configs?: AxiosRequestConfig; body?: any }): Promise<AxiosResponse> {
    const finalConfig: AxiosRequestConfig = this.configs(params.configs);

    try {
      const result: AxiosResponse = await axios.post(params.url, params.body, finalConfig);
      return result;
    } catch (error: any) {
      return error.response;
    }
  }

  public async getWithCookie(params: { url: string; configs?: AxiosRequestConfig }): Promise<AxiosResponse> {
    const finalConfig: AxiosRequestConfig = this.configs(params.configs);

    try {
      const result: AxiosResponse = await axios.get(params.url, finalConfig);
      return result;
    } catch (error: any) {
      return error.response;
    }
  }
  public async putWithCookie(params: { url: string; configs?: AxiosRequestConfig; body?: any }): Promise<AxiosResponse> {
    const finalConfig: AxiosRequestConfig = this.configs(params.configs);

    try {
      const result: AxiosResponse = await axios.put(params.url, params.body, finalConfig);
      return result;
    } catch (error: any) {
      return error.response;
    }
  }
  public async deleteWithCookie(params: { url: string; configs?: AxiosRequestConfig; }): Promise<AxiosResponse> {
    const finalConfig: AxiosRequestConfig = this.configs(params.configs);

    try {
      const result: AxiosResponse = await axios.delete(params.url, finalConfig);
      return result;
    } catch (error: any) {
      return error.response;
    }
  }
}

export default BaseClient;
