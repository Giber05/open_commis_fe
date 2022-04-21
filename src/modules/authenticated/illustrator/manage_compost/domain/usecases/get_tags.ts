import Resource from "../../../../../../core/utils/resource";
import { TagModel } from "../../../../../common/commission/data/models/tag_model";
import ManageComPostRepoImpl from "../../data/repositories_impl/manage_compost_repository_impl";
import ManageComPostRepo from "../repositories/manage_compost_repository";

export class GetTags {
  private manageComPostRepo: ManageComPostRepo = new ManageComPostRepoImpl()

  async execute(token:string):Promise<Resource<TagModel[]>>{
    return this.manageComPostRepo.getTags();
  } 
}