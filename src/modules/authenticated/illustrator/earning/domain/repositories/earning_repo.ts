import Resource from "../../../../../../core/utils/resource";
import { IllustratorsBalanceModel } from "../../data/models/illustrators_balance_model";

export interface EarningRepo {
  getIllustratorsBalance(token:string):Promise<Resource<IllustratorsBalanceModel>>
}