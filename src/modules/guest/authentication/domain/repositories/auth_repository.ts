import Resource from "../../../../../core/utils/resource";
import UserModel from "../../data/models/user_model";
import { VerifyTokenModel } from "../../data/models/verify_token_model";

interface AuthRepository {
  login(params: { email: string; password: string, role:string }): Promise<Resource<UserModel>>;

  logout(currentToken:string): Promise<Resource<boolean>>;

  getCurrentUser(): Promise<Resource<UserModel>>;

  verifyToken(currentToken:string):Promise<Resource<VerifyTokenModel>>

  registerUser (params: {
    role:string,
    name:string,
    email:string,
    phone: string,
    username:string,
    password:string,
    profilePicture?:File | null,
  }):Promise<Resource<UserModel>>
}

export default AuthRepository;
