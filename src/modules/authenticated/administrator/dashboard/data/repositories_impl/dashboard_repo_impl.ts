import BaseRepository from "../../../../../../core/utils/base_repository";
import Resource from "../../../../../../core/utils/resource";
import { DashboardRepo } from "../../domain/repositories/dashboard_repo";
import { DashboardRemoteDS, DashboardRemoteDSImpl } from "../datasources/remote/dahsboard_remote_ds";
import { TransactionListModel } from "../models/transaction/transaction_list_model";

export class DashboardRepoImpl extends BaseRepository implements DashboardRepo {
  private dashboardRemoteDS:DashboardRemoteDS = new DashboardRemoteDSImpl()
  getTransactionList(params: { token: string; limit?: number | undefined; page: number; }): Promise<Resource<TransactionListModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.dashboardRemoteDS.getTransactionList({
          token:params.token,
          limit:params.limit,
          page:params.page,

        });
        if (resource instanceof TransactionListModel) return Resource.success({ data: resource });
        return Resource.error({ exception: resource });
      },
    });
  }
  
}