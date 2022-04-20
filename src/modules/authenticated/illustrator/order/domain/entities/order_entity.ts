export class OrderEntity {
  id: number;
  status: string;
  grandTotal: number;
  orderDate: Date;

  constructor(params: { id: number; status: string; grandTotal: number; orderDate: Date }) {
    this.id = params.id;
    this.status = params.status;
    this.grandTotal = params.grandTotal;
    this.orderDate = params.orderDate;
  }
}
