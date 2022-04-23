import Resource from "../../../../../../core/utils/resource";
import { ComPostDetailModel } from "../../../../../guest/commission_post/data/models/compost_detail/compost_detail_model";
import { DeleteComPostModel } from "../../data/models/delete_compost_model";
import ManageComPostRepoImpl from "../../data/repositories_impl/manage_compost_repository_impl";
import ManageComPostRepo from "../repositories/manage_compost_repository";

export class DeleteComPost {
  private manageComPostRepo: ManageComPostRepo = new ManageComPostRepoImpl();

  async execute(params: { token: string; compostId: number }): Promise<Resource<DeleteComPostModel>> {
    return await this.manageComPostRepo.deleteComPost({
      token: params.token,
      compostId:params.compostId
    });
  }
}