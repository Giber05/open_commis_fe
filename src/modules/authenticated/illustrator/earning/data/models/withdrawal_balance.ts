import { WithdrawalEntity } from "../../domain/entities/withdrawal_entity";

export class WithdrawalBalance extends WithdrawalEntity {
  illustratorId: number;

  constructor(params: { id: number; destination: string; accountNumber: string; amount: number; disburseRefId: string; status: string; createdAt: Date; updatedAt: Date; illustratorId: number }) {
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
    this.illustratorId = params.illustratorId;
  }

  public static fromJson(json: any): WithdrawalBalance {
    return new WithdrawalBalance({
      id: json.id,
      destination: json.destination,
      accountNumber: json.accountNumber,
      amount: json.amount,
      disburseRefId: json.disburseRefId,
      status: json.status,
      createdAt: json.createdAt,
      updatedAt: json.updatedAt,
      illustratorId: json.illustratorId,
    });
  }
}
