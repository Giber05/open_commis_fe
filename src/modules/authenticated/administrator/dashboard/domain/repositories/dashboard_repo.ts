import Resource from "../../../../../../core/utils/resource";
import { TransactionListModel } from "../../data/models/transaction/transaction_list_model";

export interface DashboardRepo {
  getTransactionList(params:{token:string; limit?:number;page:number}):Promise<Resource<TransactionListModel>>;
}
