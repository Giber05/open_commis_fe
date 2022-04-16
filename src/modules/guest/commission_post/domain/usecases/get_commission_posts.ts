import Resource from "../../../../../core/utils/resource";
import ComPostModel from "../../data/models/compost_list/compost_model";
import ComPostRepoImpl from "../../data/repositories_impl/compost_repo_impl";
import ComPostRepo from "../repositories/compost_repo";

class GetCommissionPosts {
  private compostRepo: ComPostRepo = new ComPostRepoImpl();
  async execute(): Promise<Resource<ComPostModel>> {
    console.log("Execute usecase");

    return this.compostRepo.getComPostList();
  }
}

export default GetCommissionPosts;
