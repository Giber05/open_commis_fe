import BaseRepository from "../../../../../../../core/utils/base_repository";
import Resource from "../../../../../../../core/utils/resource";
import ComPostModel from "../../../../../../guest/commission_post/data/models/compost_list/compost_model";
import { AdminManageComPostRepo } from "../../../domain/repositories/admin_manage_compost_repo";
import AdminComPostModel from "../../models/admin_composts_model";
import { AdminManageComPostRemoteDS, AdminManageComPostRemoteDSImpl } from "../remote/admin_manage_compost_remote_ds";

export class AdminManageComPostRepoImpl extends BaseRepository implements AdminManageComPostRepo {
  private adminManageComPostRemoteDS: AdminManageComPostRemoteDS = new AdminManageComPostRemoteDSImpl();
  getAdminComPosts(
    params: { token: string; page: number; limit: number; status?: string | undefined; keyword?: string | undefined; sortBy?: string | undefined; orderBy?: string | undefined }): Promise<Resource<AdminComPostModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.adminManageComPostRemoteDS.getAdminComPosts({
          page: params.page,
          token: params.token,
          limit: params.limit,
          orderBy: params.orderBy,
          status: params.status,
          sortBy: params.sortBy,
          keyword: params.keyword,
        });
        if (resource instanceof AdminComPostModel)
        return Resource.success({ data: resource });
        else{
          return Resource.error({exception:resource})
        }
      },
    });
  }
}
