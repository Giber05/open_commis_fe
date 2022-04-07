import Resource from "../../../../../../core/utils/resource";
import ComPostModel from "../../data/models/ComPostModel";
import ManageComPostRepoImpl from "../../data/repositories_impl/manage_compost_repository_impl";
import ManageComPostRepo from "../repositories/manage_compost_repository";

class GetIlustratorComPostList {
  private manageComPostRepo: ManageComPostRepo = new ManageComPostRepoImpl()

  async execute(ilustratorId:string):Promise<Resource<ComPostModel[]>>{
    return this.manageComPostRepo.getComPostList(ilustratorId);
  }
}

export default GetIlustratorComPostList;
