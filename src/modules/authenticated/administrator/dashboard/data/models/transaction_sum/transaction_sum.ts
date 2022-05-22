import { TransactionSumEntity } from "../../../domain/entities/transaction_sum_entity";

export class TransactionSum extends TransactionSumEntity {
  public static fromJson(json:any):TransactionSum{
    return new TransactionSum ({
      total :json.total,
      month :json.month,
    })
  }
}