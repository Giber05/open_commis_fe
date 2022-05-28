import NetworkConstant from "../../../../../../../core/constants/network_constant";
import BaseException from "../../../../../../../core/error/base_exception";
import BaseClient from "../../../../../../../core/utils/base_client";
import { TransactionListModel } from "../../models/transaction/transaction_list_model";
import { TransactionSumModel } from "../../models/transaction_sum/transaction_sum_model";
import { UserCountModel } from "../../models/user_count/user_count_model";

export interface DashboardRemoteDS {
  getTransactionList(params: { token: string; limit?: number; page: number }): Promise<TransactionListModel>;
  getTransactionSummary(params: { token: string; year?: number }): Promise<TransactionSumModel>;
  getUserCount(token: string): Promise<UserCountModel>;
}

export class DashboardRemoteDSImpl implements DashboardRemoteDS {
  private baseClient = new BaseClient();

  async getUserCount(token: string): Promise<UserCountModel> {
    let getUserCountURL = NetworkConstant.baseUrl + "users/count";

    const response = await this.baseClient.getWithCookie({
      url: getUserCountURL,
      configs: {
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return UserCountModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }

  async getTransactionSummary(params: { token: string; year?: number | undefined }): Promise<TransactionSumModel> {
    let getTransactionSumURL = NetworkConstant.baseUrl + "transactions/summary";

    const response = await this.baseClient.getWithCookie({
      url: getTransactionSumURL,
      configs: {
        params: {
          year: params.year,
        },
        headers: {
          Authorization: "Bearer " + params.token,
        },
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return TransactionSumModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }
  async getTransactionList(params: { token: string; limit?: number; page: number }): Promise<TransactionListModel> {
    let getTransactionsURL = NetworkConstant.baseUrl + "transactions";

    const response = await this.baseClient.getWithCookie({
      url: getTransactionsURL,
      configs: {
        params: {
          limit: params.limit,
          page: params.page,
        },
        headers: {
          Authorization: "Bearer " + params.token,
        },
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return TransactionListModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }
}
