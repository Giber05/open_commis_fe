import Resource from "../../../../../../core/utils/resource";
import { DestinationCodeModel } from "../../data/models/destination_code_model";
import { IllustratorsBalanceModel } from "../../data/models/illustrators_balance_model";
import { EarningRepoImpl } from "../../data/repositories_impl/earning_repo_impl";
import { EarningRepo } from "../repositories/earning_repo";

export class GetDestinationCode {
  private earningRepo:EarningRepo = new EarningRepoImpl()
  async execute(token:string):Promise<Resource<DestinationCodeModel>>{
    return await this.earningRepo.getDestinationCode(token)
  }
}