import { Axios, AxiosRequestHeaders, AxiosResponse } from "axios";

class BaseClient extends Axios {
  private headers = (headers?: AxiosRequestHeaders)
    : AxiosRequestHeaders => (headers == null ? {} : headers);

  public async postWithoutCookie(
    params: { url: string; headers?: AxiosRequestHeaders; body?: any },
  ): Promise<AxiosResponse> {
    const finalHeader: AxiosRequestHeaders = this.headers(params.headers);
    try {
      const result: AxiosResponse = await this.post(params.url, params.body, finalHeader);
      return result;
    } catch (error: any) {
      // console.log(error.response);
      return error.response;
    }
  }

  public async postWithCookie(
    params: { url: string; cookieValue: string; headers?: AxiosRequestHeaders; body?: any; },
  ): Promise<AxiosResponse> {
    const finalHeader: AxiosRequestHeaders = this.headers(params.headers);
    finalHeader.Cookie = params.cookieValue;
    try {
      const result: AxiosResponse = await this.post(params.url, params.body, finalHeader);
      return result;
    } catch (error: any) {
      // console.log(error.response);
      return error.response;
    }
  }

  public async getWithCookie(
    params: { url: string; cookieValue: string; headers?: AxiosRequestHeaders; },
  ): Promise<AxiosResponse> {
    const finalHeader: AxiosRequestHeaders = this.headers(params.headers);
    finalHeader.Cookie = params.cookieValue;
    try {
      const result: AxiosResponse = await this.get(params.url, finalHeader);
      return result;
    } catch (error: any) {
      // console.log(error.response);
      return error.response;
    }
  }
}

export default BaseClient;

