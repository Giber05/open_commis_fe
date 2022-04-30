export class OrderEntity {
  id: number;
  status: string;
  grandTotal: number;
  orderDate: Date;
  reviewed:boolean;

  constructor(params: { id: number; status: string; grandTotal: number; orderDate: Date; reviewed:boolean }) {
    this.id = params.id;
    this.status = params.status;
    this.grandTotal = params.grandTotal;
    this.orderDate = params.orderDate;
    this.reviewed = params.reviewed;
  }
}
