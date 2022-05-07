import Resource from "../../../../../../core/utils/resource";
import { DestinationCodeModel } from "../../data/models/destination_code_model";
import { IllustratorsBalanceModel } from "../../data/models/illustrators_balance_model";
import { WithdrawalBalanceModel } from "../../data/models/withdrawal_balance_model";
import { WithdrawalHistoryModel } from "../../data/models/withdrawa_history_model";

export interface EarningRepo {
  getIllustratorsBalance(token:string):Promise<Resource<IllustratorsBalanceModel>>
  withdrawBalance(params: { token: string; amount: number; destination: string; accountNumber: string }): Promise<Resource<WithdrawalBalanceModel>>;
  getDestinationCode(token: string): Promise<Resource<DestinationCodeModel>>;
  getWithdrawalHistory(token: string): Promise<Resource<WithdrawalHistoryModel>>;

}