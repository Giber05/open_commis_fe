import Resource from "../../../../../../core/utils/resource";
import { ComPostDetailModel } from "../../../../../guest/commission_post/data/models/compost_detail/compost_detail_model";
import { DeleteComPostModel } from "../../../../illustrator/manage_compost/data/models/delete_compost_model";
import ManageComPostRepoImpl from "../../../../illustrator/manage_compost/data/repositories_impl/manage_compost_repository_impl";
import ManageComPostRepo from "../../../../illustrator/manage_compost/domain/repositories/manage_compost_repository";


export class AdminDeleteComPost {
  private manageComPostRepo: ManageComPostRepo = new ManageComPostRepoImpl();

  async execute(params: { token: string; compostId: number }): Promise<Resource<DeleteComPostModel>> {
    return await this.manageComPostRepo.deleteComPost({
      token: params.token,
      compostId:params.compostId
    });
  }
}