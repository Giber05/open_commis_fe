import Resource from "../../../../../../core/utils/resource";
import IllustratorComposts from "../../data/models/illustrators_composts";
import ManageComPostRepoImpl from "../../data/repositories_impl/manage_compost_repository_impl";
import ManageComPostRepo from "../repositories/manage_compost_repository";

class GetIlustratorComPostList {
  private manageComPostRepo: ManageComPostRepo = new ManageComPostRepoImpl()

  async execute(token:string):Promise<Resource<IllustratorComposts[]>>{
    return this.manageComPostRepo.getComPostList(token);
  }
}

export default GetIlustratorComPostList;
