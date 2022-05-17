import Resource from "../../../../../../core/utils/resource";
import { UserListModel } from "../../data/models/user_list/user_list_model";
import { ManageUserRepoImpl } from "../../data/repositories_impl/manage_user_repo_impl";
import { ManageUserRepo } from "../repositories/manage_user_repo";

export class GetAllUser {
  private manageUserRepo: ManageUserRepo = new ManageUserRepoImpl();
  async execute(params: { token: string; role?: string | undefined; limit?: number | undefined; page?: number | undefined; keyword?: string | undefined }): Promise<Resource<UserListModel>> {
    return await this.manageUserRepo.getAllUser({
      token: params.token,
      role: params.role,
      limit: params.limit,
      page: params.page,
      keyword:params.keyword
    });
  }
}
