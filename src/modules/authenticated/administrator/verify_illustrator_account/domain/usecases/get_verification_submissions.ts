import Resource from "../../../../../../core/utils/resource"
import { SubmittedIllustratorsModel } from "../../data/models/submitted_illustrators_model"
import { AccountVerificationRepoImpl } from "../../data/repositories_impl/account_verification_repo_impl"
import { AccountVerificationRepo } from "../repositories/account_verification_repo"

export class GetVerificationSubmissions {
  private repository: AccountVerificationRepo = new AccountVerificationRepoImpl()
 
 async execute(token:string):Promise<Resource<SubmittedIllustratorsModel>>{
   return await this.repository.getVerificationSubmissions(token)
 }
}