import Resource from "../../../../../core/utils/resource";
import UserModel from "../../data/models/user_model";
import { VerifyTokenModel } from "../../data/models/verify_token_model";
import AuthRepositoryImpl from "../../data/repositories_impl/auth_repository_impl";
import AuthRepository from "../repositories/auth_repository";

export class VerifyCurrentToken {
  private authRepository: AuthRepository = new AuthRepositoryImpl() 

  async execute(currentToken:string):Promise<Resource<VerifyTokenModel>> {
    return this.authRepository.verifyToken(currentToken);
  }
}