import Resource from "../../../../../../core/utils/resource";
import { TagModel } from "../../../../../common/commission/data/models/tag_model";
import ManageComPostRepoImpl from "../../data/repositories_impl/manage_compost_repository_impl";
import ManageComPostRepo from "../repositories/manage_compost_repository";

export class CreateTag {
  private manageComPostRepo: ManageComPostRepo = new ManageComPostRepoImpl();

  async execute(params: { token: string; tagName: string }): Promise<Resource<TagModel>> {
    return await this.manageComPostRepo.createTag({ tagName: params.tagName, token: params.token });
  }
}
