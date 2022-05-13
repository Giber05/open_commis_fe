import Resource from "../../../../../core/utils/resource";
import ComPostModel from "../../data/models/compost_list/compost_model";
import ComPostRepoImpl from "../../data/repositories_impl/compost_repo_impl";
import ComPostRepo from "../repositories/compost_repo";

class GetCommissionPosts {
  private compostRepo: ComPostRepo = new ComPostRepoImpl();
  async execute(params: { page: number; limit: number; categoryId?: number; keyword?: string }): Promise<Resource<ComPostModel>> {
    return this.compostRepo.getComPostList({ page: params.page, categoryId: params.categoryId, limit: params.limit, keyword: params.keyword });
  }
}

export default GetCommissionPosts;
