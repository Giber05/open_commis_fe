import Resource from "../../../../../../core/utils/resource"
import { AddArtworkModel } from "../../data/models/manage_portfolio/add_artwork_model"
import { ManagePortofolioModel } from "../../data/models/manage_portfolio/manage_portofolio_model"
import { ManagePortofolioRepoImpl } from "../../data/repositories_impl/manage_portofolio_repo_impl"
import { ManagePortofolioRepo } from "../repositories/manage_portofolio_repository"

export class AddArtwork {
  private repository: ManagePortofolioRepo = new ManagePortofolioRepoImpl()
 
  async execute(params:{token:string; formData:any}):Promise<Resource<AddArtworkModel>>{
    return this.repository.addArtwork({token:params.token, formData:params.formData})
  } 
}