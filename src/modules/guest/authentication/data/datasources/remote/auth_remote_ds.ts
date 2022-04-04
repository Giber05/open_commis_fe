 import NetworkConstant from "../../../../../../core/constants/network_constant";
import BaseException from "../../../../../../core/error/base_exception";
import BaseClient from "../../../../../../core/utils/base_client";
import UserModel from "../../models/UserModel";

export interface AuthRemoteDS {
  login(params: {email:string; password: string}):Promise<UserModel>;
}

class AuthRemoteDSImpl implements AuthRemoteDS {
  private baseClient = new BaseClient();
  private loginURL = `${NetworkConstant.baseUrl}/login`
  
  public async login(params: { email: string; password: string; }): Promise<UserModel> {
    const response = await this.baseClient.postWithoutCookie({
      url:this.loginURL,
      body:JSON.stringify(
        {
          params: {
            db:"test",
            email: params.email,
            password: params.password,
          }
        }
      )
    });
    if(response.status >= 200 && response.status<=210) {
      const body = response.data;
      return body.map((e:any)=>{
        return UserModel.fromJson(e);
      })
    }
    throw new BaseException({message:"Login failed"})
  }
}
export default AuthRemoteDSImpl;