import Resource from "../../../../../core/utils/resource";
import { ResendVerifModel } from "../../data/models/resend_verif_model";
import AuthRepositoryImpl from "../../data/repositories_impl/auth_repository_impl";
import AuthRepository from "../repositories/auth_repository";

export class ResendVerifEmail {
  private authRepository: AuthRepository = new AuthRepositoryImpl() 

  async execute(params:{role:string; userId:number,}):Promise<Resource<ResendVerifModel>> {
    return this.authRepository.resendVerifEmail({userId:params.userId,role:params.role});
  }
}