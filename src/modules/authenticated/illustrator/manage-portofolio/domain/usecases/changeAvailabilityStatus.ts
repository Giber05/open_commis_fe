import Resource from "../../../../../../core/utils/resource"
import { ManagePortofolioModel } from "../../data/models/manage_portfolio/manage_portofolio_model"
import { ManagePortofolioRepoImpl } from "../../data/repositories_impl/manage_portofolio_repo_impl"
import { ManagePortofolioRepo } from "../repositories/manage_portofolio_repository"

export class ChangeAvailabilityStatus {
  private repository: ManagePortofolioRepo = new ManagePortofolioRepoImpl()
 
  async execute(params:{token:string; status:boolean}):Promise<Resource<ManagePortofolioModel>>{
    return this.repository.changeAvailabilityStatus({token:params.token, status:params.status})
  } 
}