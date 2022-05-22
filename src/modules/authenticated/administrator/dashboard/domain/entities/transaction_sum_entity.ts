export class TransactionSumEntity {
  total:number;
  month:string;

  constructor(params:{total: number, month: string}) {
    this.total = params.total
    this.month = params.month
  }

}