import Resource from "../../../../../../core/utils/resource";
import { ComPostDetailModel } from "../../../../../guest/commission_post/data/models/compost_detail/compost_detail_model";
import ComPostRepo from "../../../../../guest/commission_post/domain/repositories/compost_repo";
import ManageComPostRepoImpl from "../../data/repositories_impl/manage_compost_repository_impl";
import ManageComPostRepo from "../repositories/manage_compost_repository";

class GetIllustratorComPostDetail {
  private manageCompostRepo: ManageComPostRepo = new ManageComPostRepoImpl();
  async execute(compostId: number): Promise<Resource<ComPostDetailModel>> {
    return this.manageCompostRepo.getIllustratorComPostDetail(compostId);
  }
}

export default GetIllustratorComPostDetail;