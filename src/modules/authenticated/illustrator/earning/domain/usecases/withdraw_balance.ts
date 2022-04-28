import Resource from "../../../../../../core/utils/resource";
import { WithdrawalBalanceModel } from "../../data/models/withdrawal_balance_model";
import { EarningRepoImpl } from "../../data/repositories_impl/earning_repo_impl";
import { EarningRepo } from "../repositories/earning_repo";

export class WithdrawBalance {
  private earningRepo: EarningRepo = new EarningRepoImpl();
  async execute(params: { token: string; amount: number; accountNumber: string; destination: string }): Promise<Resource<WithdrawalBalanceModel>> {
    return await this.earningRepo.withdrawBalance({ token: params.token, accountNumber: params.accountNumber, destination: params.destination, amount: params.amount });
  }
}
