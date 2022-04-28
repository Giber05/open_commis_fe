export class WithdrawalEntity {
  id: number;
  destination: string;
  accountNumber: string;
  amount: number;
  disburseRefId: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(params: { id: number; destination: string; accountNumber: string; amount: number; disburseRefId: string; status: string; createdAt: Date; updatedAt: Date }) {
    this.id = params.id;
    this.destination = params.destination;
    this.accountNumber = params.accountNumber;
    this.amount = params.amount;
    this.disburseRefId = params.disburseRefId;
    this.status = params.status;
    this.createdAt = params.createdAt;
    this.updatedAt = params.updatedAt;
  }
}
