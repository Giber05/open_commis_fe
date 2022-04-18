import Password from "antd/lib/input/Password";
import { useDispatch, useSelector } from "react-redux";
import BaseException from "../../../../../core/error/base_exception";
import BaseRepository from "../../../../../core/utils/base_repository";
import Resource from "../../../../../core/utils/resource";
import AuthRepository from "../../domain/repositories/auth_repository";
import { selectAuth } from "../../presentation/reducers/auth_reducer";
import AuthLocalDSImpl, { AuthLocalDS } from "../datasources/local/auth_local_ds";
import AuthRemoteDSImpl, { AuthRemoteDS } from "../datasources/remote/auth_remote_ds";
import UserModel from "../models/user_model";
import { VerifyTokenModel } from "../models/verify_token_model";

class AuthRepositoryImpl extends BaseRepository implements AuthRepository {
  private authRemoteDS: AuthRemoteDS = new AuthRemoteDSImpl();
  private authLocalDS: AuthLocalDS = new AuthLocalDSImpl();


  verifyToken(currentToken: string): Promise<Resource<VerifyTokenModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.authRemoteDS.verifyToken(currentToken);
        if (resource instanceof VerifyTokenModel) return Resource.success({ data: resource });
        return Resource.error({ exception: resource });
      },
    });
  }

  login(params: { email: string; password: string; role: string }): Promise<Resource<UserModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        // let resource: UserAuthEntity | BaseException
        //= await this._authRemoteDatasource.userLogin(paramsparams.)
        const resource: UserModel = await this.authRemoteDS.login({ email: params.email, password: params.password, role: params.role });
        if (resource instanceof UserModel) {
          this.authLocalDS.saveUser(resource);
          return Resource.success({ data: resource });
        }
        return Resource.error({ exception: resource });
      },
    });
  }

  logout(currentToken:string): Promise<Resource<boolean>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        // await this.authRemoteDS.logout(currentToken)
        await this.authLocalDS.deleteLoggedInUser();
        await localStorage.removeItem("init-url");
        return Resource.success({ data: true });
      },
    });
  }
  getCurrentUser(): Promise<Resource<UserModel>> {
    return this.cacheOnlyCall({
      cacheCall: async () => {
        const resource: UserModel | null = await this.authLocalDS.getUser();
        if (resource instanceof UserModel) {
          this.authLocalDS.saveUser(resource);
          return Resource.success({ data: resource });
        }
        return Resource.error({ exception: new BaseException({ message: "No Data" }) });
      },
    });
  }
}

export default AuthRepositoryImpl;
