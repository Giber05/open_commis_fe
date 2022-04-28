import { WithdrawalBalance } from "./withdrawal_balance";

export class WithdrawalBalanceModel {
  success: boolean;
  message: string;
  data: WithdrawalBalance;

  constructor(params: { success: boolean; message: string; data: WithdrawalBalance }) {
    this.success = params.success;
    this.message = params.message;
    this.data = params.data;
  }

  public static fromJson(json: any): WithdrawalBalanceModel {
    return new WithdrawalBalanceModel({
      success: json.success,
      message: json.message,
      data: WithdrawalBalance.fromJson(json.data),
    });
  }
}
