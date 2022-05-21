import Resource from "../../../../../core/utils/resource";
import UserModel from "../../data/models/user_model";
import AuthRepositoryImpl from "../../data/repositories_impl/auth_repository_impl";
import AuthRepository from "../repositories/auth_repository";

class LoginAdmin {
  private authRepository: AuthRepository = new AuthRepositoryImpl() 

  async execute(params:{username:string; password:string, role:string}):Promise<Resource<UserModel>> {
    return await this.authRepository.loginAdmin({username:params.username, password:params.password,role:params.role});
  }
}

export default LoginAdmin;