export class PaymentEntity {
  id: number;
  paymentMethod: string;
  paymentDate: Date;
  paymentLink: string;

  constructor(params: { id: number; paymentMethod: string; paymentDate: Date; paymentLink: string }) {
    this.id = params.id;
    this.paymentMethod = params.paymentMethod;
    this.paymentDate = params.paymentDate;
    this.paymentLink = params.paymentLink;
  }
}
