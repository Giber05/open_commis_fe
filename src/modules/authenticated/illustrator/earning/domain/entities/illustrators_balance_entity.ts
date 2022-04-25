export class IllustratorsBalanceEntity {
  id: number;
  name: string;
  username: string;
  balance: number;

  constructor(params: { id: number; name: string; username: string; balance: number }) {
    this.id = params.id;
    this.name = params.name;
    this.username = params.username;
    this.balance = params.balance;
  }
}
