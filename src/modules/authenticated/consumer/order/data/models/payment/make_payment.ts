import { OrderModel } from "../../../../../../common/order/data/models/order_model";

export class MakePayment {
  paymentLink:string;
  order: OrderModel;

  constructor(params:{paymentLink: string, order: OrderModel}) {
    this.paymentLink = params.paymentLink
    this.order = params.order
  }

  public static fromJson(json:any):MakePayment{
    return new MakePayment ({
      paymentLink:json.paymentLink,
      order:OrderModel.fromJson(json.order)
    })
  }

}