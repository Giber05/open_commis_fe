import Resource from "../../../../../core/utils/resource";
import { ComPostDetailModel } from "../../data/models/compost_detail/compost_detail_model";
import ComPostRepoImpl from "../../data/repositories_impl/compost_repo_impl";
import ComPostRepo from "../repositories/compost_repo";

class GetComPostDetail {
  private compostRepo: ComPostRepo = new ComPostRepoImpl();
  async execute(compostId: number): Promise<Resource<ComPostDetailModel>> {
    return this.compostRepo.getComPostDetail(compostId);
  }
}

export default GetComPostDetail;
