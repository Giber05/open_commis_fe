export class VerifyTokenEntity {
  tokenValid:boolean;
  role:string;

  constructor(params:{tokenValid: boolean, role: string}) {
    this.tokenValid = params.tokenValid
    this.role = params.role
  }

}