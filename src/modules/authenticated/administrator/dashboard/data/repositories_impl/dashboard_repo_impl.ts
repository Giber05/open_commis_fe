import BaseRepository from "../../../../../../core/utils/base_repository";
import Resource from "../../../../../../core/utils/resource";
import { DashboardRepo } from "../../domain/repositories/dashboard_repo";
import { DashboardRemoteDS, DashboardRemoteDSImpl } from "../datasources/remote/dahsboard_remote_ds";
import { TransactionListModel } from "../models/transaction/transaction_list_model";
import { TransactionSumModel } from "../models/transaction_sum/transaction_sum_model";
import { UserCountModel } from "../models/user_count/user_count_model";

export class DashboardRepoImpl extends BaseRepository implements DashboardRepo {
  private dashboardRemoteDS: DashboardRemoteDS = new DashboardRemoteDSImpl();

  getUserCount(token: string): Promise<Resource<UserCountModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.dashboardRemoteDS.getUserCount(token);
        if (resource instanceof UserCountModel) return Resource.success({ data: resource });
        return Resource.error({ exception: resource });
      },
    });
  }
  getTransactionSummary(params: { token: string; year?: number | undefined }): Promise<Resource<TransactionSumModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.dashboardRemoteDS.getTransactionSummary({
          token: params.token,
          year: params.year,
        });
        if (resource instanceof TransactionSumModel) return Resource.success({ data: resource });
        return Resource.error({ exception: resource });
      },
    });
  }
  getTransactionList(params: { token: string; limit?: number | undefined; page: number }): Promise<Resource<TransactionListModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.dashboardRemoteDS.getTransactionList({
          token: params.token,
          limit: params.limit,
          page: params.page,
        });
        if (resource instanceof TransactionListModel) return Resource.success({ data: resource });
        return Resource.error({ exception: resource });
      },
    });
  }
}
