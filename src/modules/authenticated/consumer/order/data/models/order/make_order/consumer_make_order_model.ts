import { ConsumerMakeOrder } from "./consumer_make_order";

export class ConsumerMakeOrderModel {
  success: boolean;
  message: string;
  data: ConsumerMakeOrder;

  constructor(params: { success: boolean; message: string; data: ConsumerMakeOrder }) {
    this.success = params.success
    this.message = params.message
    this.data = params.data
  }
  public static fromJson(json: any): ConsumerMakeOrderModel {
    return new ConsumerMakeOrderModel({
      success: json.success,
      message: json.message,
      data: ConsumerMakeOrder.fromJson(json.data),
    });
  }
}