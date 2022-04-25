import { IllustratorOrderDetail } from "./illustrator_detail_order";

export class IllustratorOrderDetailModel {
  success: boolean;
  message: string;
  data: IllustratorOrderDetail;

  constructor(params: { success: boolean; message: string; data: IllustratorOrderDetail }) {
    this.success = params.success
    this.message = params.message
    this.data = params.data
  }
  public static fromJson(json: any): IllustratorOrderDetailModel {
    return new IllustratorOrderDetailModel({
      success: json.success,
      message: json.message,
      data: IllustratorOrderDetail.fromJson(json.data),
    });
  }
}