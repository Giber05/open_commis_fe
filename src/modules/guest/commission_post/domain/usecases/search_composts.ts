import Resource from "../../../../../core/utils/resource";
import ComPostModel from "../../data/models/compost_list/compost_model";
import ComPostRepoImpl from "../../data/repositories_impl/compost_repo_impl";
import ComPostRepo from "../repositories/compost_repo";

class SearchComPosts {
  private compostRepo: ComPostRepo = new ComPostRepoImpl();
  async execute(params: { keyword: string }): Promise<Resource<ComPostModel>> {
    return this.compostRepo.searchComPosts({ keyword: params.keyword });
  }
}

export default SearchComPosts;
