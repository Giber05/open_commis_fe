import { message } from "antd";
import Password from "antd/lib/input/Password";
import { useDispatch, useSelector } from "react-redux";
import BaseException from "../../../../../core/error/base_exception";
import BaseRepository from "../../../../../core/utils/base_repository";
import Resource from "../../../../../core/utils/resource";
import AuthRepository from "../../domain/repositories/auth_repository";
import { selectAuth } from "../../presentation/reducers/auth_reducer";
import AuthLocalDSImpl, { AuthLocalDS } from "../datasources/local/auth_local_ds";
import AuthRemoteDSImpl, { AuthRemoteDS } from "../datasources/remote/auth_remote_ds";
import { ResendVerifModel } from "../models/resend_verif_model";
import UserModel, { UserData } from "../models/user_model";
import { VerifyTokenModel } from "../models/verify_token_model";

class AuthRepositoryImpl extends BaseRepository implements AuthRepository {
  private authRemoteDS: AuthRemoteDS = new AuthRemoteDSImpl();
  private authLocalDS: AuthLocalDS = new AuthLocalDSImpl();

  getRegisteredUser(): Promise<Resource<UserData>> {
    return this.cacheOnlyCall({
      cacheCall: async () => {
        const resource: UserData | null = await this.authLocalDS.getRegisteredUser();
        if (resource instanceof UserData) {
          return Resource.success({ data: resource });
        }
        return Resource.error({ exception: new BaseException({ message: "No Data" }) });
      },
    });
  }

  resendVerifEmail(params: { userId: number; role: string }): Promise<Resource<ResendVerifModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.authRemoteDS.resendVerifEmail({ role: params.role, userId: params.userId });
        if (resource instanceof ResendVerifModel) return Resource.success({ data: resource });
        return Resource.error({ exception: resource });
      },
    });
  }
  registerUser(params: { role: string; name: string; email: string; phone: string; username: string; password: string; profilePicture?: File | null }): Promise<Resource<UserModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.authRemoteDS.registerUser({
          name: params.name,
          email: params.email,
          username: params.username,
          password: params.password,
          role: params.role,
          phone: params.phone,
          profilePicture: params.profilePicture,
        });
        if (resource instanceof UserModel) {
          this.authLocalDS.saveRegisteredUser(resource.data);
          return Resource.success({ data: resource });
        }
        return Resource.error({ exception: resource });
      },
    });
  }

  verifyToken(currentToken: string): Promise<Resource<VerifyTokenModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.authRemoteDS.verifyToken(currentToken);
        if (resource instanceof VerifyTokenModel) {
          if (resource.data.tokenValid == true) return Resource.success({ data: resource });
          else {
            await this.authLocalDS.deleteLoggedInUser();
            return Resource.error({ exception: new BaseException({ message: "Token Expired" }) });
          }
        }
        return Resource.error({ exception: resource });
      },
    });
  }

  login(params: { email: string; password: string; role: string }): Promise<Resource<UserModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource: UserModel = await this.authRemoteDS.login({ email: params.email, password: params.password, role: params.role });
        if (resource instanceof UserModel) {
          this.authLocalDS.saveUser(resource);
          return Resource.success({ data: resource });
        }
        return Resource.error({ exception: resource });
      },
    });
  }

  logout(currentToken: string): Promise<Resource<boolean>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        await this.authLocalDS.deleteLoggedInUser();
        const resource = await this.authRemoteDS.logout(currentToken);
        await localStorage.removeItem("init-url");
        if (resource) return Resource.success({ data: true });
        return Resource.error({ exception: new BaseException({ message: "Unauthorized" }) });
      },
    });
  }

  getCurrentUser(): Promise<Resource<UserModel>> {
    return this.cacheOnlyCall({
      cacheCall: async () => {
        const resource: UserModel | null = await this.authLocalDS.getUser();
        console.log({ resource });
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
