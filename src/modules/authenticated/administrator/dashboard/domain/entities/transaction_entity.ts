export class TransactionEntity {
  id: number;
  illustrator: string;
  consumer: string;
  orderDate: Date;
  paymentMethod: string | null;
  grandTotal: number;

  constructor(params: { id: number; illustrator: string; consumer: string; orderDate: Date; paymentMethod: string; grandTotal: number }) {
    this.id = params.id;
    this.illustrator = params.illustrator;
    this.consumer = params.consumer;
    this.orderDate = params.orderDate;
    this.paymentMethod = params.paymentMethod;
    this.grandTotal = params.grandTotal;
  }
}
