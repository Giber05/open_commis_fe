import { TransactionEntity } from "../../../domain/entities/transaction_entity";

export class Transaction extends TransactionEntity {
  public static fromJson(json: any): Transaction {
    return new Transaction({
      id: json.id,
      illustrator: json.illustrator,
      consumer: json.consumer,
      orderDate: json.orderDate,
      paymentMethod: json.paymentMethod,
      grandTotal: json.grandTotal,
    });
  }
}
