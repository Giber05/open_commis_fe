import Resource from "../../../../../../core/utils/resource";
import ComPostModel from "../../../../../guest/commission_post/data/models/compost_list/compost_model";
import ComPostRepoImpl from "../../../../../guest/commission_post/data/repositories_impl/compost_repo_impl";
import ComPostRepo from "../../../../../guest/commission_post/domain/repositories/compost_repo";

class AdminGetComPostList {
  private compostRepo: ComPostRepo = new ComPostRepoImpl();
  async execute(params:{page:number, limit:number, categoryId?:number}): Promise<Resource<ComPostModel>> {

    return this.compostRepo.getComPostList({ page: params.page,
      categoryId:params.categoryId,
      limit:params.limit});
  }
}

export default AdminGetComPostList;