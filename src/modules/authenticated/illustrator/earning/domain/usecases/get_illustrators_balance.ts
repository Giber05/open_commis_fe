import Resource from "../../../../../../core/utils/resource";
import { IllustratorsBalanceModel } from "../../data/models/illustrators_balance_model";
import { EarningRepoImpl } from "../../data/repositories_impl/earning_repo_impl";
import { EarningRepo } from "../repositories/earning_repo";

export class GetIllustratorsBalance {
  private earningRepo:EarningRepo = new EarningRepoImpl()
  async execute(token:string):Promise<Resource<IllustratorsBalanceModel>>{
    return await this.earningRepo.getIllustratorsBalance(token)
  }
}