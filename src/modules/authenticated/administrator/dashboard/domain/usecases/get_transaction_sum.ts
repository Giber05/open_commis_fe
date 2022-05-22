import Resource from "../../../../../../core/utils/resource";
import { TransactionSumModel } from "../../data/models/transaction_sum/transaction_sum_model";
import { DashboardRepoImpl } from "../../data/repositories_impl/dashboard_repo_impl";
import { DashboardRepo } from "../repositories/dashboard_repo";

export class GetTransactionSummary {
  private dashboardRepo: DashboardRepo = new DashboardRepoImpl();

  async execute(params: { token: string; year?: number | undefined}): Promise<Resource<TransactionSumModel>> {
    return await this.dashboardRepo.getTransactionSummary({
      token: params.token,
      year: params.year,
    });
  }
}
