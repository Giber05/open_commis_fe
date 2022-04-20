import axios, { Axios, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from "axios";

class BaseClient {
  private headers = (headers?: AxiosRequestHeaders): AxiosRequestHeaders => (headers == null ? {} : headers);
  private queryParams = (queryParams?: any): any => (queryParams == null ? {} : queryParams);
  private configs = (configs?: AxiosRequestConfig): AxiosRequestConfig => (configs == null ? {} : configs);

  public async getWithoutCookie(params: { url: string; configs?: AxiosRequestConfig }): Promise<AxiosResponse> {
    const finalConfig: AxiosRequestConfig = this.configs(params.configs);

    try {
      const result = await axios.get(params.url, finalConfig);
      // console.log("Result in base Client:", {result});

      return result;
    } catch (error: any) {
      console.log(error.response);
      return error.response;
    }
  }
  public async postWithoutCookie(params: { url: string; configs?: AxiosRequestConfig; body?: any }): Promise<AxiosResponse> {
    const finalConfig: AxiosRequestConfig = this.configs(params.configs);
    try {
      const result: AxiosResponse = await axios.post(params.url, params.body, finalConfig);
      return result;
    } catch (error: any) {
      // console.log(error.response);
      return error.response;
    }
  }

  public async postWithCookie(params: { url: string; cookieValue: string; headers?: AxiosRequestHeaders; body?: any }): Promise<AxiosResponse> {
    const finalHeader: AxiosRequestHeaders = this.headers(params.headers);

    finalHeader.Authorization = params.cookieValue;
    try {
      const result: AxiosResponse = await axios.post(params.url, params.body, finalHeader);
      return result;
    } catch (error: any) {
      // console.log(error.response);
      return error.response;
    }
  }

  public async getWithCookie(params: { url: string; configs?: AxiosRequestConfig }): Promise<AxiosResponse> {
    const finalConfig: AxiosRequestConfig = this.configs(params.configs);

    try {
      const result: AxiosResponse = await axios.get(params.url, finalConfig);
      return result;
    } catch (error: any) {
      // console.log(error.response);
      return error.response;
    }
  }
}

export default BaseClient;
