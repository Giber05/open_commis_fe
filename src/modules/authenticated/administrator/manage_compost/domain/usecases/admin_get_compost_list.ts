import Resource from "../../../../../../core/utils/resource";
import { AdminManageComPostRepoImpl } from "../../data/datasources/repositories_impl/admin_manage_compost_repo_impl";
import AdminComPostModel from "../../data/models/admin_composts_model";
import { AdminManageComPostRepo } from "../repositories/admin_manage_compost_repo";

class AdminGetComPostList {
  private adminManageComPostRepo: AdminManageComPostRepo = new AdminManageComPostRepoImpl();
  async execute(params: { token: string; page: number; limit: number; status?: string | undefined; keyword?: string | undefined; sortBy?: string | undefined; orderBy?: string | undefined }): Promise<Resource<AdminComPostModel>> {
    return this.adminManageComPostRepo.getAdminComPosts({
      page: params.page,
      token: params.token,
      limit: params.limit,
      orderBy: params.orderBy,
      status: params.status,
      sortBy: params.sortBy,
      keyword: params.keyword,
    });
  }
}

export default AdminGetComPostList;
