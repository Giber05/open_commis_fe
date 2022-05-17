import PaginationModel from "../../../../../../common/pagination/model/pagination_model";
import { Transaction } from "./transaction";

export class TransactionListModel {
  message: string;
  success: true;
  data: TransactionList;

  constructor(params: { message: string; success: true; data: TransactionList }) {
    this.message = params.message;
    this.success = params.success;
    this.data = params.data;
  }

  public static fromJson(json: any): TransactionListModel {
    return new TransactionListModel({
      message: json.message,
      success: json.success,
      data: TransactionList.fromJson(json.data),
    });
  }
}

class TransactionList {
  pagination: PaginationModel;
  transactions: Transaction[];

  constructor(params: { pagination: PaginationModel; transactions: Transaction[] }) {
    this.pagination = params.pagination;
    this.transactions = params.transactions;
  }

  public static fromJson(json: any): TransactionList {
    return new TransactionList({
      pagination: PaginationModel.fromJson(json.pagination),
      transactions: json.transactions.map((transaction: Transaction) => Transaction.fromJson(transaction)),
    });
  }
}
