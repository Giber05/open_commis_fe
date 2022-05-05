import Resource from "../../../../../../core/utils/resource";
import { ComPostDetailModel } from "../../../../../guest/commission_post/data/models/compost_detail/compost_detail_model";
import ComPostRepoImpl from "../../../../../guest/commission_post/data/repositories_impl/compost_repo_impl";
import ComPostRepo from "../../../../../guest/commission_post/domain/repositories/compost_repo";

class AdminGetComPostDetail {
  private compostRepo: ComPostRepo = new ComPostRepoImpl();
  async execute(compostId: number): Promise<Resource<ComPostDetailModel>> {
    return this.compostRepo.getComPostDetail(compostId);
  }
}

export default AdminGetComPostDetail;
