import { ConsumerOrderDetail } from "./consumer_detail_order";

export class ConsumerOrderDetailModel {
  success: boolean;
  message: string;
  data: ConsumerOrderDetail;

  constructor(params: { success: boolean; message: string; data: ConsumerOrderDetail }) {
    this.success = params.success
    this.message = params.message
    this.data = params.data
  }
  public static fromJson(json: any): ConsumerOrderDetailModel {
    return new ConsumerOrderDetailModel({
      success: json.success,
      message: json.message,
      data: ConsumerOrderDetail.fromJson(json.data),
    });
  }
}