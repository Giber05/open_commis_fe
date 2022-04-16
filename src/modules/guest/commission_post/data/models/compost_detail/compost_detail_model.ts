import { CommissionPostDetail } from "./commission_post_detail";

export class ComPostDetailModel {
  success: boolean;
  message: string;
  data: CommissionPostDetail;

  constructor(params: { success: boolean; message: string; data: CommissionPostDetail }) {
    this.success = params.success;
    this.message = params.message;
    this.data = params.data;
  }

  public static fromJson (json:any):ComPostDetailModel{
    return new ComPostDetailModel({
      success:json.success,
      message: json.message,
      data:CommissionPostDetail.fromJson(json.data)
    })
  }

}
