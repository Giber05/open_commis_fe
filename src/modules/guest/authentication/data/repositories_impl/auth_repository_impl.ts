import BaseException from "../../../../../core/error/base_exception";
import BaseRepository from "../../../../../core/utils/base_repository";
import Resource from "../../../../../core/utils/resource";
import AuthRepository from "../../domain/repositories/auth_repository";
import AuthLocalDSImpl, { AuthLocalDS } from "../datasources/local/auth_local_ds";
import AuthRemoteDSImpl, { AuthRemoteDS } from "../datasources/remote/auth_remote_ds";
import UserModel from "../models/user_model";

class AuthRepositoryImpl extends BaseRepository implements AuthRepository {
  private authRemoteDS: AuthRemoteDS = new AuthRemoteDSImpl();
  private authLocalDS: AuthLocalDS = new AuthLocalDSImpl();
  login(params: { email: string; password: string }): Promise<Resource<UserModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        // let resource: UserAuthEntity | BaseException
        //= await this._authRemoteDatasource.userLogin(params)
        const resource: UserModel = new UserModel({
          id: "1",
          name: params.email,
          cookie: "1",
        });
        if (resource instanceof UserModel) {
          this.authLocalDS.saveUser(resource);
          return Resource.success({ data: resource });
        }
        return Resource.error({ exception: resource });
      },
    });
  }
  logout(): Promise<Resource<boolean>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        //API Logout
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
