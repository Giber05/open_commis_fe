import NetworkConstant from "../../../../../../../core/constants/network_constant";
import BaseException from "../../../../../../../core/error/base_exception";
import BaseClient from "../../../../../../../core/utils/base_client";
import AdminComPostModel from "../../models/admin_composts_model";

export interface AdminManageComPostRemoteDS {
  getAdminComPosts(params: { token: string; page: number; limit: number; status?: string; keyword?: string; sortBy?: string; orderBy?: string }): Promise<AdminComPostModel>;
}

export class AdminManageComPostRemoteDSImpl implements AdminManageComPostRemoteDS {
  private baseClient = new BaseClient();

  async getAdminComPosts(params: { token: string; page: number; limit: number; status?: string | undefined; keyword?: string | undefined; sortBy?: string | undefined; orderBy?: string | undefined }): Promise<AdminComPostModel> {
    let getAdminComPostsURL = NetworkConstant.baseUrl + "commissions/dashboard";

    const response = await this.baseClient.getWithCookie({
      url: getAdminComPostsURL,
      configs: {
        params: {
          limit: params.limit,
          page: params.page,
          status: params.status,
          q: params.keyword,
          sort_by: params.sortBy,
          order_by: params.orderBy,
        },
        headers: {
          Authorization: "Bearer " + params.token,
        },
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return AdminComPostModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }
}
