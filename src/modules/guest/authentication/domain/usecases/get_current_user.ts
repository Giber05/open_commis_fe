import Resource from "../../../../../core/utils/resource";
import UserModel from "../../data/models/UserModel";
import AuthRepositoryImpl from "../../data/repositories_impl/auth_repository_impl";
import AuthRepository from "../repositories/auth_repository";

class GetCurrentUser {
  private authRepository: AuthRepository = new AuthRepositoryImpl() 

  async execute():Promise<Resource<UserModel>> {
    return this.authRepository.getCurrentUser();
  }
}

export default GetCurrentUser;
