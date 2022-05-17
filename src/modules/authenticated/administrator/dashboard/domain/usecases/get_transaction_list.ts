import Resource from "../../../../../../core/utils/resource";
import { TransactionListModel } from "../../data/models/transaction/transaction_list_model";
import { DashboardRepoImpl } from "../../data/repositories_impl/dashboard_repo_impl";
import { DashboardRepo } from "../repositories/dashboard_repo";

export class GetTransactionList {
  private dashboardRepo: DashboardRepo = new DashboardRepoImpl();

  async execute(params: { token: string; limit?: number | undefined; page: number }): Promise<Resource<TransactionListModel>> {
    return await this.dashboardRepo.getTransactionList({
      token: params.token,
      limit: params.limit,
      page: params.page,
    });
  }
}
