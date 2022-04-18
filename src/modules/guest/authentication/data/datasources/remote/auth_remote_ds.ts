import { whileStatement } from "@babel/types";
import axios from "axios";
import NetworkConstant from "../../../../../../core/constants/network_constant";
import BaseException from "../../../../../../core/error/base_exception";
import BaseClient from "../../../../../../core/utils/base_client";
import UserModel from "../../models/user_model";
import { VerifyTokenModel } from "../../models/verify_token_model";

export interface AuthRemoteDS {
  login(params: { email: string; password: string; role: string }): Promise<UserModel>;
  verifyToken(currentToken: string): Promise<VerifyTokenModel>;
}

class AuthRemoteDSImpl implements AuthRemoteDS {
  private baseClient = new BaseClient();
  async verifyToken(currentToken: string): Promise<VerifyTokenModel> {
    console.log({ currentToken });

    let verifyTokenURL = `${NetworkConstant.baseUrl}auth/token/verify`;
    const response = await this.baseClient.postWithoutCookie({
      url: verifyTokenURL,
      configs: {
        headers: {
          Authorization: "Bearer " + currentToken,
        },
      },
    });
    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return VerifyTokenModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }

  public async login(params: { email: string; password: string; role: string }): Promise<UserModel> {
    let loginURL = `${NetworkConstant.baseUrl}auth/login?role=${params.role}`;
    try {
      const response = await this.baseClient.postWithoutCookie({
        url: loginURL,
        body: {
          email: params.email,
          password: params.password,
        },
      });

      if (response.status >= 200 && response.status <= 210) {
        const body = JSON.stringify(response.data);

        return UserModel.fromJson(body);
      }
      throw new BaseException({ message: response.data.error });
    } catch (error: any) {

      throw new BaseException({ message: error });
    }
  }
}
export default AuthRemoteDSImpl;
