import Resource from "../../../../../../core/utils/resource"
import { DeleteArtworkModel } from "../../data/models/manage_portfolio/delete_artwork_model"
import { ManagePortofolioModel } from "../../data/models/manage_portfolio/manage_portofolio_model"
import { ManagePortofolioRepoImpl } from "../../data/repositories_impl/manage_portofolio_repo_impl"
import { ManagePortofolioRepo } from "../repositories/manage_portofolio_repository"

export class DeleteArtwork {
  private repository: ManagePortofolioRepo = new ManagePortofolioRepoImpl()
 
  async execute(params:{token:string; artworkId:number}):Promise<Resource<DeleteArtworkModel>>{
    return this.repository.deleteArtwork({token:params.token, artworkId:params.artworkId})
  } 
} 