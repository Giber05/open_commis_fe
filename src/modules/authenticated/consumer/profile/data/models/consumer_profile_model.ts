import ConsumerModel from "../../../../../common/authentication/data/model/consumer_model";

export class ConsumerProfileModel {
  success: boolean;
  message: string;
  data: ConsumerModel;

  constructor(params: { success: boolean; message: string; data: ConsumerModel }) {
    this.success = params.success;
    this.message = params.message;
    this.data = params.data;
  }

  public static fromJson(json: any): ConsumerProfileModel {
    return new ConsumerProfileModel({
      success: json.success,
      message: json.message,
      data: ConsumerModel.fromJson(json.data),
    });
  }
}
