import { WithdrawalBalance } from "./withdrawal_balance";
import { WithdrawalHistory } from "./withdrawal_history";

export class WithdrawalHistoryModel {
  success: boolean;
  message: string;
  data: WithdrawalHistory[];

  constructor(params: { success: boolean; message: string; data: WithdrawalHistory[] }) {
    this.success = params.success;
    this.message = params.message;
    this.data = params.data;
  }

  public static fromJson(json: any): WithdrawalHistoryModel {
    return new WithdrawalHistoryModel({
      success: json.success,
      message: json.message,
      data: json.data.map((history:WithdrawalHistory)=>WithdrawalHistory.fromJson(history)),
    });
  }
}
