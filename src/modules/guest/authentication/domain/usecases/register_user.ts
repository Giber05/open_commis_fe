import Resource from "../../../../../core/utils/resource";
import UserModel from "../../data/models/user_model";
import AuthRepositoryImpl from "../../data/repositories_impl/auth_repository_impl";
import AuthRepository from "../repositories/auth_repository";

export class RegisterUser {
  private authRepository: AuthRepository = new AuthRepositoryImpl() 

  async execute(params:{role: string; name: string; email: string; phone: string; username: string; password: string; profilePicture?: File |null  }):Promise<Resource<UserModel>> {
    
    return this.authRepository.registerUser({
      name:params.name,
      email:params.email,
      username: params.username,
      password: params.password,
      role:params.role,
      phone:params.role,
      profilePicture:params.profilePicture,});
  }
} 
