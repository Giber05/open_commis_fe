import Resource from "../../../../../../core/utils/resource";
import { ComPostDetailModel } from "../../../../../guest/commission_post/data/models/compost_detail/compost_detail_model";
import ManageComPostRepoImpl from "../../data/repositories_impl/manage_compost_repository_impl";
import ManageComPostRepo from "../repositories/manage_compost_repository";

export class ChangeComPostStatus {
  private manageComPostRepo: ManageComPostRepo = new ManageComPostRepoImpl();

  async execute(params: { token: string; status: string; compostId: number }): Promise<Resource<ComPostDetailModel>> {
    return await this.manageComPostRepo.changeComPostStatus({
      token: params.token,
      status: params.status,
      compostId: params.compostId,
    });
  }
}
