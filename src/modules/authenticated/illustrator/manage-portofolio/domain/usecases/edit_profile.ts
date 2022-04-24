import Resource from "../../../../../../core/utils/resource"
import { ManagePortofolioModel } from "../../data/models/manage_portfolio/manage_portofolio_model"
import { ManagePortofolioRepoImpl } from "../../data/repositories_impl/manage_portofolio_repo_impl"
import { ManagePortofolioRepo } from "../repositories/manage_portofolio_repository"

export class EditProfile {
  private repository: ManagePortofolioRepo = new ManagePortofolioRepoImpl()
 
  async execute(params:{token:string; formData:any}):Promise<Resource<ManagePortofolioModel>>{
    return this.repository.editProfile({token:params.token, formData:params.formData})
  } 
}