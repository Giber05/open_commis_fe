import { VerifyIllustratorAccount } from "./verif_illustrator_account";

export class VerifyIllustratorAccountModel {
  success: boolean;
  message: string;
  data: VerifyIllustratorAccount;

  constructor(params: { success: boolean; message: string; data: VerifyIllustratorAccount }) {
    this.success = params.success;
    this.message = params.message;
    this.data = params.data;
  }

  public static fromJson(json: any): VerifyIllustratorAccountModel {
    return new VerifyIllustratorAccountModel({
      success: json.success,
      message: json.message,
      data: VerifyIllustratorAccount.fromJson(json.data),
    });
  }
}
