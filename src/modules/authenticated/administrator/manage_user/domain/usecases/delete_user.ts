import Resource from "../../../../../../core/utils/resource";
import { DeleteModel } from "../../../../../common/delete/models/delete_model";
import { ManageUserRepoImpl } from "../../data/repositories_impl/manage_user_repo_impl";
import { ManageUserRepo } from "../repositories/manage_user_repo";

export class DeleteUser {
  private manageUserRepo: ManageUserRepo = new ManageUserRepoImpl();
  async execute(params: { token: string; role: string ;id: number }): Promise<Resource<DeleteModel>> {
    return await this.manageUserRepo.deleteUser({
      token: params.token,
      role: params.role,
      id:params.id,
    });
  }
}
