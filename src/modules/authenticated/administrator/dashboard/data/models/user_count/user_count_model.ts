import { UserCount } from "./user_count";

export class UserCountModel {
  message: string;
  success: boolean;
  data: UserCount;

  constructor(params: { message: string; success: boolean; data: UserCount }) {
    this.message = params.message;
    this.success = params.success;
    this.data = params.data;
  }

  public static fromJson(json: any): UserCountModel {
    return new UserCountModel({
      message: json.message,
      success: json.success,
      data: UserCount.fromJson(json.data),
    });
  }
}
