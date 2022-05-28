import NetworkConstant from "../../../../../../../core/constants/network_constant";
import BaseException from "../../../../../../../core/error/base_exception";
import BaseClient from "../../../../../../../core/utils/base_client";
import { DeleteModel } from "../../../../../../common/delete/models/delete_model";
import { UserListModel } from "../../models/user_list/user_list_model";

export interface ManageUserRemoteDS {
  getAllUser(params: { token: string; role?: string; limit?: number; page?: number; keyword?: string }): Promise<UserListModel>;
  deleteUser(params: { token: string; role: string; id: number }): Promise<DeleteModel>;
}

export class ManageUserRemoteDSImpl implements ManageUserRemoteDS {
  private baseClient = new BaseClient();

  async deleteUser(params: { token: string; role: string; id: number }): Promise<DeleteModel> {
    let deleteUserURL = NetworkConstant.baseUrl + "users/" + params.role + "/" + params.id;

    const response = await this.baseClient.deleteWithCookie({
      url: deleteUserURL,
      configs: {
        headers: {
          Authorization: "Bearer " + params.token,
        },
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return DeleteModel.fromJson(body);
    }
    throw new BaseException({ message: response.data });
  }

  async getAllUser(params: { token: string; role?: string; limit?: number; page?: number; keyword?: string }): Promise<UserListModel> {
    let getAllUserURL = NetworkConstant.baseUrl + "users";

    const response = await this.baseClient.getWithCookie({
      url: getAllUserURL,
      configs: {
        params: {
          limit: params.limit,
          page: params.page,
          role: params.role,
          q: params.keyword,
        },
        headers: {
          Authorization: "Bearer " + params.token,
        },
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return UserListModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }
}
