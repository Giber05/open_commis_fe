import Resource from "../../../../../core/utils/resource";
import ComPostModel from "../../data/models/compost_list/compost_model";
import ComPostRepoImpl from "../../data/repositories_impl/compost_repo_impl";
import ComPostRepo from "../repositories/compost_repo";

class GetCommissionPosts {
  private compostRepo: ComPostRepo = new ComPostRepoImpl();
  async execute(params:{page:number, limit:number, categoryId?:number}): Promise<Resource<ComPostModel>> {
    console.log("Usecase executed:",{params});

    return this.compostRepo.getComPostList({ page: params.page,
      categoryId:params.categoryId,
      limit:params.limit});
  }
}

export default GetCommissionPosts;
