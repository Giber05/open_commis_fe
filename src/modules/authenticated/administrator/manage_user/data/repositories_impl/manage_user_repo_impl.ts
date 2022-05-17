import { message } from "antd";
import BaseException from "../../../../../../core/error/base_exception";
import BaseRepository from "../../../../../../core/utils/base_repository";
import Resource from "../../../../../../core/utils/resource";
import { DeleteModel } from "../../../../../common/delete/models/delete_model";
import { ManageUserRepo } from "../../domain/repositories/manage_user_repo";
import { ManageUserRemoteDS, ManageUserRemoteDSImpl } from "../datasources/remote/manage_user_remote_ds";
import { UserListModel } from "../models/user_list/user_list_model";

export class ManageUserRepoImpl extends BaseRepository implements ManageUserRepo {
  private manageUserRemoteDS:ManageUserRemoteDS = new  ManageUserRemoteDSImpl()
  
  deleteUser(params: { token: string; role: string; id: number; }): Promise<Resource<DeleteModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.manageUserRemoteDS.deleteUser({
          token:params.token,
          role:params.role,
          id:params.id,

        });
        if (resource instanceof DeleteModel) return Resource.success({ data: resource });
        return Resource.error({ exception: resource});
      },
    });
  }
  getAllUser(params: { token: string; role?: string | undefined; limit?: number | undefined; page?: number | undefined; keyword?: string | undefined; }): Promise<Resource<UserListModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.manageUserRemoteDS.getAllUser({
          token:params.token,
          role:params.role,
          limit:params.limit,
          page:params.page,
          keyword:params.keyword,

        });
        if (resource instanceof UserListModel) return Resource.success({ data: resource });
        return Resource.error({ exception: resource });
      },
    });
  }
  
}