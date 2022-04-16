import axios from "axios";
import NetworkConstant from "../../../../../../core/constants/network_constant";
import BaseException from "../../../../../../core/error/base_exception";
import BaseClient from "../../../../../../core/utils/base_client";
import UserModel from "../../models/user_model";

export interface AuthRemoteDS {
  login(params: { email: string; password: string; role: string }): Promise<UserModel>;
}

class AuthRemoteDSImpl implements AuthRemoteDS {
  private baseClient = new BaseClient();
  private loginURL = `${NetworkConstant.baseUrl}auth/login?role=illustrator`;

  public async login(params: { email: string; password: string; role: string }): Promise<UserModel> {
    try {
      const response = await this.baseClient.postWithoutCookie({
        url: this.loginURL,
        body: {
          email: params.email,
          password: params.password,
        },
        headers: {
          withCredentials: true,
        },
      });

      if (response.status >= 200 && response.status <= 210) {
        const body = JSON.stringify(response.data);

        return UserModel.fromJson(body);
      }
      throw new BaseException({ message: response.data.error });
    } catch (error: any) {
      console.log({ error });

      throw new BaseException({ message: error });
    }
  }
}
export default AuthRemoteDSImpl;
