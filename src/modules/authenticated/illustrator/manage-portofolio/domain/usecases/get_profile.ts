import Resource from "../../../../../../core/utils/resource";
import { ManagePortofolioModel } from "../../data/models/portofolio_model";
import { ManagePortofolioRepoImpl } from "../../data/repositories_impl/manage_portofolio_repo_impl";
import { ManagePortofolioRepo } from "../repositories/manage_portofolio_repository";

export class GetProfile {
 private repository: ManagePortofolioRepo = new ManagePortofolioRepoImpl()
 
 async execute(token:string):Promise<Resource<ManagePortofolioModel>>{
   return this.repository.getProfile(token)
 }
}