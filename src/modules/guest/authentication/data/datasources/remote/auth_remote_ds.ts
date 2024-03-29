import NetworkConstant from "../../../../../../core/constants/network_constant";
import BaseException from "../../../../../../core/error/base_exception";
import BaseClient from "../../../../../../core/utils/base_client";
import { ResendVerifModel } from "../../models/resend_verif_model";
import UserModel from "../../models/user_model";
import { VerifyTokenModel } from "../../models/verify_token_model";

export interface AuthRemoteDS {
  login(params: { email: string; password: string; role: string }): Promise<UserModel>;
  loginAdmin(params: { username: string; password: string; role: string }): Promise<UserModel>;
  verifyToken(currentToken: string): Promise<VerifyTokenModel>;
  logout(currentToken: string): Promise<boolean>;
  registerUser(params: { role: string; name: string; email: string; phone: string; username: string; password: string; profilePicture?: File | null }): Promise<UserModel>;
  resendVerifEmail(params: { userId: number; role: string }): Promise<ResendVerifModel>;
}

class AuthRemoteDSImpl implements AuthRemoteDS {
  private baseClient = new BaseClient();

  async resendVerifEmail(params: { userId: number; role: string }): Promise<ResendVerifModel> {
    let resendVerifEmailURL = NetworkConstant.baseUrl + "auth/" + params.role + "/" + params.userId + "/resend-verification";
    const response = await this.baseClient.postWithoutCookie({
      url: resendVerifEmailURL,
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return ResendVerifModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }

  async registerUser(params: { role: string; name: string; email: string; phone: string; username: string; password: string; profilePicture?: File | null }): Promise<UserModel> {
    let registrationURL = NetworkConstant.baseUrl + "auth/register/" + params.role;
    const response = await this.baseClient.postWithoutCookie({
      url: registrationURL,
      body: {
        name: params.name,
        email: params.email,
        username: params.username,
        password: params.password,
        phone: params.phone,
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = JSON.stringify(response.data);
      return UserModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }

  async logout(currentToken: string): Promise<boolean> {
    let logoutURL = NetworkConstant.baseUrl + "auth/logout";
    const response = await this.baseClient.postWithCookie({
      url: logoutURL,
      configs: {
        headers: {
          Authorization: "Bearer " + currentToken,
        },
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return body.success;
    }
    throw new BaseException({ message: response.data.error });
  }

  async verifyToken(currentToken: string): Promise<VerifyTokenModel> {
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
  }
  public async loginAdmin(params: { username: string; password: string; role: string }): Promise<UserModel> {
    let loginURL = `${NetworkConstant.baseUrl}auth/login?role=${params.role}`;
    const response = await this.baseClient.postWithoutCookie({
      url: loginURL,
      body: {
        username: params.username,
        password: params.password,
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = JSON.stringify(response.data);

      return UserModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }
}
export default AuthRemoteDSImpl;
