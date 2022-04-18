import Resource from "../../../../../core/utils/resource";
import UserModel from "../../data/models/user_model";
import AuthRepositoryImpl from "../../data/repositories_impl/auth_repository_impl";
import AuthRepository from "../repositories/auth_repository";

class Logout {
  private authRepository: AuthRepository = new AuthRepositoryImpl() 

  async execute(currentToken:string):Promise<Resource<boolean>> {
    return this.authRepository.logout(currentToken);
  }
}

export default Logout;
