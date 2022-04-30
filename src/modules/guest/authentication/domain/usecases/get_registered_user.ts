import Resource from "../../../../../core/utils/resource";
import UserModel, { UserData } from "../../data/models/user_model";
import AuthRepositoryImpl from "../../data/repositories_impl/auth_repository_impl";
import AuthRepository from "../repositories/auth_repository";

class GetRegisteredUser {
  private authRepository: AuthRepository = new AuthRepositoryImpl() 

  async execute():Promise<Resource<UserData>> {
    return this.authRepository.getRegisteredUser();
  }
}

export default GetRegisteredUser;
