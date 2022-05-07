import { WithdrawalEntity } from "../../domain/entities/withdrawal_entity";

export class WithdrawalHistory extends WithdrawalEntity {
  failureCode?: string | null;

  constructor(params: { id: number; destination: string; accountNumber: string; amount: number; disburseRefId: string; status: string; createdAt: Date; updatedAt: Date; failureCode?: string | null }) {
    super({
      id: params.id,
      destination: params.destination,
      accountNumber: params.accountNumber,
      amount: params.amount,
      disburseRefId: params.disburseRefId,
      status: params.status,
      createdAt: params.createdAt,
      updatedAt: params.updatedAt,
    });
    this.failureCode = params.failureCode;
  }

  public static fromJson(json: any): WithdrawalHistory {
    return new WithdrawalHistory({
      id: json.id,
      destination: json.destination,
      accountNumber: json.accountNumber,
      amount: json.amount,
      disburseRefId: json.disburseRefId,
      status: json.status,
      createdAt: json.createdAt,
      updatedAt: json.updatedAt,
      failureCode: json.failureCode,
    });
  }
}
