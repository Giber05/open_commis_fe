import Resource from "../../../../../../core/utils/resource";
import { IllustratorsBalanceModel } from "../../data/models/illustrators_balance_model";
import { WithdrawalBalanceModel } from "../../data/models/withdrawal_balance_model";

export interface EarningRepo {
  getIllustratorsBalance(token:string):Promise<Resource<IllustratorsBalanceModel>>
  withdrawBalance(params: { token: string; amount: number; destination: string; accountNumber: string }): Promise<Resource<WithdrawalBalanceModel>>;

}