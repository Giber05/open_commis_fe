export class ResendVerifModel {
  success: boolean;
  message: string;
  data: null;

  constructor(params: { success: boolean; message: string; data: null }) {
    this.success = params.success;
    this.message = params.message;
    this.data = params.data;
  }

  public static fromJson(json: any): ResendVerifModel {
    return new ResendVerifModel({
      success: json.success,
      message: json.message,
      data: json.data,
    });
  }
}
