import { PaymentEntity } from "../../domain/entities/payment_entity";

export class PaymentModel extends PaymentEntity {
  public static fromJson(json: any): PaymentModel {
    return new PaymentModel({
      id: json.id,
      paymentMethod: json.paymentMethod,
      paymentDate: json.paymentDate,
      paymentLink: json.paymentLink,
    });
  }
}
