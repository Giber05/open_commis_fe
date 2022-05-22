import { TransactionSum } from "./transaction_sum";

export class TransactionSumModel {
  message: string;
  success: boolean;
  data: TransactionSum[];

  constructor(params: { message: string; success: boolean; data: TransactionSum[] }) {
    this.message = params.message;
    this.success = params.success;
    this.data = params.data;
  }

  public static fromJson(json: any): TransactionSumModel {
    return new TransactionSumModel({
      message: json.message,
      success: json.success,
      data: json.data.map((transactionSum: TransactionSum) => TransactionSum.fromJson(transactionSum)),
    });
  }
}
