import Resource from "../../../../../../core/utils/resource";
import { DestinationCodeModel } from "../../data/models/destination_code_model";
import { IllustratorsBalanceModel } from "../../data/models/illustrators_balance_model";
import { WithdrawalHistoryModel } from "../../data/models/withdrawa_history_model";
import { EarningRepoImpl } from "../../data/repositories_impl/earning_repo_impl";
import { EarningRepo } from "../repositories/earning_repo";

export class GetWithdrawalHistory {
  private earningRepo:EarningRepo = new EarningRepoImpl()
  async execute(token:string):Promise<Resource<WithdrawalHistoryModel>>{
    return await this.earningRepo.getWithdrawalHistory(token)
  }
}