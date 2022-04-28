import { DestinationCode } from "./destination_code";

export class DestinationCodeModel {
  success: boolean;
  message: string;
  data: DestinationCode[];

  constructor(params: { success: boolean; message: string; data: DestinationCode[] }) {
    this.success = params.success;
    this.message = params.message;
    this.data = params.data;
  }

  public static fromJson(json: any): DestinationCodeModel {
    return new DestinationCodeModel({
      success: json.success,
      message: json.message,
      data: json.data.map((x: DestinationCode) => DestinationCode.fromJson(x)),
    });
  }
}
