import { VerifyTokenEntity } from "../../domain/entity/verify_token_entity";

export class VerifyTokenModel {
  success: boolean;
  message: string;
  data: VerifyToken;

  constructor(params: { data: VerifyToken; success: boolean; message: string }) {
    this.data = params.data;
    this.success = params.success;
    this.message = params.message;
  }

  public static fromJson(json: any): VerifyTokenModel {
    return new VerifyTokenModel({
      success: json.success,
      message: json.message,
      data: VerifyToken.fromJson(json.data),
    });
  }
}

export class VerifyToken extends VerifyTokenEntity {
  public static fromJson(json: any): VerifyToken {
    return new VerifyToken({
      role: json.role,
      tokenValid: json.tokenValid,
    });
  }
}
