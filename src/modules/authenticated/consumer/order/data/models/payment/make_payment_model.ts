import { MakePayment } from "./make_payment";

export class MakePaymentModel {
  message: string;
  success: boolean;
  data: MakePayment;

  constructor(params: { message: string; success: boolean; data: MakePayment }) {
    this.message = params.message;
    this.success = params.success;
    this.data = params.data;
  }

  public static fromJson(json: any): MakePaymentModel {
    return new MakePaymentModel({
      message: json.message,
      success: json.success,
      data: json.data,
    });
  }
}
