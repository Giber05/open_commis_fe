import Resource from "../../../../../../core/utils/resource";
import { TransactionListModel } from "../../data/models/transaction/transaction_list_model";
import { TransactionSumModel } from "../../data/models/transaction_sum/transaction_sum_model";
import { UserCountModel } from "../../data/models/user_count/user_count_model";

export interface DashboardRepo {
  getTransactionList(params:{token:string; limit?:number;page:number}):Promise<Resource<TransactionListModel>>;
  getTransactionSummary(params: { token: string; year?: number }): Promise<Resource<TransactionSumModel>>;
  getUserCount(token: string): Promise<Resource<UserCountModel>>;

}
